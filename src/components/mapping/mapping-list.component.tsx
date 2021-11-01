import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import { MappingModal } from '../../components/mapping/mapping-modal.component';

export default class MappingList extends Component {

  render() {
    return(
      <Container fluid>
        <div className="pt-3 pb-3 button-style">
          <MappingModal modalBtnName={"New Mapping"} modalSubmitBtn={"Create"} />
        </div>
      </Container>
    )
  }
}