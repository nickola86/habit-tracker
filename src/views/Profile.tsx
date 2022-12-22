import { Avatar } from '@mui/material';
import { width } from '@mui/system';
import * as React from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar';

export default function Profile() {
  return (
      <React.Fragment>
          <div style={{ display:"flex", justifyContent:"center", alignItems:"center", marginTop:"1em"}}>
            <Avatar src="/static/images/avatars/user.jpg" sx={{width:"150px",height:"150px"}}/>
          </div>
    </React.Fragment>
  );
}