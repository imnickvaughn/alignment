import React from "react";
import axios from "axios"
import styles from '../styles/form.module.css'
import { useForm } from "react-hook-form";
import { Button, TextField } from "@material-ui/core";
import { v4 as uuidv4 } from 'uuid'
import sanitizeHtml from "sanitize-html";


export default function FormComponent(props) {
    let query = {};
    const { register, handleSubmit } = useForm();

    // When user submits the query form
    // we add a unique id to track the information and a status prop to allow us to indicate loading status.
    // When the response comes back we change the status to loaded and
    // process the sequence to give context before and after the query sequence.
    // Functions that add and remove matches from app state are provided by the Parent component which
    // also stores this information to the results list.
    const onSubmit = (data) => {
        let uid = uuidv4()
        query = {
            id: uid,
            queryName: sanitizeHtml(data.queryName),
            querySeq: sanitizeHtml(data.querySeq.toUpperCase()),
            status: 1
        }
        props.addMatches([query])
        // axios.post("http://127.0.0.1:8000/dnalookupapp/filter", {
        axios.post("https://alignment-server.herokuapp.com/dnalookupapp/filter", {
            id: uid,
            code: query.querySeq,
            queryName: query.queryName
        }).then(response => {
            if (response.data.found) {
                response.data.data.forEach((item, index) => {
                    let needle = item.index
                    console.log(item.index)
                    let seq = item.seq.substring(needle - 20, needle + query.querySeq.length + 20)
                    item.status = 0
                    item.queryName = query.queryName
                    item.querySeq = query.querySeq

                    let a = item.seq.substring(needle - 20, needle)
                    let b = item.seq.substring(needle + query.querySeq.length, needle + 20 + query.querySeq.length)

                    item.seq = seq

                    console.log(seq)
                    console.log(a)
                    console.log(b)

                    item.seqLeft = a
                    item.seqKey = query.querySeq.toUpperCase()
                    item.seqRight = b
                });
                props.removeMatches(response.data.data[0].id)
                props.addMatches(response.data.data)
            }
            else {
                let obj = {
                    "index": "NOT FOUND",
                    "queryName": query.queryName,
                    "querySeq": query.querySeq,
                    "seqIndex": '',
                    "seq": '',
                    "seqLeft": '',
                    "seqKey": '',
                    "seqRight": '',
                    "status": 0

                }
                props.removeMatches(query.id)
                props.addMatches([obj])
            }
        })
    };

    // This is where the user enters the information to execute an ungapped BLAST.
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="columnContainer">
                <h1>UNGAPPED BLAST</h1>
                <TextField
                    inputRef={register}
                    name="querySeq"
                    id="multiline-query-seq"
                    label="Query Sequence"
                    multiline
                    rows={11}
                    defaultValue=""
                    className="max-width"
                />
                <TextField
                    inputRef={register}
                    name="queryName"
                    id="query-seq-name"
                    label="Query Name"
                    defaultValue=""
                    className="max-width"
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    id={styles.button}
                >
                    Align Sequence
                        </Button>
            </form>
        </>
    )


}