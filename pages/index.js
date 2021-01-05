import Head from 'next/head'
import HeaderComponent from './header.component.js'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FormComponent from './form.component.js';
import Link from 'next/link';
import React from 'react';


export default function Home() {
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
      <Head>
        <title>Molecular Alignment</title>
        {favIconDisplay()}
      </Head>

      <HeaderComponent />
      <div className="content-container">
        <FormComponent />
        <Link href='/seq-list'><img className="icon" src="chevronRight0.svg" alt="Navigate to Seq List Page" /></Link>


      </div>





    </div>
  )
}
