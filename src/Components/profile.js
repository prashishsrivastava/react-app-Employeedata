import data from "./EMPDATA.json"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Persdata from "./personal_data"

const Home = () => {

  const [persdata,setPersdata]=useState(false)

  const navigate = useNavigate()
  const getEmpid = localStorage.getItem("empiddata");
  
  const handellogout=()=>{
    localStorage.clear()
    navigate("/")
  }
  const callback=()=>{
    setPersdata(false)
  }
  const handelclick=()=>{
    setPersdata(true)
  }
  
  return (
    <div className="centeralign">
    <div className="container_afterlogin">
      <h2 style={{marginBottom:"0px"}}>Welcome {data[Number(getEmpid)].Name} !!!</h2>
      <p style={{marginTop:"0px"}}>you are logged in ...</p>
      <h4 style={{marginBottom:"0px",color:"blue"}}>Project details:</h4>
      <br></br>
      <table>
        <tr>
          <th>Designation</th>
          <th>Date of join</th>
          <th>Experience</th>
          <th>Employee status</th>
          <th>Project name</th>
          <th>Project location</th>
          <th>Project starting date</th>  
        </tr>
        <tr>
          <td>{data[Number(getEmpid)].Designation}</td>
          <td>{data[Number(getEmpid)].DOJ}</td>
          <td>{data[Number(getEmpid)].Current_Experience}</td>
          <td>{data[Number(getEmpid)].Employee_status}</td>
          <td>{data[Number(getEmpid)].Current_Project}</td>
          <td>{data[Number(getEmpid)].Location}</td>
          <td>{data[Number(getEmpid)].Starting_date}</td>
        </tr>
      </table>
      <br></br>
      <button className="but-all-gb" onClick={handelclick}>
        Presonal details 
      </button>
      <button className="but-all-bb" onClick={handellogout}>
        Logout
      </button>
      <Persdata
      openpersdata={persdata}
      setopenpersdata={setPersdata}
      callBack={callback}>
      </Persdata>
    </div>
    </div>
   ) 
};

export default Home;
