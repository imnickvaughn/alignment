import styles from '../styles/form.module.css'
import React from "react";
import { Button, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import axios from "axios"
import { v4 as uuidv4 } from 'uuid'


export default function FormComponent(props) {
    let query = {};
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        let uid = uuidv4()
        query = {
            id: uid,
            queryName: data.queryName,
            querySeq: data.querySeq.toUpperCase(),
            status: 1
        }
        props.addMatches([query])
        // axios.post("http://127.0.0.1:8000/dnalookupapp/filter", {
        axios.post("http://18.222.204.26/dnalookupapp/filter", {
            id: uid,
            code: query.querySeq,
            queryName: query.queryName
        }).then(response => {
            if (response.data.found) {
                response.data.data.forEach((item, index) => {
                    let seqIndex = item.index
                    let seq = item.seq.substring(seqIndex - 20, seqIndex + query.querySeq.length + 20)
                    let a = seq.substring(0, 20)
                    let b = seq.substring(20 + query.querySeq.length)

                    item.seqIndex = item.index
                    item.seq = seq
                    item.status = 0
                    item.queryName = query.queryName
                    item.querySeq = query.querySeq
                    item.seqLeft = a
                    item.seqKey = query.querySeq
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