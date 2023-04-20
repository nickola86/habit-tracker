import { Grid } from '@mui/material';
import * as React from 'react';
import '../styles/Ciro.css';
import { routes } from '../config/menu';

export default function Ciro() {
  
  const appRoutes = routes.filter(r=>r.requiresAuthentication===false && r.isHomePage!==true)

  return (
    <div>
      <div className={'img-gradient'}>
        <img width="100%" src={`/static/images/foto.jpg`} />
      </div>
      <Grid p={1}>
      {
        appRoutes.map(r=>r.element)
      }
      </Grid>
    </div>
  );
}