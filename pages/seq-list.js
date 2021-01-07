import Link from "next/link";
import React from "react";
import styles from '../styles/home.module.css'
import FaviconComponent from "./favicon.component";
import HeaderComponent from "./header.component";
import { Button, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import axios from "axios"

export default function SeqListPage() {

    const title = "Sequence Editor";
    const description = "Add DNA Sequences to the database.";


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

    return (
        <>
            <FaviconComponent title={title}></FaviconComponent>
            <HeaderComponent></HeaderComponent>
            <div className="pageDescription center">{description}</div>
            <div className="pageContainer">
                <Link href='/'><img className="pageRoute" src="chevronLeft0.svg" alt="Navigate to Seq List Page" /></Link>
                <div className="pageContainer">
                    <div className="pageContent">
                        <form onSubmit={handleSubmit(onSubmit)} className="columnContainer">
                            <TextField
                                inputRef={register}
                                name="name"
                                id="name"
                                label="Name"
                                defaultValue=""
                                className="max-width"
                            />
                            <TextField
                                inputRef={register}
                                name="ref"
                                id="ref"
                                label="Reference Name"
                                defaultValue=""
                                className="max-width"
                            />
                            <TextField
                                inputRef={register}
                                name="seq"
                                id="seq"
                                label="Sequence"
                                multiline
                                rows={8}
                                defaultValue=""
                                className="max-width"
                            />

                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                className="max-width"
                            >
                                Add Sequence
                        </Button>
                        </form>
                    </div>
                </div>
                <Link href='/'><img className="pageRoute" src="chevronRight0.svg" alt="Navigate to Seq List Page" /></Link>
            </div>
        </>
    )
}
