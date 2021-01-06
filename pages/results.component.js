import React from 'react'
import styles from '../styles/results.module.css'


export default function ResultsComponent() {



    const dummySeqData = [
        {
            "id": 1,
            "name": "Bacteria Protein 1",
            "ref": "GP_90980",
            "seq": "ATGACTGACTGCTGACTGACTTAGCTAGTCGTAGCTTATCGTAGTCAGTCAGTACGTACGTAGCAGTCAGTACGTCTACTCATGCATGCAGCAGAGACGTACGTAGTAGTCGTACGATCGATGCTAGTACGTACGTAGTCGTACGTACTACTGACTACTACGAGTACGCGTACGTACGTACGACT",
            "startCoordinate": 403,
            "endCoordinate": 526,  // the diff between this will be equal to the length of ref output
            "status": 2 // 0 saved, 1 loading, 2 loaded
        },
        {
            "id": 1,
            "name": "Bacteria Protein 1",
            "ref": "GP_90980",
            "seq": "ATGACTGACTGCTGACTGACTTAGCTAGTCGTAGCTTATCGTAGTCAGTCAGTACGTACGTAGCAGTCAGTACGTCTACTCATGCATGCAGCAGAGACGTACGTAGTAGTCGTACGATCGATGCTAGTACGTACGTAGTCGTACGTACTACTGACTACTACGAGTACGCGTACGTACGTACGACT",
            "startCoordinate": 403,
            "endCoordinate": 526,  // the diff between this will be equal to the length of ref output
            "status": 2 // 0 saved, 1 loading, 2 loaded
        },
    ]




    return (
        <>

            <div className="columnContainer">

                BLAST REPORT

            {/* DISTRIBUTION of */}
                {/* BLAST HITS */}

                <div className="columnContainer">
                    {Object.values(dummySeqData).map((seq, index) => (
                        <React.Fragment key={index} >
                            <div className={styles.card}>
                                <div>{seq.ref}  &rarr;</div>
                                <div lg="3">{seq.name}</div>
                            </div>
                        </React.Fragment>
                    ))}
                </div>

            </div>
        </>
    )
}
