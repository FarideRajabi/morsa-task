import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const CustumInput = ({ state, setState, label }) => {

    return (
        <Form className="my-5">
            <Form.Group>
                <Row>
                    <Col className="col-3" style={{ textAlign: "right" }} >
                        <Form.Label className="h6">{label}:</Form.Label>
                    </Col>
                    <Col className="col-8">
                        <Form.Control placeholder={label} value={state} onChange={(e) => setState(e)} />
                    </Col>
                </Row>
            </Form.Group>
        </Form>
    );
}

export default CustumInput;