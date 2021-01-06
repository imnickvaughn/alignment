import Head from 'next/head'
import HeaderComponent from './header.component.js'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FormComponent from './form.component.js';
import Link from 'next/link';
import React from 'react';
import FaviconComponent from './favicon.component.js';

export default function Home() {
  const title = "Molecular Alignment Tool"


  return (
    <div >
      <Head>
        <FaviconComponent title={title} />
      </Head>
      <div>
        <HeaderComponent />
        <div className="content-container">
          <FormComponent />
          <Link href='/seq-list'><img className="icon" src="chevronRight0.svg" alt="Navigate to Seq List Page" /></Link>
        </div>
      </div>
    </div>
  )
}
