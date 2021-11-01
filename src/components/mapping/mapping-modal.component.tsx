import { Component } from "react";
import { Button, Col, Container, Modal, Row, Form } from "react-bootstrap";
import MappingModel from "../../models/mapping.model";
import CustomerService from '../../services/customer.service';

type Props = {}
type MyProps = {
  modal: boolean,
  currentMapping: MappingModel,
}

export class MappingModal extends Component<any, any> {
  constructor(props: any) {
    super(props)

    this.state = {
      modal: false,
      currentMapping: {
        id: null,
        customerId: 0,
        groupId: 0,
        mappingStatus: ''
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

  handleChangeCustomerId = (event: any) => {
    this.setState({
      currentMapping: { ...this.state.currentMapping, customerId: event.target.value }
    })
  }

  handleChangeGroupId = (event: any) => {
    this.setState({
      currentMapping: { ...this.state.currentMapping, groupId: event.target.value }
    })
  }

  handleChangeMappingStatus = (event: any) => {
    this.setState({
      currentMapping: { ...this.state.currentMapping, mappingStatus: event.target.value }
    })
  }

  handleSubmit = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    const customerMappingInput = {
      customerId: this.state.currentMapping.customerId,
      groupId: this.state.currentMapping.groupId,
      mappingStatus: this.state.currentMapping.mappingStatus
    }
    // if (this.props.modalSubmitBtn === "Create") {
    //   this.createCustomer(customerInput)
    // } else {
    //   this.updateCustomer(this.props.customerId, customerMappingInput)
    // }
    this.setState({ modal: false });
    // this.listCustomer();
  }


  // Create a customer 
  createCustomer = (data: MappingModel) => {
    CustomerService.create(data)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

  // Update a customer
  updateCustomer = (id: number, data: MappingModel) => {
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
          <h3>{this.props.modalBtnName === 'New Mapping' ? 'New Mapping' : 'Update Mapping'}</h3>
          <Form onSubmit={this.handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCustomerId">
                <Form.Label>Group Name</Form.Label>
                <Form.Control type="text" 
                              name="customerId"
                              placeholder="Customer Name" 
                              value={ this.state.currentMapping.customerId }
                              onChange={this.handleChangeCustomerId} 
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridGroupId">
                <Form.Label>Amount</Form.Label>
                <Form.Control type="text"
                              name="groupId"
                              placeholder="Group Name"
                              value={this.state.currentMapping.groupId }
                              onChange={this.handleChangeGroupId}
                />
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