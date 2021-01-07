import React from 'react'
import styles from '../styles/results.module.css'
import { CircularProgress, Paper } from '@material-ui/core';


export default function ResultsComponent() {


    const dummySeqData = [
        {
            "id": 1,
            "name": "Bacteria Protein 1",
            "ref": "GP_90980",
            "seq": "ATGACTGACTGCTGACTGACTTAGCTAGTCGTAGCTTATCGTAGTCAGTCAGTACGTACGTAGCAGTCAGTACGTCTACTCATGCATGCAGCAGAGACGTACGTAGTAGTCGTACGATCGATGCTAGTACGTACGTAGTCGTACGTACTACTGACTACTACGAGTACGCGTACGTACGTACGACT",
            "startCoordinate": 403,
            "endCoordinate": 526,  // the diff between this will be equal to the length of ref output
            "status": 1 // 0 saved, 1 loading, 2 loaded
        },
        {
            "id": 1,
            "name": "Bacteria Protein 1      asdasgagadgf",
            "ref": "GP_90980",
            "seq": "ATGACTGACTGCTGACTGACTTAGCTAGTCGTAGCTTATCGTAGTCAGTCAGTACGTACGTAGCAGTCAGTACGTCTACTCATGCATGCAGCAGAGACGTACGTAGTAGTCGTACGATCGATGCTAGTACGTACGTAGTCGTACGTACTACTGACTACTACGAGTACGCGTACGTACGTACGACT",
            "startCoordinate": 403,
            "endCoordinate": 526,  // the diff between this will be equal to the length of ref output
            "status": 1 // 0 saved, 1 loading, 2 loaded
        },
        {
            "id": 1,
            "name": "Bacteria Protein 1      asdasgagadgf",
            "ref": "GP_90980",
            "seq": "ATGACTGACTGCTGACTGACTTAGCTAGTCGTAGCTTATCGTAGTCAGTCAGTACGTACGTAGCAGTCAGTACGTCTACTCATGCATGCAGCAGAGACGTACGTAGTAGTCGTACGATCGATGCTAGTACGTACGTAGTCGTACGTACTACTGACTACTACGAGTACGCGTACGTACGTACGACT",
            "startCoordinate": 403,
            "endCoordinate": 526,  // the diff between this will be equal to the length of ref output
            "status": 1 // 0 saved, 1 loading, 2 loaded
        },
        {
            "id": 1,
            "name": "Bacteria Protein 1      asdasgagadgf",
            "ref": "GP_90980",
            "seq": "ATGACTGACTGCTGACTGACTTAGCTAGTCGTAGCTTATCGTAGTCAGTCAGTACGTACGTAGCAGTCAGTACGTCTACTCATGCATGCAGCAGAGACGTACGTAGTAGTCGTACGATCGATGCTAGTACGTACGTAGTCGTACGTACTACTGACTACTACGAGTACGCGTACGTACGTACGACT",
            "startCoordinate": 403,
            "endCoordinate": 526,  // the diff between this will be equal to the length of ref output
            "status": 1 // 0 saved, 1 loading, 2 loaded
        },
        {
            "id": 1,
            "name": "Bacteria Protein 1      asdasgagadgf",
            "ref": "GP_90980",
            "seq": "ATGACTGACTGCTGACTGACTTAGCTAGTCGTAGCTTATCGTAGTCAGTCAGTACGTACGTAGCAGTCAGTACGTCTACTCATGCATGCAGCAGAGACGTACGTAGTAGTCGTACGATCGATGCTAGTACGTACGTAGTCGTACGTACTACTGACTACTACGAGTACGCGTACGTACGTACGACT",
            "startCoordinate": 403,
            "endCoordinate": 526,  // the diff between this will be equal to the length of ref output
            "status": 1 // 0 saved, 1 loading, 2 loaded
        },
        {
            "id": 1,
            "name": "Bacteria Protein 1      asdasgagadgf",
            "ref": "GP_90980",
            "seq": "ATGACTGACTGCTGACTGACTTAGCTAGTCGTAGCTTATCGTAGTCAGTCAGTACGTACGTAGCAGTCAGTACGTCTACTCATGCATGCAGCAGAGACGTACGTAGTAGTCGTACGATCGATGCTAGTACGTACGTAGTCGTACGTACTACTGACTACTACGAGTACGCGTACGTACGTACGACT",
            "startCoordinate": 403,
            "endCoordinate": 526,  // the diff between this will be equal to the length of ref output
            "status": 1 // 0 saved, 1 loading, 2 loaded
        },
        {
            "id": 1,
            "name": "Bacteria Protein 1      asdasgagadgf",
            "ref": "GP_90980",
            "seq": "ATGACTGACTGCTGACTGACTTAGCTAGTCGTAGCTTATCGTAGTCAGTCAGTACGTACGTAGCAGTCAGTACGTCTACTCATGCATGCAGCAGAGACGTACGTAGTAGTCGTACGATCGATGCTAGTACGTACGTAGTCGTACGTACTACTGACTACTACGAGTACGCGTACGTACGTACGACT",
            "startCoordinate": 403,
            "endCoordinate": 526,  // the diff between this will be equal to the length of ref output
            "status": 1 // 0 saved, 1 loading, 2 loaded
        },
        {
            "id": 1,
            "name": "Bacteria Protein 1      asdasgagadgf",
            "ref": "GP_90980",
            "seq": "ATGACTGACTGCTGACTGACTTAGCTAGTCGTAGCTTATCGTAGTCAGTCAGTACGTACGTAGCAGTCAGTACGTCTACTCATGCATGCAGCAGAGACGTACGTAGTAGTCGTACGATCGATGCTAGTACGTACGTAGTCGTACGTACTACTGACTACTACGAGTACGCGTACGTACGTACGACT",
            "startCoordinate": 403,
            "endCoordinate": 526,  // the diff between this will be equal to the length of ref output
            "status": 2 // 0 saved, 1 loading, 2 loaded
        },
        {
            "id": 1,
            "name": "Bacteria Protein 1      asdasgagadgf",
            "ref": "GP_90980",
            "seq": "ATGACTGACTGCTGACTGACTTAGCTAGTCGTAGCTTATCGTAGTCAGTCAGTACGTACGTAGCAGTCAGTACGTCTACTCATGCATGCAGCAGAGACGTACGTAGTAGTCGTACGATCGATGCTAGTACGTACGTAGTCGTACGTACTACTGACTACTACGAGTACGCGTACGTACGTACGACT",
            "startCoordinate": 403,
            "endCoordinate": 526,  // the diff between this will be equal to the length of ref output
            "status": 2 // 0 saved, 1 loading, 2 loaded
        },
        {
            "id": 1,
            "name": "Bacteria Protein 1      asdasgagadgf",
            "ref": "GP_90980",
            "seq": "ATGACTGACTGCTGACTGACTTAGCTAGTCGTAGCTTATCGTAGTCAGTCAGTACGTACGTAGCAGTCAGTACGTCTACTCATGCATGCAGCAGAGACGTACGTAGTAGTCGTACGATCGATGCTAGTACGTACGTAGTCGTACGTACTACTGACTACTACGAGTACGCGTACGTACGTACGACT",
            "startCoordinate": 403,
            "endCoordinate": 526,  // the diff between this will be equal to the length of ref output
            "status": 2 // 0 saved, 1 loading, 2 loaded
        },
        {
            "id": 1,
            "name": "Bacteria Protein 1      asdasgagadgf",
            "ref": "GP_90980",
            "seq": "ATGACTGACTGCTGACTGACTTAGCTAGTCGTAGCTTATCGTAGTCAGTCAGTACGTACGTAGCAGTCAGTACGTCTACTCATGCATGCAGCAGAGACGTACGTAGTAGTCGTACGATCGATGCTAGTACGTACGTAGTCGTACGTACTACTGACTACTACGAGTACGCGTACGTACGTACGACT",
            "startCoordinate": 403,
            "endCoordinate": 526,  // the diff between this will be equal to the length of ref output
            "status": 2 // 0 saved, 1 loading, 2 loaded
        },
        {
            "id": 1,
            "name": "Bacteria Protein 1      asdasgagadgf",
            "ref": "GP_90980",
            "seq": "ATGACTGACTGCTGACTGACTTAGCTAGTCGTAGCTTATCGTAGTCAGTCAGTACGTACGTAGCAGTCAGTACGTCTACTCATGCATGCAGCAGAGACGTACGTAGTAGTCGTACGATCGATGCTAGTACGTACGTAGTCGTACGTACTACTGACTACTACGAGTACGCGTACGTACGTACGACT",
            "startCoordinate": 403,
            "endCoordinate": 526,  // the diff between this will be equal to the length of ref output
            "status": 2 // 0 saved, 1 loading, 2 loaded
        },
    ]


    const isLoading = (seq, index) => {
        if (seq.status === 1) {
            return <>
                <div className={`${styles.lessEmphasis} ${styles.loadingResults}`}><span>List Number: </span>#{index + 1}</div>
                <div className={`${styles.lessEmphasis} ${styles.loadingResults}`}><span>Id Number: </span>#{seq.id}</div>
                <div className={`${styles.lessEmphasis} ${styles.loadingResults}`}><span>Name: </span>{seq.name}</div>
                <CircularProgress className={styles.loader} />
            </>
        }
        else {
            return <>
                <div><span className={styles.lessEmphasis}>List Number: </span>#{index + 1}</div>
                <div><span className={styles.lessEmphasis}>Id Number: </span>#{seq.id}</div>
                <div><span className={styles.lessEmphasis}>Reference: </span>{seq.ref}</div>
                <div><span className={styles.lessEmphasis}>Name: </span>{seq.name}</div>
                <div><span className={styles.lessEmphasis}>Sequence: </span>{seq.seq}</div>
            </>
        }
    }

    return (
        <>
            <div className="columnContainer">
                <h1> BLAST REPORT</h1>
                {Object.values(dummySeqData).map((seq, index) => (
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
