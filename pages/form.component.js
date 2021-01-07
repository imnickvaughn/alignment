import styles from '../styles/form.module.css'
import React from "react";
import { Button, FormControl, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import axios from "axios"


export default function FormComponent() {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        axios.post("http://18.222.204.26/dnalookupapp/filter", {
            code: data.querySeq,
            queryName: data.queryName,
            maxTargetSeq: data.maxTargetSeq
        }).then(response => {
            console.log(response.data)
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