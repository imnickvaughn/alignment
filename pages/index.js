import Head from 'next/head'
import HeaderComponent from './header.component.js'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FormComponent from './form.component.js';
import Link from 'next/link';
import React from 'react';
import FaviconComponent from './favicon.component.js';
import ResultsComponent from './results.component.js';
import styles from '../styles/root.module.css'

export default function Home() {
  const title = "Molecular Alignment Tool"


  return (
    <div >
      <Head>
        <FaviconComponent title={title} />
      </Head>
      <div>
        <HeaderComponent />
        <h4 className={styles.homeDescription}>This is an ungapped local dna sequence alignment.</h4>
        <div className="row">
          <div className="rowContainer">
            <FormComponent />
            <ResultsComponent />
          </div>
          <Link href='/seq-list'><img className={styles.homeNextPageButton} src="chevronRight0.svg" alt="Navigate to Seq List Page" /></Link>

        </div>

      </div>
    </div>
  )
}
