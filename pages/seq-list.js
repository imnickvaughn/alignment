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


    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        axios.post("http://18.222.204.26/dnalookupapp/sequence/create", {
            seq: data.seq,
            name: data.name,
            ref: data.ref
        }).then(response => {
            console.log(response.data)
        })
    };

    return (
        <>
            <FaviconComponent title={title}></FaviconComponent>
            <HeaderComponent></HeaderComponent>
            <div className="pageContainer">
                <Link href='/'><img className="pageRoute" src="chevronLeft0.svg" alt="Navigate to Seq List Page" /></Link>
                <div className="pageContent">
                    <form onSubmit={handleSubmit(onSubmit)} className="columnContainer">
                        <h1>ADD SEQUENCES TO DATABASE</h1>

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
                <Link href='/'><img className="pageRoute" src="chevronRight0.svg" alt="Navigate to Seq List Page" /></Link>
            </div>
        </>
    )
}
