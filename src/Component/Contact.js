import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function AboutMe() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(()=>{
    console.log("name: " +name, " email: " + email, " message: " +  message)
  },[email, name, message]);

  const updateInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    if (inputType === 'email') {
        setEmail(inputValue);
      } else if (inputType === 'name') {
        setName(inputValue);
      } else {
        setMessage(inputValue);
      }
    if(name === "")
        setErrorMessage('Please enter a name')
    else if(email === "")
        setErrorMessage('Please enter an email')
    else if(message === "")
        setErrorMessage('Please enter a message')
    else
        setErrorMessage('')
  };


  return (
    <div>
      <p style={{textAlign: "center", fontSize:"20px"}}>Send me an Email!</p>
      <Form className="px-2"style={{marginRight:"25%", marginLeft:"25%", backgroundColor: "lightgrey"}}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" name="name" onBlur={updateInputChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" name="email" onBlur={updateInputChange} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3}  name="message" onBlur={updateInputChange}/>
        </Form.Group>

        {errorMessage ? 
        (<p> {errorMessage} </p>) :
        (<Button variant="primary" type="submit">
          Submit
        </Button>)
        }
      </Form>
    </div>
  );
}
