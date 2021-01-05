import Link from "next/link";
import React from "react";
// @ts-ignore
import styles from '../styles/home.module.css'


export default function SeqListPage() {
    return (
        <div>
            <img className={styles.backgroundImage1440} src="backGroundListPage0.svg#svgView(viewBox(0, 0, 415, 233))" alt="Header Image" />
            <h1>Seq list works!</h1>
            <Link href='/'><img className="icon" src="chevronLeft0.svg" alt="Navigate to Seq List Page" /></Link>
        </div>
    )
}