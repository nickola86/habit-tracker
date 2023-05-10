import * as React from 'react'
import { Helmet } from 'react-helmet'
export interface MetaHeadersType{
    title: string,
    url: string,
    image: string,
    generator: string,
    description: string[]
}
export default function MetaHeaders(props: MetaHeadersType){
    return <Helmet>
        <title>{props.title}</title>
        <meta property="og:title" content={props.title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={props.url} />
        <meta property="og:image" content={props.image} />
        <meta name="generator" content="Smart Working Van, an office on wheels with everything you need to work efficiently and travel!" />
        <meta name="description" lang="en" content="" />
        <meta name="description" lang="it" content="" />
    </Helmet>
}