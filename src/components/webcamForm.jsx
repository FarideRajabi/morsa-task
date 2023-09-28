import { useRef, useCallback, useState } from "react";
import Webcam from "react-webcam";
import { Row, Col, Form } from "react-bootstrap";
import { BsFillCameraFill } from 'react-icons/bs';
import { AiOutlineClose } from "react-icons/ai";


const WebcamForm = ({ label }) => {

    //useState Hooks
    const [showCamera, setShowCamera] = useState(false);
    const [imgSrc, setImgSrc] = useState(null);

    //useRef Hooks
    const webcamRef = useRef(null);

    // create capture image function
    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
    }, [webcamRef]);

    // create delete image function
    const retake = () => {
        setImgSrc(null);
    };

    return (
        <>
            <Row className="container">
                <Col className="col-3" style={{ textAlign: "right" }}>
                    <Form.Label className="h6">{label}:</Form.Label>
                </Col>
                <Col className="col-1">
                    {!showCamera && <BsFillCameraFill type="button" onClick={() => setShowCamera(!showCamera)} className="h1" />}
                    {!!showCamera && <BsFillCameraFill type="button" onClick={capture} className="h1" />}

                </Col>
                <Col className="col-8">
                    {!!imgSrc && (<>
                        <img src={imgSrc} alt="webcam" className="w-50" />
                        <AiOutlineClose type="button" onClick={retake} className="text-danger" style={{ marginTop: "-100px" }} />
                    </>
                    )}
                </Col>
            </Row>
            <div>
                {!!showCamera && !imgSrc && <div className="mx-auto stiky-top text-center">
                    <Webcam
                        height={300}
                        width="300vw"
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                    />
                </div>}
            </div>
        </>
    );
}

export default WebcamForm;