import React from 'react'
import styles from '../styles/results.module.css'
import { CircularProgress, Paper } from '@material-ui/core'
import Scrollbars from 'react-custom-scrollbars';

// This is where we display the results from our sequence query.
export default function ResultsComponent(props) {

    // const renderThumb = ({ style, ...props }) => {
    //     const thumbStyle = {
    //         height: '50vh',
    //         width: "50vw",
    //         borderRadius: 6,
    //         backgroundColor: 'rgba(35, 49, 86, 0.8)'
    //     };
    //     return <div style={{ ...style, ...thumbStyle }} {...props} />;
    // };

    // const CustomScrollbars = props => (
    //     <Scrollbars
    //         renderThumbHorizontal={renderThumb}
    //         renderThumbVertical={renderThumb}
    //         {...props}
    //     />
    // );

    // Here is where we display the search result.
    // A temporary search result state is needed before the results have come from the server.
    // Then we display the search results which will show either the result information or NOT FOUND
    const isLoading = (seq, index) => {
        console.log(seq)
        if (seq) {
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
                    <div><span className={styles.lessEmphasis}>Found Sequence Range: </span>{seq.index}</div>
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
    }

    return (
        <>
            <div className="columnContainer">
                <h1> BLAST REPORT</h1>
                {/* <div className={styles.listScroll}> */}
                <Scrollbars style={{ height: '79vh' }} autoHide autoHideTimeout={500} autoHideDuration={200}>
                    {Object.values(props.matches).map((seq, index) => (
                        <React.Fragment key={index} >
                            <Paper elevation={3} className={styles.result}>
                                {isLoading(seq, index)}
                            </Paper>
                        </React.Fragment>
                    ))}
                </ Scrollbars>
                {/* </div> */}
            </div>
        </>
    )
}
