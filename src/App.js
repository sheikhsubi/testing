import react, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import "./styles.css";

export default function App() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [confrPassword, setconfrPassword] = useState("");
  const [name, setname] = useState("");

  var lowerCase = /[a-z]/g;
  var upperCase = /[A-Z]/g;
  var numbers = /[0-9]/g;

  const [nameError, setNameerror] = useState(false);
  const [Passerror, setPasserror] = useState(false);
  const [confrerror, setconfrerror] = useState(false);

  function handleName(e) {
    var item = e.target.value;
    if (item.length <= 3) {
      setNameerror(true);
      //alert("Name not valid")
    } else {
      setNameerror(false);
    }
    setname(item);
  }

  function handlePassword(e) {
    var item = e.target.value;

    if (
      item.length <= 3 ||
      !item.match(lowerCase) ||
      !item.match(upperCase) ||
      !item.match(numbers)
    ) {
      setPasserror(true);
      // alert("password not valid")
    } else {
      setPasserror(false);
    }
    setPassword(item);
  }

  function handleConfrPassword(e) {
    var item = e.target.value;

    if (
      item.length <= 3 ||
      !item.match(lowerCase) ||
      !item.match(upperCase) ||
      !item.match(numbers)
    ) {
      setconfrerror(true);
      //alert("password not valid")
    } else {
      setconfrerror(false);
    }
    setconfrPassword(item);
  }

  function HandleSubmit(event) {
    console.log("email: ", email);

    if (name.length < 3 || password.length < 3 || confrPassword.length < 3) {
      alert("Not Valid values entered");
    } else if (password !== confrPassword) {
      alert("passwords dont match");
    } else {
      alert(`Welcome, ${name}`);
      event.preventDefault();
    }
  }
  return (
    <div className="container">
    <h1>SIGN UP FORM </h1>
      <form onSubmit={HandleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
            <input type="text" value={name} className="form-control" id="name" onChange={handleName}></input>
            {nameError ? <span>User Not Valid</span> : ""}
          </label>
          <br /> <br />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
            <input
              type="email"
              value={email}
              className="form-control"
              id="email"
              onChange={(e) => setemail(e.target.value)}
            ></input>
          </label>
          <br /> <br />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
            <input
              type="password"
              value={password}
              className="form-control"
              id="password"
              onChange={handlePassword}
            ></input>
            {Passerror ? <span>User Not Valid</span> : ""}
          </label>
          <br /> <br />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Confirm Password
            <input
              type="password"
              value={confrPassword}
              className="form-control"
              id="password"
              onChange={handleConfrPassword}
            ></input>
            {confrerror ? <span>User Not Valid</span> : ""}
          </label>
          <br /> <br />
        </div>
        <button>SUBMIT</button>
      </form>
    </div>
  );
}
