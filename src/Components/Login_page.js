import "./style.css";
import { useRef } from "react";
import empdata from "./EMPDATA.json";
import { useNavigate } from "react-router-dom";

function Loginpage() {
  const empid = useRef();
  const pwd = useRef();
  const navigate=useNavigate()
  

  const handelsubmit = () => {
    if (empid.current.value === "" && pwd.current.value === "") {
      alert("please fill yor email and password");
    } else if (empid.current.value === "") {
      alert("please fill yor email");
    } else if (pwd.current.value === "") {
      alert("please fill yor password");
    } else if (empdata[Number(empid.current.value)].Password === pwd.current.value) {
      localStorage.setItem("empiddata", empid.current.value);
      localStorage.setItem("pwddata", pwd.current.value);
      navigate("/profile")  
    }
    else{
      alert("please enter valid password");
    } 
  };
  return (
    <div className="container">
        <>
          <div className="left_page">
            <header>
              <h1>Welcom to our organization</h1>
              <p className="page_tag">please fill your credentials here...</p>
            </header>

            <form onSubmit={handelsubmit}>
              <label id="username">Employee ID:</label>
              <input
                placeholder="id:500001"
                type="username"
                ref={empid}
              ></input>
              <label id="pwd">Password:</label>
              <input
                placeholder="min 8 characters"
                type="password"
                ref={pwd}
              ></input>
              <div className="form_item">
                <input className="ckeckbox" type="checkbox"></input>
                <label id="checkbox">Remember me</label>
              </div>
              <div className="form_footer">
                <a href="singup_page">Signup for Newuser</a>
              </div>
              <button className="but-all-bb">submit</button>
            </form>
          </div>
          <div className="right_page">
            <img src="https://blog.vantagecircle.com/content/images/2021/05/Organizational-Skills.png" />
          </div>
        </>
    </div>
  );
}
export default Loginpage;
