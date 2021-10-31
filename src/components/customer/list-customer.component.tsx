import React, { Component } from "react";
import { Container, Form, Modal, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import Customer from "../../models/customer.model";
import { type } from "os";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomerService from '../../services/customer.service';
import { Link } from "react-router-dom";
import "../../components/customer/customer.component.css"
import { AddCustomerModal } from '../../components/customer/add-customer.component';

type Props = {}
type State = {
  customers: Array<Customer>,
  modal: boolean,
  isOpen: boolean,
  toggle: boolean,
  id: number | null,
  firstName: string,
  lastName: string,
  address: string,
  locality: string,
  city: string,
  pinCode: string,
  nominee: string,
  aadharNo: string,
  panNo: string,
  phone: number;
  alternatePhone: number,
  email: string,
  
}

class ListCustomer extends Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      id: null,
      firstName: '',
      lastName: '',
      address: '',
      locality: '',
      city: '',
      pinCode: '',
      nominee: '',
      aadharNo: '',
      panNo: '',
      phone: 0,
      alternatePhone: 0,
      email: '',
      modal: false,
      isOpen: false,
      toggle: true,
      customers: [],
    };
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeNominee = this.handleChangeNominee.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangeLocality = this.handleChangeLocality.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangePinCode = this.handleChangePinCode.bind(this);
    this.handleChangeAadharNo = this.handleChangeAadharNo.bind(this);
    this.handleChangePanNo = this.handleChangePanNo.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeAlternatePhone = this.handleChangeAlternatePhone.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount() {
    this.listCustomer();
  }

  listCustomer() {
    CustomerService.getAllCustomers()
    .then(response => {
      this.setState({
        customers: response.data
      })
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  }

  modalOpen() {
    this.setState({ modal: true });
  }

  modalClose() {
    this.setState({ modal: false });
  }

  handleChangeFirstName(event: any) {
    this.setState({ firstName: event.target.value})
  }

  handleChangeLastName(event: any) {
    this.setState({ lastName: event.target.value})
  }

  handleChangeNominee(event: any) {
    this.setState({
      nominee: event.target.value
    })
  }

  handleChangeAddress(event: any) {
    this.setState({
      address: event.target.value
    })
  }

  handleChangeLocality(event: any) {
    this.setState({
      locality: event.target.value
    })
  }

  handleChangeCity(event: any) {
    this.setState({
      city: event.target.value
    })
  }

  handleChangePinCode(event: any) {
    this.setState({
      pinCode: event.target.value
    })
  }

  handleChangeAadharNo(event: any) {
    this.setState({
      aadharNo: event.target.value
    })
  }

  handleChangePanNo(event: any) {
    this.setState({
      panNo: event.target.value
    })
  }

  handleChangePhone(event: any) {
    this.setState({
      phone: event.target.value
    })
  }

  handleChangeAlternatePhone(event: any) {
    this.setState({
      alternatePhone: event.target.value
    })
  }
  handleChangeEmail(event: any) {
    this.setState({
      email: event.target.value
    })
  }

  handleSubmit(event: any) {
    event.preventDefault();
    event.stopPropagation();
    const customerInput = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      address: this.state.address,
      locality: this.state.locality,
      city: this.state.city,
      pinCode: this.state.pinCode,
      nominee: this.state.nominee,
      aadharNo: this.state.aadharNo,
      panNo: this.state.panNo,
      phone: this.state.phone,
      alternatePhone: this.state.alternatePhone,
      email: this.state.email,
    }
    console.log("-------------------------")
    console.log(customerInput)
    console.log("-------------------------")
    this.setState({ modal: false });
  }
  render() {
    const { customers } = this.state;
    return(
      <Container fluid>

        <div className="d-flex justify-content-center loader-test">
          <div className="loader"></div>
        </div>
        <div className="pt-3 pb-3 button-style">
          <Button onClick={e => this.modalOpen()}>
          New Customer
          </Button>
        </div>
       
        <table className="table table-hover table-striped table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Locality</th>
              <th>City</th>
              <th>Phone No</th>
              <th>Nominee Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
            <tr>
              <td>{customer.id}</td>
              <td>{customer.firstName + " " + customer.lastName}</td>
              <td>{customer.locality}</td>
              <td>{customer.city}</td>
              <td>{customer.phone}</td>
              <td>{customer.nominee}</td>
              <td className="p-2">
                <Link to="/">edit</Link>
                <Link to="/">delete</Link>
              </td>
            </tr>
            ))}
          </tbody>
        </table>

        <Modal
          size="xl"
          contentClassName="p-4"
          show={this.state.modal}
          onHide={this.modalClose}
          backdrop="static"
          keyboard={false}
        >
          <h2>New Customer</h2>
          <Form onSubmit={this.handleSubmit}>
            <Row className="mb-3">
              <h6>Personal Info</h6>
              <hr></hr>
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" 
                              name="firstName"
                              placeholder="First name" 
                              value={ this.state.firstName }
                              onChange={this.handleChangeFirstName} 
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text"
                              name="lastName"
                              placeholder="Last name"
                              value={this.state.lastName }
                              onChange={this.handleChangeLastName}
                               />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>Nominee</Form.Label>
                <Form.Control type="text" 
                              name="nominee"
                              value={this.state.nominee}
                              onChange={this.handleChangeNominee}
                              placeholder="Nominee" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" 
                              name="address"
                              value={this.state.address}
                              onChange={this.handleChangeAddress}
                              placeholder="Address" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridLocality">
                <Form.Label>Locality</Form.Label>
                <Form.Control type="text"
                              name="locality"
                              value={this.state.locality}
                              onChange={this.handleChangeLocality}
                              placeholder="Locality" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridAddress">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" 
                              name="city"
                              value={this.state.city}
                              onChange={this.handleChangeCity}
                              placeholder="City" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <h6>Identify Number</h6>
              <hr className="hr-style"></hr>
              <Form.Group as={Col} controlId="formGridLocality">
                <Form.Label>Pin Code</Form.Label>
                <Form.Control type="text" 
                              name="pinCode"
                              value={this.state.pinCode}
                              onChange={this.handleChangePinCode}
                              placeholder="Pin Code"
                               />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridLocality">
                  <Form.Label>Aadhar No</Form.Label>
                  <Form.Control type="text" 
                                name="aadharNo"
                                value={this.state.aadharNo}
                                onChange={this.handleChangeAadharNo}
                                placeholder="Aadhar No" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridAddress">
                  <Form.Label>Pan No</Form.Label>
                  <Form.Control type="text" 
                                name="panNo"
                                value={this.state.panNo}
                                onChange={this.handleChangePanNo}
                                placeholder="Pan No" />
                </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridLocality">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="text" 
                                name="phone"
                                value={this.state.phone}
                                onChange={this.handleChangePhone}
                                placeholder="Phone" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridAddress">
                <Form.Label>Phone 2</Form.Label>
                <Form.Control type="text" 
                              name="alternatePhone"
                              value={this.state.alternatePhone}
                              onChange={this.handleChangeAlternatePhone}
                              placeholder="alternatePhone" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridLocality">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" 
                              name="email"
                              value={this.state.email}
                              onChange={this.handleChangeEmail}
                              placeholder="Email" />
              </Form.Group>
            </Row>
            <Modal.Footer>
              <Button variant="secondary" onClick={e => this.modalClose()}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Create
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </Container>
    )
  }
}

export default ListCustomer;