import React from "react";
import { Pane } from "evergreen-ui";
import "./Home.css";
import img1 from "../assets/01.jpg";
const data = [
  { val: "1" },
  { val: "2" },
  { val: "3" },
  { val: "5" },
  { val: "8" },
  { val: "8" },
  { val: "8" },
  { val: "8" },
  { val: "8" },
  { val: "8" },
  { val: "8" },
  { val: "8" },
  { val: "8" },
  { val: "8" },
];
function Home() {
  return (
    <div>
     <div className="grid-container">
      {data.map((i) => (
        <Pane
          backgroundColor={"white"}
          elevation={3}
          borderRadius={5}
          className="card-flower p-2"
          minHeight={"400px"}
        >
          <img
            src={img1}
            alt=""
            width={"100%"}
            style={{ maxHeight: "250px" }}
          />
          <div>
            <div>ดอกราชพฤกษ์ (Golden shower)</div>
            <div>ชื่อทางวิทยาศาสตร์ : Cassia fistula</div>
          </div>
          <div className="bottom-flower">ข้อมูลเพิ่มเติม...</div>
        </Pane>
      ))}
    </div> 
    </div>
    
  );
}

export default Home;
