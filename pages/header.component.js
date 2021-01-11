import React from 'react';
import styles from '../styles/header.module.css'
import { useRouter } from 'next/router'

// This component brings together and positions all the assets so that they are completely responsive.
export default function HeaderComponent() {

    const router = useRouter();
    const path = router.pathname;

    function displayHeader() {
        console.log(path)
        if (path === '/') {
            return (
                <>
                    <img className={styles.headerFore} src="headerFore0.svg#svgView(viewBox(1, 0, 2560, 1441))" alt="Header Foreground Image" />
                    <img className={styles.headerLeft} src="headerLeft0.svg#svgView(viewBox(0, 0, 184, 172))" alt="Header Left Image" />
                    <img className={styles.headerRight} src="headerRight0.svg#svgView(viewBox(0, 0, 796, 758))" alt="Header Right Image" />
                    <img className={styles.headerBack} src="headerBack0.svg#svgView(viewBox(1, 0, 2560, 1441))" alt="Header Background Image" />
                </>
            )
        }
        else {
            return (
                <>
                    <img className={styles.listheaderFore} src="listheaderFore0.svg#svgView(viewBox(0, 0, 2561, 1411))" alt="Header Foreground Image" />
                    <img className={styles.listheaderRight} src="listheaderRight0.svg#svgView(viewBox(0, 0, 370, 290))" alt="Header Right Image" />
                    <img className={styles.listheaderBack} src="listheaderBack0.svg#svgView(viewBox(0, 0, 2561, 1442))" alt="Header Background Image" />
                </>
            )
        }
    }

    return (
        <div>
            {displayHeader()}
            <div className={styles.headerPadding}></div>
        </div>
    )
}