import Head from "next/head";
import Link from "next/link";
import React from "react";
// @ts-ignore
import styles from '../styles/home.module.css'
import FaviconComponent from "./favicon.component";
import HeaderComponent from "./header.component";


export default function SeqListPage() {

    const title = "Sequence Editor";

    return (
        <div>
            <Head>
                <FaviconComponent title={title}></FaviconComponent>
            </Head>

            <HeaderComponent></HeaderComponent>

            <h1>Seq list works!</h1>
            <Link href='/'><img className="icon" src="chevronLeft0.svg" alt="Navigate to Seq List Page" /></Link>
        </div>
    )
}