import React, { Component } from "react";
import { Container, Form, Modal, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import Customer from "../../models/customer.model";
import { type } from "os";
import "../../components/customer/customer.component.css"
import CustomerService from '../../services/customer.service';
import { Link } from "react-router-dom";
import { CustomerModal} from '../../components/customer/customer-modal.component';

type Props = {}
type State = {
  customers: Array<Customer>,
  modal: boolean,
  editModalShow: boolean,
  isOpen: boolean,
  toggle: boolean,
  currentCustomer: Customer
}

class CustomerList extends Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
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
        email: '',
      },
      modal: false,
      editModalShow: false,
      isOpen: false,
      toggle: true,
      customers: [],
    };
  }

  componentDidMount() {
    this.listCustomer();
  }

  // Retrive all customers
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

  // Create a customer 
  createCustomer(data: Customer) {
    CustomerService.create(data)
    .then(response => {
      console.log(response.data)
    })
  }

  // Delete a customer
  deleteCustomer = (id: number) => {
    CustomerService.delete(id)
    .then(response => {
      console.log(response.data)
      this.listCustomer()
    })
  }

  render() {
    const { customers } = this.state;
    return(
      <Container fluid>

        <div className="d-flex justify-content-center loader-test">
          <div className="loader"></div>
        </div>
        <div className="pt-3 pb-3 button-style">
          <CustomerModal modalBtnName={"New Customer"} modalSubmitBtn={"Create"} />
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
              <td className="col-2">
                <Row>
                  <Col md>
                    <CustomerModal customerId={customer.id} modalBtnName={"Edit"} modalSubmitBtn={"Update"} />
                  </Col>
                  <Col md>
                    <CustomerModal customerId={customer.id} modalBtnName={"Show"} modalSubmitBtn={""} />
                  </Col>
                  <Col md>
                    <Button onClick={() => this.deleteCustomer(customer.id)}>Delete</Button>
                  </Col>
                </Row>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </Container>
    )
  }
}

export default CustomerList;