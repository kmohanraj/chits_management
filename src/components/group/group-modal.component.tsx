import { Component } from "react";
import { Button, Col, Container, Modal, Row, Form } from "react-bootstrap";
import Group from "../../models/group.model";
import CustomerService from '../../services/customer.service';

type Props = {}
type MyProps = {
  modal: boolean,
  currentGroup: Group,
}

export class GroupModal extends Component<any, any> {
  constructor(props: any) {
    super(props)

    this.state = {
      modal: false,
      currentGroup: {
        id: null,
        groupName: '',
        amount: '',
        tenure: ''
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

  handleChangeGroupName = (event: any) => {
    this.setState({
      currentGroup: { ...this.state.currentGroup, groupName: event.target.value }
    })
  }

  handleChangeAmount = (event: any) => {
    this.setState({
      currentGroup: { ...this.state.currentGroup, amount: event.target.value }
    })
  }

  handleChangeTenure = (event: any) => {
    this.setState({
      currentGroup: { ...this.state.currentGroup, tenure: event.target.value }
    })
  }

  handleChangeStatus = (event: any) => {
    this.setState({
      currentGroup: { ...this.state.currentGroup, status: event.target.value }
    })
  }

  handleSubmit = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    const customerInput = {
      groupName: this.state.currentGroup.groupName,
      amount: this.state.currentGroup.amount,
      tenure: this.state.currentGroup.tenure,
      status: this.state.currentGroup.status
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
  createCustomer = (data: Group) => {
    CustomerService.create(data)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

  // Update a customer
  updateCustomer = (id: number, data: Group) => {
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
          <h3>{this.props.modalBtnName === 'New Group' ? 'New Group' : 'Update Group'}</h3>
          <Form onSubmit={this.handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>Group Name</Form.Label>
                <Form.Control type="text" 
                              name="groupName"
                              placeholder="Group Name" 
                              value={ this.state.currentGroup.groupName }
                              onChange={this.handleChangeGroupName} 
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>Amount</Form.Label>
                <Form.Control type="text"
                              name="amount"
                              placeholder="Enter amount"
                              value={this.state.currentGroup.amount }
                              onChange={this.handleChangeAmount}
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>Tenure Group</Form.Label>
                <Form.Control type="text" 
                              name="tenure"
                              value={this.state.currentGroup.tenure}
                              onChange={this.handleChangeTenure}
                              placeholder="Tenure" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>Group Status</Form.Label>
                <Form.Control type="text" 
                              name="status"
                              value={this.state.currentGroup.status}
                              onChange={this.handleChangeStatus}
                              placeholder="Status" />
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