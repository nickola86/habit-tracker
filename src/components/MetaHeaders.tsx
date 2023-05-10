import * as React from 'react'
import { Helmet } from 'react-helmet'
import { meta } from '../config/values'
export interface MetaHeadersType{
    title?: string,
    url?: string,
    image?: string,
    generator?: string,
    description_it?: string,
    description_en?: string
}
export default function MetaHeaders(props: MetaHeadersType){
    return <Helmet>
        <title>{props.title || meta.title}</title>
        <meta property="og:title" content={props.title || meta.title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={props.url || meta.url} />
        <meta property="og:image" content={`https://www.smartworkingvan.com${props.image || meta.image}`} />
        <meta name="generator" content={props.generator || meta.generator} />
        <meta name="description" lang="it" content={props.description_it || meta.description_it} />
        <meta name="description" lang="en" content={props.description_en || meta.description_en} />
    </Helmet>
}