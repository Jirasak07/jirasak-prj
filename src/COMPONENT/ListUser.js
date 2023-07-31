import React from "react";
import { MDBDataTableV5 } from "mdbreact";
import { Pane, Button } from "evergreen-ui";
function ListUser() {
  return (
    <Pane
      elevation={1}
      padding={10}
      borderRadius={5}
      backgroundColor={"white"}
      className="container-fluid"
    >
      <Pane height={"40px"} display={"flex"} justifyContent={"end"} borderRadius={"5px"} >
        <Button appearance="primary" intent="success">
          เพิ่มผู้ใช้งาน
        </Button>
      </Pane>

      <MDBDataTableV5 striped={true} />
    </Pane>
  );
}

export default ListUser;
