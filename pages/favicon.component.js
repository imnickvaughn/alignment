import { useMediaQuery } from "@material-ui/core";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
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


        <div>
            <title>{props.title}</title>
            {favIconDisplay()}
        </div>
    )
}