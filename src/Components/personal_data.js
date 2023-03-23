import empdata from "./EMPDATA.json";

const Personaldata = (props) => {
  const getid = localStorage.getItem("empiddata");
  const { openpersdata, setopenpersdata, callBack } = props;

  return (
    <dialog open={openpersdata} className="container_afterprofile">
      <div>
        <div className="personaldata">
          <button
            className="close_but"
            onClick={() => {callBack()}}>
            X
          </button>
          <li>
            {" "}
            <strong style={{color:"blue"}}>Personal details</strong>
            <ul>Date of birth : {empdata[getid].DOB}</ul>
            <ul>Blood group : {empdata[getid].Blood_group}</ul>
            <ul>Gender : {empdata[getid].Gender}</ul>
            <ul>Mail id : {empdata[getid].Email}</ul>
          </li>
        </div>
      </div>
    </dialog>
  );
};

export default Personaldata;
