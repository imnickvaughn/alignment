import styles from '../styles/form.module.css'
import React, { useState } from "react";
import { Button, FormControl, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import axios from "axios"
import { v4 as uuidv4 } from 'uuid'


export default function FormComponent(props) {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        let uid = uuidv4()
        let query = {
            id: uid,
            queryName: data.queryName,
            querySeq: data.querySeq,
            status: 1
        }
        props.addMatches([query])

        // http://127.0.0.1:8000
        // http://18.222.204.26
        axios.post("http://18.222.204.26/dnalookupapp/filter", {
            id: uid,
            code: data.querySeq,
            queryName: data.queryName
        }).then(response => {
            response.data.data.forEach((item, index) => {
                let needle = item.index
                let seq = item.seq.substring(needle - 20, needle + query.querySeq.length + 20)
                item.seq = seq
                item.status = 0
                item.queryName = query.queryName
                item.querySeq = query.querySeq

                let a = seq.substring(0, 20)
                let b = seq.substring(20 + query.querySeq.length)

                console.log(seq)
                console.log(a)
                console.log(b)

                item.seqLeft = a
                item.seqKey = query.querySeq
                item.seqRight = b
            });

            props.removeMatches(response.data.data[0].id)
            props.addMatches(response.data.data)
        })
    };

    const dummyRefInput = [
        {
            "id": 1,
            "queryName": "First Seq Query",
            "querySeq": "ATGACTGACTGCTGACTGACTTAGCTAGTCGTAGCTTATCGTAGTCAGTCAGTA",
        },
    ]

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