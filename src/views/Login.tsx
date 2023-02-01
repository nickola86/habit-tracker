import * as React from "react";
import { useState, useEffect } from "react";
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
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import "../styles/Login.css";
import {
  useAuthentication,
  LoginRequest,
  LoginResponse,
} from "../services/useAuthentication";
import { User } from "../components/types";
import { useMutation, useQuery } from "react-query";

export default function Login() {
  const { t } = useTranslation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState("");
  
  const authSvc = useAuthentication();
  const loginMutation = useMutation(authSvc.login)

  useEffect(() => {
    if (user.isUserLoggedIn) navigate("/");
  }, [user, navigate]);

  /*
  const doLogin = async () => {
    const user: User = { username, password };
    const loginRequest: LoginRequest = {
      user,
    };
    await loginMutation.mutate(loginRequest)
    setUser(loginMutation.data?.user || {});
    setLoginStatus(loginMutation.data?.status || "");
  };*/
  const doLogin = () => {
    const user: User = { username, password };
    const loginRequest: LoginRequest = {
      user,
    };
    authSvc.login(loginRequest).then((loginResponse: LoginResponse) => {
      setUser(loginResponse.user);
      setLoginStatus(loginResponse.status);
    });
  };

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
                e.key === "Enter" && doLogin();
              }}
            />
            <br />
            <br />
            <TextField
              variant="outlined"
              label="Password"
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              onKeyUp={(e) => {
                e.key === "Enter" && doLogin();
              }}
            />
          </CardContent>
          <CardActions>
            <Button size="small" onClick={doLogin}>
              {t("logMeIn")}
            </Button>
          </CardActions>
          <Typography sx={{ fontSize: 12 }} color="text.secondary" mb={2}>
            <Link color="inherit" href="/forgotpassword">
              {t("forgotPassword")}
            </Link>
            <Link ml={2} color="inherit" href="/signup">
              {t("notAMember")}
            </Link>
          </Typography>
          <Typography sx={{ fontSize: 12 }} color="red" mb={3}>
              {loginStatus === "fail" && t("loginFailed")}
          </Typography>
        </Card>
      </div>
    </React.Fragment>
  );
}
