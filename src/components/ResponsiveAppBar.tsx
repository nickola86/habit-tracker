import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AccessAlarm from '@mui/icons-material/AccessAlarm';
import { useNavigate } from "react-router-dom";
import { routes,settings } from '../atoms/routesConfig';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userState } from '../atoms/userState';
import { useTranslation } from 'react-i18next';
import { selectedLanguage, supportedLanguages } from '../atoms/i18n';

function ResponsiveAppBar() {
  const { t, i18n } = useTranslation();
  const langs = useRecoilValue(supportedLanguages)
  const [selLang,setSelectedLanguage] = useRecoilState(selectedLanguage)
  const {isUserLoggedIn} = useRecoilValue(userState)
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [anchorElLang, setAnchorElLang] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleOpenLangMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElLang(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleCloseLangMenu = () => {
    setAnchorElLang(null);
  };
  const handleCloseNavMenuAndGo = (path: string) => {
    handleCloseNavMenu()
    navigate(path)
  };

  const switchLanguage = (lang: string) => {
    handleCloseLangMenu()
    i18n.changeLanguage(lang)
    setSelectedLanguage(lang)
  }

  const appRoutes = useRecoilValue(routes).filter(r=>r.requiresAuthentication===isUserLoggedIn)
  const appSettings = useRecoilValue(settings).filter(r=>r.requiresAuthentication===isUserLoggedIn)

  return (
    <AppBar position="static" style={{ background: '#2E3B55' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AccessAlarm sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {t('appName')}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {appRoutes.map((r) => (
                <MenuItem key={r.pageName} onClick={()=>handleCloseNavMenuAndGo(r.path)}>
                  <Typography textAlign="center">{r.pageName}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AccessAlarm sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {t('appName')}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {appRoutes.map((r) => (
              <Button
                key={r.pageName}
                onClick={()=>handleCloseNavMenuAndGo(r.path)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {r.pageName}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0}}>
            <Tooltip title="Change Language">
              <IconButton onClick={handleOpenLangMenu} sx={{ p: 0 }}>
                <Avatar alt={selLang} src={`/static/images/flags/${selLang}.svg`} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElLang}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElLang)}
              onClose={handleCloseLangMenu}
            >
              {langs.map((l) => (
                <MenuItem key={l} onClick={()=>switchLanguage(l)}>
                  <Avatar alt="Italian" src={`/static/images/flags/${l}.svg`} />
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {isUserLoggedIn && <Box sx={{ flexGrow: 0 , marginLeft:"1em"}}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatars/kid.png" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {appSettings.map((s) => (
                <MenuItem key={s.pageName} onClick={()=>handleCloseNavMenuAndGo(s.path)}>
                  <Typography textAlign="center">{s.pageName}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;