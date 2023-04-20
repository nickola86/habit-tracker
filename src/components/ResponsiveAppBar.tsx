import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import { useNavigate } from "react-router-dom";
import { routes, externalLinks } from '../config/menu';
import { useRecoilValue } from 'recoil';
import { userState } from '../atoms/userState';
import { useTranslation } from 'react-i18next';

import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { AirportShuttle } from '@mui/icons-material';

function ResponsiveAppBar() {

  const { t, i18n } = useTranslation();
  const languages = Object.keys(i18n.services.resourceStore.data);
  const {isUserLoggedIn} = useRecoilValue(userState)
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [anchorElLang, setAnchorElLang] = React.useState<null | HTMLElement>(null);
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);
  const [showNotifications, setShowNotifications] = React.useState(false);
  
  const navigate = useNavigate();

  const theme = useTheme()

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));
  
  
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setDrawerOpen(true);
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
    setDrawerOpen(false)
    navigate(path)
  };

  const switchLanguage = (lang: string) => {
    handleCloseLangMenu()
    i18n.changeLanguage(lang)
  }

  const appRoutes = routes.filter(r=>r.requiresAuthentication===isUserLoggedIn && r.isHomePage!==true)
  const appLinks = externalLinks.filter(r=>r.requiresAuthentication===isUserLoggedIn)

  return (
    <>
    <AppBar position="fixed" style={{ background: '#ffffff' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenUserMenu}
            color="default"
          >
            <MenuIcon/>
          </IconButton>        
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                  <Typography textAlign="center"
                  >{r.pageName}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 1,
              ml:0,
              display: { xs: 'flex', md: 'flex' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 600,
              letterSpacing: '.01rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            {t('appName')}
          </Typography>

          {<Box sx={{ flexGrow: 0}}>
            <Tooltip title={t('changeLanguage')}>
              <IconButton onClick={handleOpenLangMenu} sx={{ p: 0, m:0}}>
                <Avatar   sx={{ width: 24, height: 24 }} alt={i18n.language} src={`/static/images/flags/${i18n.language}.svg`} />
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
              {languages.map((l) => (
                <MenuItem key={l} onClick={()=>switchLanguage(l)}>
                  <Avatar src={`/static/images/flags/${l}.svg`} />
                </MenuItem>
              ))}
            </Menu>
          </Box>
          }

          {<Box sx={{ flexGrow: 0 , marginLeft:"1em"}}>
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
              {appRoutes.map((s) => (
                  <MenuItem key={s.pageName} onClick={()=>handleCloseNavMenuAndGo(s.path)}>
                    <Typography textAlign="center">{t(s.pageName)}</Typography>
                  </MenuItem>
              ))}
              <hr/>
              {externalLinks.map((s) => (
                  <MenuItem key={s.pageName} onClick={()=>handleCloseNavMenuAndGo(s.path)}>
                    <Typography textAlign="center">{t(s.pageName)}</Typography>
                  </MenuItem>
              ))}
            </Menu>
          </Box>}

          {<Drawer
            anchor="left"
            open={isDrawerOpen}
            onClose={()=>setDrawerOpen(false)}
          >
            <DrawerHeader>
              <IconButton onClick={()=>setDrawerOpen(false)}>
                <ChevronLeftIcon />
              </IconButton>
            </DrawerHeader>
            <List>
            {appRoutes.map((s) => (
                <ListItem key={s.pageName} disablePadding onClick={()=>handleCloseNavMenuAndGo(s.path)}>
                <ListItemButton>
                  <ListItemIcon>
                    {s.icon}
                  </ListItemIcon>
                  <ListItemText primary={t(s.pageName)} />
                </ListItemButton>
              </ListItem>
            ))}
            </List>
            <Divider/>
            <List>
            {externalLinks.map((s) => (
                <ListItem key={s.pageName} disablePadding onClick={()=>handleCloseNavMenuAndGo(s.path)}>
                <ListItemButton>
                  <ListItemIcon>
                    {s.icon}
                  </ListItemIcon>
                  <ListItemText primary={t(s.pageName)} />
                </ListItemButton>
              </ListItem>
            ))}
            </List>
          </Drawer>}

          {isUserLoggedIn && 
            <React.Fragment>
              {
                showNotifications && 
                <IconButton onClick={()=>null} sx={{ p: 1 }}>                
                  <Typography color={'black'}><NotificationsIcon /></Typography>
                </IconButton>
              }
              <IconButton onClick={()=>navigate('/profile')} sx={{ p: 1 }}>
                <Avatar src={`/static/images/avatars/user.jpg`} />
              </IconButton>
            </React.Fragment>
          }
        </Toolbar>
      </Container>
    </AppBar>
    {
      //second <Toolbar/> trick - avoid affix-top issues
    }
    <Toolbar />
    </>
  );
}
export default ResponsiveAppBar;