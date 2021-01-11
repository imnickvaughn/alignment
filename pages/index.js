import React, { useState, useRef } from 'react';
import Link from 'next/link';
import FormComponent from '../components/form.component.js';
import HeaderComponent from '../components/header.component.js';
import ResultsComponent from '../components/results.component.js';
import FaviconComponent from '../components/favicon.component.js';

// This is the main orchestration component and thus delegates application data
export default function Home(props) {

  const title = "Molecular Alignment Tool"

  // This is what provides the user with past searches and results
  const [matches, setMatches] = useState(() => {
    try {
      // We get matches from local storage by its key...'
      if (typeof window !== 'undefined') {
        const item = localStorage.getItem("matches");
        // ...then we parse stored json or if none are returned give an empty array.
        return item ? JSON.parse(item) : [];
      } else {
        return [];
      }
    }
    catch (error) {
      console.log(error);
      return [];
    }
  })

  var stateRef = useRef()
  stateRef.current = matches

  // We remove query matches from the local store and application state
  let removeMatches = (uid) => {
    let current = stateRef.current
    matches.splice(0, matches.length)
    for (let i = 0; i < current.length; i++) {
      if (current[i].id !== uid) {
        matches.push(current[i])
      }
    }
    if (typeof window !== 'undefined') {
      localStorage.setItem("matches", JSON.stringify(matches))
    }
    setMatches(matches.concat())
  }

  // We add query matches from the local store and application state
  let addMatches = (data) => {
    let current = stateRef.current
    let copy = []
    for (let i = 0; i < current.length; i++) {
      copy.push(current[i])
    }
    matches.splice(0, matches.length)
    for (let i = 0; i < copy.length; i++) {
      matches.push(copy[i])
    }
    matches.unshift(data[0])
    if (typeof window !== 'undefined') {
      localStorage.setItem("matches", JSON.stringify(matches))
    }
    setMatches(matches.concat())
  }

  // Orchestration of application components
  // All components are visible here even the seq-list auto-routed component which you can see in the link components
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
