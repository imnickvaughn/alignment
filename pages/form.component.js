import styles from '../styles/Home.module.css'
import React from "react";
import Select from "react-select";
import { Checkbox, Input, TextField } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import axios from "axios"


export default function FormComponent() {

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


    const dummyRefInput = [
        {
            "id": 1,
            "queryName": "First Seq Query",
            "querySeq": "ATGACTGACTGCTGACTGACTTAGCTAGTCGTAGCTTATCGTAGTCAGTCAGTA",
            "maxTargetSeqs": 50,
            "excludeModels": true,
            "excludeSamples": true,
        },
    ]


    const dummySeqData = [
        {
            "id": 1,
            "name": "Bacteria Protein 1",
            "ref": "GP_90980",
            "seq": "ATGACTGACTGCTGACTGACTTAGCTAGTCGTAGCTTATCGTAGTCAGTCAGTACGTACGTAGCAGTCAGTACGTCTACTCATGCATGCAGCAGAGACGTACGTAGTAGTCGTACGATCGATGCTAGTACGTACGTAGTCGTACGTACTACTGACTACTACGAGTACGCGTACGTACGTACGACT",
            "startCoordinate": 403,
            "endCoordinate": 526,  // the diff between this will be equal to the length of ref output
            "status": 2 // 0 saved, 1 loading, 2 loaded
        },
        {
            "id": 1,
            "name": "Bacteria Protein 1",
            "ref": "GP_90980",
            "seq": "ATGACTGACTGCTGACTGACTTAGCTAGTCGTAGCTTATCGTAGTCAGTCAGTACGTACGTAGCAGTCAGTACGTCTACTCATGCATGCAGCAGAGACGTACGTAGTAGTCGTACGATCGATGCTAGTACGTACGTAGTCGTACGTACTACTGACTACTACGAGTACGCGTACGTACGTACGACT",
            "startCoordinate": 403,
            "endCoordinate": 526,  // the diff between this will be equal to the length of ref output
            "status": 2 // 0 saved, 1 loading, 2 loaded
        },
    ]


    return (

        <>

            <h4 className="description">This is an ungapped local dna sequence alignment.</h4>

            <form onSubmit={handleSubmit(onSubmit)}>

                <TextField
                    inputRef={register}
                    name="query"
                    id="multiline-query-seq"
                    label="Query Sequence"
                    multiline
                    rows={4}
                    defaultValue=""
                />
                <Controller
                    as={Input}
                    name="querySeq"
                    control={control}
                    defaultValue=""
                    className="materialUIInput"
                />
                <label>Name Your Query: </label>
                <Controller
                    as={Input}
                    name="queryName"
                    control={control}
                    defaultValue=""
                    className="materialUIInput"
                />

                <label>Max Target Sequences: </label>
                <Controller
                    name="maxTargetSeqs"
                    as={Select}
                    options={[
                        { value: 10, label: "10" },
                        { value: 50, label: "50" },
                        { value: 100, label: "100" },
                        { value: 250, label: "250" },
                        { value: 500, label: "500" },
                        { value: 1000, label: "1000" },
                        { value: 5000, label: "5000" },
                    ]}
                    control={control}
                    defaultValue=""
                />
            *select the number of displayed sequences in the report
            <br />
                <label>Exclude Models (XM/XP) </label>
                <Controller
                    name="excludeModels"
                    control={control}
                    checked={false}

                    render={props => (
                        <Checkbox
                            onChange={e => props.onChange(e.target.checked)}
                            checked={props.value}
                        />
                    )}
                />
                <label>Exclude Uncultured/environmental sample sequences</label>
                <Controller
                    name="excludeSamples"
                    control={control}
                    checked={false}
                    render={props => (
                        <Checkbox
                            onChange={e => props.onChange(e.target.checked)}
                            checked={props.value}
                        />
                    )}
                />
                <input type="submit" />
            </form>



  BLAST REPORT

            {/* DISTRIBUTION of */}
            {/* BLAST HITS */}

            <div className={styles.grid}>
                {Object.values(dummySeqData).map((seq, index) => (
                    <React.Fragment key={index} >
                        <div className={styles.card}>
                            <div>{seq.ref}  &rarr;</div>
                            <div lg="3">{seq.name}</div>
                        </div>
                    </React.Fragment>
                ))}
            </div>






        </>
    )


}