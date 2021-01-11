import React from "react";
import axios from "axios"
import Link from "next/link";
import sanitizeHtml from "sanitize-html";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@material-ui/core";
import FaviconComponent from "../components/favicon.component";
import HeaderComponent from "../components/header.component";

// Decided to add a GUI for adding database entries to make testing a little faster and explore Next.js routing.
export default function SeqListPage() {

    const title = "Sequence Editor";

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const newData = {
            seq: sanitizeHtml(data.seq.toUpperCase()),
            name: sanitizeHtml(data.name),
            ref: sanitizeHtml(data.ref),
        }

        // axios.post("http://127.0.0.1:8000/dnalookupapp/sequence/create", {
        axios.post("http://18.222.204.26/dnalookupapp/sequence/create", {
            seq: newData.seq,
            name: newData.name,
            ref: newData.ref
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
