import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import { GroupModal} from '../../components/group/group-modal.component';

export default class GroupList extends Component {

  render() {
    return(
      <Container fluid>
        <div className="pt-3 pb-3 button-style">
          <GroupModal modalBtnName={"New Group"} modalSubmitBtn={"Create"} />
        </div>
      </Container>
    )
  }
}