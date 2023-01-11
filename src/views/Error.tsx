import { Typography } from '@mui/material';
import * as React from 'react'
import Typewriter from 'typewriter-effect';
import ResponsiveAppBar from "../components/ResponsiveAppBar";

export default function Error(){
    return <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <Typography mt={3} mb={3}>
                <Typewriter
                    onInit={(typewriter) => {
                    typewriter.typeString('Oh no! Something awfully wrong here! ')
                        .pauseFor(1000)
                        .typeString('If you meet Joy, tell her this UUID: 564f1a9e-f013-43a5-b428-8ae0d8f16556')
                        .start();
                    }}
                />
            </Typography>
            <img style={{maxWidth:'300px'}} src='/static/images/avatars/sadness.png'></img>
        </div>
}