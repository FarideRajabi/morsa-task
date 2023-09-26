import { useState, useEffect, useCallback } from "react";
import { Col, Form, Row } from "react-bootstrap";

import Webcam from "react-webcam";


const WebcamForm = ({ label }) => {
    const [deviceId, setDeviceId] = useState({});
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
        <>
            <Row>
                <Col className="col-3">
                    <Form.Label className="col-4 h6">{label}:</Form.Label>
                </Col>
                <Col className="col-4">
                    {devices.map((device, key) => (
                        <div>
                            <Webcam audio={false} videoConstraints={{ deviceId: device.deviceId }} />
                            {device.label || `Device ${key + 1}`}
                        </div>

                    ))}
                </Col>

            </Row>
        </>
    );
};

export default WebcamForm