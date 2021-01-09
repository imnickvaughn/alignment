import FormComponent from './form.component.js';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import FaviconComponent from './favicon.component.js';
import ResultsComponent from './results.component.js';
import styles from '../styles/home.module.css'
import HeaderComponent from './header.component.js';

export default function Home(props) {

  const title = "Molecular Alignment Tool"

  const [matches, setMatches] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem("matches");
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : [];
    }
    catch (error) {
      console.log(error);
      return [];
    }
  })
  var stateRef = useRef()
  stateRef.current = matches

  let removeMatches = (uid) => {

    let c = stateRef.current

    matches.splice(0, matches.length)

    for (let i = 0; i < c.length; i++) {
      if (c[i].id !== uid) {
        matches.push(c[i])
      }
    }

    localStorage.setItem("matches", JSON.stringify(matches))
    setMatches(matches.concat())
  }

  let addMatches = (data) => {

    let c = stateRef.current

    let copy = []

    for (let i = 0; i < c.length; i++) {
      copy.push(c[i])
    }

    matches.splice(0, matches.length)

    for (let i = 0; i < copy.length; i++) {
      matches.push(copy[i])
    }

    matches.unshift(data[0])
    localStorage.setItem("matches", JSON.stringify(matches))
    setMatches(matches.concat())

  }

  return (
    <div>
      <FaviconComponent title={title} />
      <HeaderComponent />
      <div className="pageContainer">
        <Link href='/seq-list'><img className="pageRoute" src="chevronLeft0.svg" alt="Navigate to Seq List Page" /></Link>
        <div className="pageContent">
          <FormComponent addMatches={addMatches} removeMatches={removeMatches} />
          <ResultsComponent matches={matches} />
        </div>
        <Link href='/seq-list'><img className="pageRoute" src="chevronRight0.svg" alt="Navigate to Seq List Page" /></Link>
      </div>
    </div>
  )
}
