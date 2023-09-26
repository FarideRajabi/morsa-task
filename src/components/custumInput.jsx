import { Row, Col, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const CustumInput = ({ state, setState, label }) => {

    return (
        <Form className="my-5">
            <Form.Group className="mb-3">
                <Container>
                    <Row>
                        <Col className="col-3">
                            <Form.Label className="col-4 h6">{label}:</Form.Label>
                        </Col>
                        <Col className="col-4">
                            <Form.Control type="fistName" placeholder={label} value={state} onChange={(e) => { setState(e.target.value) }} />
                        </Col>
                    </Row>
                </Container>
            </Form.Group>
        </Form>
    );
}

export default CustumInput;