import { useMediaQuery } from "@material-ui/core";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import Head from "next/head";
import React from "react";

export default function FaviconComponent(props) {
    const matchesMediaDark = useMediaQuery('(prefers-color-scheme: dark)');

    const favIconDisplay = () => {
        if (matchesMediaDark) {
            return <link rel="icon" href="/faviconDarkBrowser.svg" />
        }
        else {
            return <link rel="icon" href="/faviconLightBrowser.svg" />
        }
    }

    return (
        <Head>
            <title>{props.title}</title>
            {favIconDisplay()}
        </Head>
    )
}