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
            return <CircularProgress />
        }
        else {
            return <>
                <div><p className={styles.lessEmphasis}>Result Number: </p>#{index + 1}</div>
                <div><p className={styles.lessEmphasis}>Reference: </p>{seq.ref}</div>
                <div><p className={styles.lessEmphasis}>Name: </p>{seq.name}</div>
                <div><p className={styles.lessEmphasis}>Sequence: </p>{seq.seq}</div>
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
