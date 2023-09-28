import { useState } from "react";
import CustumInput from "../components/custumInput";
import WebcamForm from "../components/webcamForm";
import { Col } from "react-bootstrap";

const FormSpecifications = () => {

    //useState Hooks
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [image, setImage] = useState("")

    return <>
        <Col className="p-5 my-5 mx-auto border border-info rounded col-sm-10 col-lg-6">
            <CustumInput state={firstName} setState={setFirstName} label="نام" />
            <CustumInput state={lastName} setState={setLastName} label="نام خانوادگی" />
            <WebcamForm state={image} setState={setImage} label="عکس شخص" />
        </Col>
    </>
}

export default FormSpecifications;