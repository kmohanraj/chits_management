import { Component } from "react";
import { Button, Col, Container, Modal, Row, Form } from "react-bootstrap";

type MyProps = {
  isOpen: boolean
  toggle
}

export class EditCustomerModal extends Component {
  constructor(props: any) {
    super(props)

    this.state = {
      isOpen: false,
    };
  }

  modalOpen() {
    this.setState({ isOpen: false });
  }

  modalClose() {
    this.setState({ modal: false });
  }

  render() {
    return(
      <div>
        <Form>
          <Row className="mb-3">
            <h6>Personal Info</h6>
            <hr></hr>
            <Form.Group as={Col} controlId="CustomerId">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="First name" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="First name" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Last name" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>Nominee</Form.Label>
              <Form.Control type="text" placeholder="Nominee" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Address" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridLocality">
              <Form.Label>Locality</Form.Label>
              <Form.Control type="text" placeholder="Locality" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridAddress">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="City" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <h6>Identify Number</h6>
            <hr className="hr-style"></hr>
            <Form.Group as={Col} controlId="formGridLocality">
              <Form.Label>Pin Code</Form.Label>
              <Form.Control type="text" placeholder="Pin Code" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridLocality">
              <Form.Label>Aadhar No</Form.Label>
              <Form.Control type="text" placeholder="Aadhar No" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridAddress">
              <Form.Label>Pan No</Form.Label>
              <Form.Control type="text" placeholder="Pan No" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridLocality">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" placeholder="Phone" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridAddress">
              <Form.Label>Phone 2</Form.Label>
              <Form.Control type="text" placeholder="alternatePhone" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridLocality">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="Email" />
            </Form.Group>
          </Row>
          <Modal.Footer>
            <Button variant="secondary" onClick={e => this.modalClose()}>
              Close
            </Button>
            <Button variant="primary">
              Create
            </Button>
          </Modal.Footer>
        </Form>
      </div>
    )
  }
}