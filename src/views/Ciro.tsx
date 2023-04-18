import { Divider, Grid, Typography } from '@mui/material';
import * as React from 'react';
import '../styles/Ciro.css';
import { routes } from '../config/menu';
import { Anchor } from '@mui/icons-material';

export default function Ciro() {
  
  const appRoutes = routes.filter(r=>r.requiresAuthentication===false)

  return (
    <div>
      <div className={'img-gradient'}>
        <img width="100%" src={`/static/images/foto.jpg`} />
      </div>
      {
        appRoutes.map(r=><div key={r.pageName}>
          <Typography component="h1" variant="h3" color="inherit" gutterBottom>
            <a id={r.pageName}>{r.pageName}</a>
          </Typography>
          <Typography variant="h5" color="inherit" paragraph>
            Testo.. ecc...ecc...
          </Typography>
        </div>)
      }
    </div>
  );
}