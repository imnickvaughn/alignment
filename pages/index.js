import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HeaderComponent from './header.component.js'
import useMediaQuery from '@material-ui/core/useMediaQuery';


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
    <div className="styles.container">
      <Head>
        <title>Molecular Alignment</title>
        {favIconDisplay()}
      </Head>

      <HeaderComponent />





    </div>
  )
}
