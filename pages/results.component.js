import React from 'react'
import { useState } from 'react';
import styles from '../styles/results.module.css'
import { CircularProgress, Paper } from '@material-ui/core'
import FormComponent from './form.component'

export default function ResultsComponent(props) {

    const isLoading = (seq, index) => {
        if (seq.status === 1) {
            return <>
                <div className={`${styles.lessEmphasis} ${styles.loadingResults}`}><span>List Number: </span>#{index + 1}</div>
                <div className={`${styles.lessEmphasis} ${styles.loadingResults}`}><span>Query Name: </span>{seq.queryName}</div>
                <div className={`${styles.lessEmphasis} ${styles.loadingResults}`}><span>Query Sequence: </span>{seq.querySeq}</div>
                <CircularProgress className={styles.loader} />
            </>
        }
        else {

            return <>
                <div><span className={styles.lessEmphasis}>List Number: </span>#{index + 1}</div>
                <div><span className={styles.lessEmphasis}>Query Name: </span>{seq.queryName}</div>
                <div><span className={styles.lessEmphasis}>Query Sequence: </span>{seq.querySeq}</div>
                <div><span className={styles.lessEmphasis}>Reference: </span>{seq.ref}</div>
                <div><span className={styles.lessEmphasis}>Name: </span>{seq.name}</div>
                <div>
                    <span className={styles.lessEmphasis}>Sequence: </span>
                    {seq.seqLeft}
                    <span className={styles.querySeqHighlight}>{seq.seqKey}</span>
                    {seq.seqRight}
                </div>
            </>
        }
    }

    return (
        <>
            <div className="columnContainer">
                <h1> BLAST REPORT</h1>
                {Object.values(props.matches).map((seq, index) => (
                    <React.Fragment key={index} >
                        <Paper elevation={3} className={styles.result}>
                            {isLoading(seq, index)}
                        </Paper>
                    </React.Fragment>
                ))}
            </div>
        </>
    )
}
