// @ts-ignore
import styles from '../styles/Home.module.css'
import React from 'react';
import styled from 'styled-components';


export default function HeaderComponent() {
    let Clip;
    let width;



    if (typeof window !== "undefined") {
        width = window.innerWidth;

        //         // Here we create a component that will rotate everything we pass in over two seconds
        //         Clip = styled.div`
        //         position: absolute;
        //         pointer-events: none;
        //         width: 1622px;
        //         height: 270px;
        //         top: 0rem;
        //         left: 0rem;
        //         z-index: -3;
        //         clip-path: inset(0px ${1622 - width}px 0px 0px);
        // `;
    }


    return (
        <div>
            <div>
                {/* <img className={styles.headerFore} src="headerFore0.svg#svgView(viewBox(1, 0, 2560, 1441))" alt="Header Foreground Image" />
                <img className={styles.headerLeft} src="headerLeft0.svg#svgView(viewBox(0, 0, 184, 172))" alt="Header Left Image" />
                <img className={styles.headerRight} src="headerRight0.svg#svgView(viewBox(0, 0, 485, 407))" alt="Header Right Image" />
                <img className={styles.headerBack} src="headerBack0.svg#svgView(viewBox(1, 0, 2560, 1441))" alt="Header Background Image" /> */}
            </div>
            <div>
                {/* <Clip> */}
                <img className={styles.listheaderBack} src="listheaderBack0.svg#svgView(viewBox(0 , 0, 2561, 360))" alt="Header Background Image" />
                {/* </Clip> */}
                <img className={styles.listheaderRight} src="listheaderRight0.svg#svgView(viewBox(0, 0, 342, 135))" alt="Header Right Image" />
            </div>
            <div className={styles.headerPadding}></div>
            {/* <div>{viewport()}</div> */}
            <div>{width}</div>
        </div>
    )
}