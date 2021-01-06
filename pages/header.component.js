// @ts-ignore
import styles from '../styles/Home.module.css'
import React from 'react';
import { useRouter } from 'next/router'

export default function HeaderComponent() {

    const router = useRouter();
    const path = router.pathname;

    function displayHeader() {
        console.log(path)
        if (path === '/') {
            return (
                <div>
                    <img className={styles.headerFore} src="headerFore0.svg#svgView(viewBox(1, 0, 2560, 1441))" alt="Header Foreground Image" />
                    <img className={styles.headerLeft} src="headerLeft0.svg#svgView(viewBox(0, 0, 184, 172))" alt="Header Left Image" />
                    <img className={styles.headerRight} src="headerRight0.svg#svgView(viewBox(0, 0, 796, 758))" alt="Header Right Image" />
                    <img className={styles.headerBack} src="headerBack0.svg#svgView(viewBox(1, 0, 2560, 1441))" alt="Header Background Image" />
                </div>
            )
        }
        else {
            return (
                <div>
                    <img className={styles.listheaderBack} src="listheaderBack0.svg#svgView(viewBox(0 , 0, 2561, 360))" alt="Header Background Image" />
                    <img className={styles.listheaderRight} src="listheaderRight0.svg#svgView(viewBox(0, 0, 342, 135))" alt="Header Right Image" />
                </div>
            )
        }
    }

    return (
        <div>
            <div>
                {displayHeader()}
            </div>
            <div className={styles.headerPadding}></div>
        </div>
    )
}