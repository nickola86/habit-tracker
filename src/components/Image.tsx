import * as React from 'react'
export default function Image(props:any) {
    return <div>
        <img style={{
        margin: "0",
        borderRadius: "20px",
        backgroundColor:'lightgray',
        maxWidth:'600px',
    }} width={props.width || "100%"} height={props.height || undefined} src={props.path} loading="lazy"/>
    </div>
}