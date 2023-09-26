import { useState } from "react";
import CustumInput from "../components/custumInput";
import WebcamForm from "../components/webcamForm";

const FormSpecifications = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [image, setImage] = useState("")
    return <>
        <CustumInput state={firstName} setState={setFirstName} label="نام" />
        <CustumInput state={lastName} setState={setLastName} label="نام خانوادگی" />
        <WebcamForm state={image} setState={setImage} label="عکس شخص"/>
    </>
}

export default FormSpecifications;