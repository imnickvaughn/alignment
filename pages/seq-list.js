
import Head from "next/head";
import Link from "next/link";
import React from "react";
import styles from '../styles/home.module.css'
import FaviconComponent from "./favicon.component";
import HeaderComponent from "./header.component";
import { Button, FormControl, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import axios from "axios"



export default function SeqListPage() {

    const title = "Sequence Editor";

    const { register, control, handleSubmit } = useForm();

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

    return (
        <>
            <Head>
                <FaviconComponent title={title}></FaviconComponent>
            </Head>

            <HeaderComponent></HeaderComponent>


            <div className="row">
                <Link href='/'><img className="icon" src="chevronLeft0.svg" alt="Navigate to Seq List Page" /></Link>

                <div className={styles.formContainer}>
                    <FormControl component="fieldset">
                        <form onSubmit={handleSubmit(onSubmit)} className="columnContainer">
                            <TextField
                                inputRef={register}
                                name="name"
                                id="name"
                                label="Name"
                                defaultValue=""
                            />
                            <TextField
                                inputRef={register}
                                name="ref"
                                id="ref"
                                label="Reference Name"
                                defaultValue=""
                            />
                            <TextField
                                inputRef={register}
                                name="seq"
                                id="seq"
                                label="Sequence"
                                multiline
                                rows={4}
                                defaultValue=""
                            />

                            <Button variant="contained" color="primary" type="submit">
                                Primary
                        </Button>
                        </form>
                    </FormControl>
                </div>
            </div>

        </>


    )
}
