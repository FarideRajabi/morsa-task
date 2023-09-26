import { useState, useEffect, useCallback } from "react";
import Webcam from "react-webcam";
import { Col, Form, Row } from "react-bootstrap";
import { BsFillCameraFill } from 'react-icons/bs';

const WebcamForm = ({ label }) => {
    const [showCamera, setShowCamera] = useState(false);
    const [devices, setDevices] = useState([]);

    const handleDevices = useCallback(
        mediaDevices =>
            setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
        [setDevices]
    );

    useEffect(
        () => {
            navigator.mediaDevices.enumerateDevices().then(handleDevices);
        },
        [handleDevices]
    );

    return (
        <Row>
            <Col className="col-3" style={{ textAlign: "right" }}>
                <Form.Label className="col-4 h6">{label}:</Form.Label>
            </Col>
            <Col className="col-2">
                <BsFillCameraFill type="button" className="h3 mt-1" onClick={() => { setShowCamera(!showCamera) }} />
                {devices.map((device) => (
                    <div>
                        {showCamera && <Webcam audio={false} videoConstraints={{ deviceId: device.deviceId }} />}
                    </div>
                ))}
            </Col>
            <Col className="col-6"></Col>
        </Row>
    );
};

export default WebcamForm