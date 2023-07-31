import React, { useState } from "react";
import { MDBDataTableV5 } from "mdbreact";
import { Pane,Button, Dialog, TextInputField, SelectField } from "evergreen-ui";

function ListFlower() {
  const [openmodal,setOpenModal] = useState(false);
  const [data, setData] = useState({
    columns: [
      {
        label: "ลำดับ",
        field: "no",
      },
      {
        label: "ชื่อรายการ",
        field: "name",
      },
      {
        label: "....",
        field: "name",
      },
      {
        label: "....",
        field: "name",
      },
    ],
  });
  const SubMit=(e)=>{
    e.preventDefault();

  }
  return (
    <Pane elevation={1} padding={10} borderRadius={5} backgroundColor={"white"} className="container-fluid" >
      <Pane height={"40px"} display={"flex"} justifyContent={"end"} borderRadius={"5px"} >
        <Button appearance="primary" intent="success" onClick={()=>{setOpenModal(true)}} >
          เพิ่มพันธุกรรมพืช
        </Button>
      </Pane>
      <MDBDataTableV5 data={data} theadColor="primary" responsive sortable={false} striped={true} />
      <Pane>
        <Dialog isShown={openmodal} onCloseComplete={()=>{setOpenModal(false)}} hasFooter={false} >
         <form onSubmit={SubMit} >
          <TextInputField label="รายการ" required />
          <SelectField label="ลิสต์" >

          </SelectField>
       <Button type="submit" appearance="primary" intent="success" >บันทึก</Button>
         </form>
        </Dialog>
      </Pane>
    </Pane>
  );
}

export default ListFlower;
