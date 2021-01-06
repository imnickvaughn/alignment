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
            <div className={styles.formContainer}>
                <FormControl component="fieldset">
                    <form onSubmit={handleSubmit(onSubmit)} className="columnContainer">
                        <TextField
                            inputRef={register}
                            name="querySeq"
                            id="multiline-query-seq"
                            label="Query Sequence"
                            multiline
                            rows={4}
                            defaultValue=""
                        />
                        <TextField
                            inputRef={register}
                            name="queryName"
                            id="query-seq-name"
                            label="Query Name"
                            defaultValue=""
                        />
                        <Button variant="contained" color="primary" type="submit">
                            Primary
                        </Button>
                    </form>
                </FormControl>
            </div>

        </>
    )


}