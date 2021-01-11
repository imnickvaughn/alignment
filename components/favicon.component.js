import React from "react";
import Head from "next/head";
import { useMediaQuery } from "@material-ui/core";

export default function FaviconComponent(props) {
    const matchesMediaDark = useMediaQuery('(prefers-color-scheme: dark)');

    const favIconDisplay = () => {
        matchesMediaDark ? <link rel="icon" href="/faviconDarkBrowser.svg" /> : <link rel="icon" href="/faviconLightBrowser.svg" />
    }

    return (
        <Head>
            <title>{props.title}</title>
            {favIconDisplay()}
        </Head>
    )
}