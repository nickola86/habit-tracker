import * as React from "react";
import {useState} from "react";
import { useRecoilState } from "recoil";
import { userState } from "../atoms/userState";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import "../styles/Login.css";
import { useMutation, useQuery } from "react-query";
import {bearerState} from "../atoms/bearer"
import * as LoginApi from '../api/LoginApi'
import {LoginRequest, LoginResponse} from "../api/LoginApi";
import {AxiosResponse,AxiosError} from "axios";
import {Spinner} from "../components/Spinner";
import {CircularProgress} from "@mui/material";

export default function Login() {
  const { t } = useTranslation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState('');
  const [loginErrorMessage, setLoginErrorMessage] = useState('');
  const [bearer,setBearer] = useRecoilState(bearerState)


  const loginMutation = useMutation(LoginApi.doLogin,
      {
        onSuccess:(response: LoginResponse)=>{
          setLoginStatus('success')
          setBearer(response.access_token)
          setUser({isUserLoggedIn:true, ...response.user})
          navigate("/")
        },
        onError:(error: AxiosError)=>{
            setLoginStatus('fail')
            setLoginErrorMessage(error.message)
            console.log(error)
        },
      })

  const doLogin = async (event: React.MouseEvent | React.KeyboardEvent | React.ChangeEvent) => {
      event.preventDefault()
      const request: LoginRequest = {
          user : {
              username, password
          }
      }
      loginMutation.mutate(request)
  }

  return (
    <React.Fragment>
      <div className="login-box">
        <Card
          sx={{
            width: 300,
            height: 340,
            display: "flex",
            flexFlow: "column",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <CardContent>
            <Typography variant="h6" mb={2} mt={2}>{t('Login')}</Typography>
            <TextField
              variant="outlined"
              label={t("Username")}
              id="username"
              onChange={(e) => setUsername(e.target.value)}
              onKeyUp={(e) => {
                e.key === "Enter" && doLogin(e);
              }}
            />
            <br />
            <br />
            <TextField
              variant="outlined"
              label="Password"
              id="password"
              type="password"
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setPassword(e.target.value)}
              onKeyUp={(e: React.KeyboardEvent<HTMLDivElement>) => {
                e.key === "Enter" && doLogin(e);
              }}
            />
          </CardContent>
            {
                !loginMutation.isLoading &&
                <CardActions>
                    <Button size="small" onClick={(e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>)=>{doLogin(e)}}>
                        {t("logMeIn")}
                    </Button>
                </CardActions>
            }
            {
                !!loginMutation.isLoading && <CircularProgress/>
            }
          <Typography sx={{ fontSize: 12 }} color="text.secondary" mb={2}>
            <Link color="inherit" href="/forgotpassword">
              {t("forgotPassword")}
            </Link>
            <Link ml={2} color="inherit" href="/signup">
              {t("notAMember")}
            </Link>
          </Typography>
          <Typography sx={{ fontSize: 12 }} color="red" mb={3}>
              {loginStatus === "fail" && t(loginErrorMessage)}
          </Typography>
        </Card>
      </div>
    </React.Fragment>
  );
}
