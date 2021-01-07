import FormComponent from './form.component.js';
import Link from 'next/link';
import React from 'react';
import FaviconComponent from './favicon.component.js';
import ResultsComponent from './results.component.js';
import styles from '../styles/home.module.css'
import HeaderComponent from './header.component.js';

export default function Home() {
  const title = "Molecular Alignment Tool"
  const description = "This is an ungapped local dna sequence alignment."

  return (
    <>
      <FaviconComponent title={title} />
      <HeaderComponent />
      <div className="pageDescription center">{description}</div>
      <div className="pageContainer">
        <Link href='/seq-list'><img className="pageRoute" src="chevronLeft0.svg" alt="Navigate to Seq List Page" /></Link>
        <div className="pageContent">
          <FormComponent />
          <ResultsComponent />
        </div>
        <Link href='/seq-list'><img className="pageRoute" src="chevronRight0.svg" alt="Navigate to Seq List Page" /></Link>
      </div>
    </>
  )
}
