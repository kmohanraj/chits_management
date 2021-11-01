import { Component } from "react";
import { Button, Col, Container, Modal, Row, Form } from "react-bootstrap";
import Customer from "../../models/customer.model";
import CustomerService from '../../services/customer.service';

type Props = {}
type MyProps = {
  modal: boolean,
  currentCustomer: Customer,
}

export class CustomerModal extends Component<any, any> {
  constructor(props: any) {
    super(props)

    this.state = {
      modal: false,
      currentCustomer: {
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
        email: ''
      }
    };
  }

  modalOpen = ()  =>{
    this.getCustomerById(this.props.customerId)
    this.setState({ modal: true });
  }

  modalClose = () => {
    this.setState({ modal: false });
  }

  handleChangeFirstName = (event: any) => {
    this.setState({
      currentCustomer: { ...this.state.currentCustomer, firstName: event.target.value }
    })
  }

  handleChangeLastName = (event: any) => {
    this.setState({
      currentCustomer: { ...this.state.currentCustomer, lastName: event.target.value }
    })
  }

  handleChangeNominee = (event: any) => {
    this.setState({
      currentCustomer: { ...this.state.currentCustomer, nominee: event.target.value }
    })
  }

  handleChangeAddress = (event: any) => {
    this.setState({
      currentCustomer: { ...this.state.currentCustomer, address: event.target.value }
    })
  }

  handleChangeLocality = (event: any) => {
    this.setState({
      currentCustomer: { ...this.state.currentCustomer, locality: event.target.value }
    })
  }

  handleChangeCity = (event: any) => {
    this.setState({
      currentCustomer: { ...this.state.currentCustomer, city: event.target.value }
    })
  }

  handleChangePinCode = (event: any) => {
    this.setState({
      currentCustomer: { ...this.state.currentCustomer, pinCode: event.target.value }
    })
  }

  handleChangeAadharNo = (event: any) => {
    this.setState({
      currentCustomer: { ...this.state.currentCustomer, aadharNo: event.target.value }
    })
  }

  handleChangePanNo = (event: any) => {
    this.setState({
      currentCustomer: { ...this.state.currentCustomer, panNo: event.target.value }
    })
  }

  handleChangePhone = (event: any) => {
    this.setState({
      currentCustomer: { ...this.state.currentCustomer, phone: event.target.value }
    })
  }

  handleChangeAlternatePhone = (event: any) => {
    this.setState({
      currentCustomer: { ...this.state.currentCustomer, alternatePhone: event.target.value }
    })
  }

  handleChangeEmail = (event: any) => {
    this.setState({
      currentCustomer: { ...this.state.currentCustomer, email: event.target.value }
    })
  }

  handleSubmit = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    const customerInput = {
      firstName: this.state.currentCustomer.firstName,
      lastName: this.state.currentCustomer.lastName,
      address: this.state.currentCustomer.address,
      locality: this.state.currentCustomer.locality,
      city: this.state.currentCustomer.city,
      pinCode: this.state.currentCustomer.pinCode,
      nominee: this.state.currentCustomer.nominee,
      aadharNo: this.state.currentCustomer.aadharNo,
      panNo: this.state.currentCustomer.panNo,
      phone: this.state.currentCustomer.phone,
      alternatePhone: this.state.currentCustomer.alternatePhone,
      email: this.state.currentCustomer.email,
    }
    if (this.props.modalSubmitBtn === "Create") {
      this.createCustomer(customerInput)
    } else {
      this.updateCustomer(this.props.customerId, customerInput)
    }
    this.setState({ modal: false });
    // this.listCustomer();
  }


  // Create a customer 
  createCustomer = (data: Customer) => {
    CustomerService.create(data)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

  // Update a customer
  updateCustomer = (id: number, data: Customer) => {
    CustomerService.update(id, data)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

  // Get customer by id
  getCustomerById = (data: any) => {
    CustomerService.getById(data)
    .then(response => {
      this.setState({
        currentCustomer: response.data
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {

    return(
      <div>
        <Button variant="primary" onClick={() => this.modalOpen()}>
          {this.props.modalBtnName}
        </Button>
       <Modal
          size="xl"
          contentClassName="p-4"
          show={this.state.modal}
          onHide={this.modalClose}
          backdrop="static"
          keyboard={false}
        >
          <h3>{this.props.modalBtnName === 'New Customer' ? 'New Customer' : 'Update Customer'}</h3>
          <Form onSubmit={this.handleSubmit}>
            <Row className="mb-3">
              <h6>Personal Info</h6>
              <hr></hr>
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" 
                              name="firstName"
                              placeholder="First name" 
                              value={ this.state.currentCustomer.firstName }
                              onChange={this.handleChangeFirstName} 
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text"
                              name="lastName"
                              placeholder="Last name"
                              value={this.state.currentCustomer.lastName }
                              onChange={this.handleChangeLastName}
                               />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>Nominee</Form.Label>
                <Form.Control type="text" 
                              name="nominee"
                              value={this.state.currentCustomer.nominee}
                              onChange={this.handleChangeNominee}
                              placeholder="Nominee" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" 
                              name="address"
                              value={this.state.currentCustomer.address}
                              onChange={this.handleChangeAddress}
                              placeholder="Address" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridLocality">
                <Form.Label>Locality</Form.Label>
                <Form.Control type="text"
                              name="locality"
                              value={this.state.currentCustomer.locality}
                              onChange={this.handleChangeLocality}
                              placeholder="Locality" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridAddress">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" 
                              name="city"
                              value={this.state.currentCustomer.city}
                              onChange={this.handleChangeCity}
                              placeholder="City" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <h6>Identify Info</h6>
              <hr className="hr-style"></hr>
              <Form.Group as={Col} controlId="formGridLocality">
                <Form.Label>Pin Code</Form.Label>
                <Form.Control type="text" 
                              name="pinCode"
                              value={this.state.currentCustomer.pinCode}
                              onChange={this.handleChangePinCode}
                              placeholder="Pin Code"
                               />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridLocality">
                <Form.Label>Aadhar No</Form.Label>
                <Form.Control type="text" 
                              name="aadharNo"
                              value={this.state.currentCustomer.aadharNo}
                              onChange={this.handleChangeAadharNo}
                              placeholder="Aadhar No" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridAddress">
                <Form.Label>Pan No</Form.Label>
                <Form.Control type="text" 
                              name="panNo"
                              value={this.state.currentCustomer.panNo}
                              onChange={this.handleChangePanNo}
                              placeholder="Pan No" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridLocality">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" 
                              name="phone"
                              value={this.state.currentCustomer.phone}
                              onChange={this.handleChangePhone}
                              placeholder="Phone" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridAddress">
                <Form.Label>Phone 2</Form.Label>
                <Form.Control type="text" 
                              name="alternatePhone"
                              value={this.state.currentCustomer.alternatePhone}
                              onChange={this.handleChangeAlternatePhone}
                              placeholder="Alternate Phone" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridLocality">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" 
                              name="email"
                              value={this.state.currentCustomer.email}
                              onChange={this.handleChangeEmail}
                              placeholder="Email" />
              </Form.Group>
            </Row>
            <Modal.Footer>
              <Button variant="secondary" onClick={e => this.modalClose()}>
                Close
              </Button>
              {this.props.modalSubmitBtn ? ( <Button variant="primary" type="submit">
                {this.props.modalSubmitBtn}
              </Button> ) : ''}
             
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    )
  }
}