import React, { useState } from "react";
import { MDBDataTableV5 } from "mdbreact";
import { Pane, Button,Dialog } from "evergreen-ui";
function ListUser() {
  const [open,setOpen] = useState(false)
  return (
    <Pane
      elevation={1}
      padding={10}
      borderRadius={5}
      backgroundColor={"white"}
      className="container-fluid"
    >
      <Pane height={"40px"} display={"flex"} justifyContent={"end"} borderRadius={"5px"} >
        <Button appearance="primary" intent="success" onClick={()=>{setOpen(true)}} >
          เพิ่มผู้ใช้งาน
        </Button>
      </Pane>

      <MDBDataTableV5 striped={true} />
      <Dialog isShown={open} onCloseComplete={()=>{setOpen(false)}} ></Dialog>
    </Pane>
  );
}

export default ListUser;
