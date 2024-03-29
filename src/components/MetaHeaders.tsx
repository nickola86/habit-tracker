import * as React from 'react'
import { Helmet } from 'react-helmet'
import { meta } from '../config/values'
import { DefaultTFuncReturn } from 'i18next'
export interface MetaHeadersType{
    title?: string | DefaultTFuncReturn,
    url?: string,
    image?: string,
    generator?: string,
    description_it?: string,
    description_en?: string
}
export default function MetaHeaders(props: MetaHeadersType){
    return <Helmet>
        <title>{props.title || meta.title}</title>

        <meta name="generator" content={props.generator || meta.generator} />
        <meta name="description" lang="it" content={props.description_it || meta.description_it} />
        <meta name="description" lang="en" content={props.description_en || meta.description_en} />

        <meta property="og:title" content={props.title as string || meta.title as string} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={props.url || meta.url} />
        <meta property="og:image" content={`https://www.smartworkingvan.com${props.image || meta.image}`} />

        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="smartworkingvan.com" />
        <meta property="twitter:url" content={props.url || meta.url}/>
        <meta name="twitter:title" content={props.title as string || meta.title as string}/>
        <meta name="twitter:description" content={props.description_en || meta.description_en} />
        <meta name="twitter:image" content={`https://www.smartworkingvan.com${props.image || meta.image}`}/>
    </Helmet>
}