import * as React from 'react'
export default function Image(props:any) {
    return <div>
        <img style={{
        margin: "0",
        borderRadius: "20px",
        backgroundColor:'lightgray',
        minHeight:'100px',
        minWidth:'100px',
        maxWidth:'800px',
    }} width="100%" src={props.path} loading="lazy"/>
    </div>
}