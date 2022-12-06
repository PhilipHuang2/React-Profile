import { useState, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {validateEmail} from '../utils/helpers'
import emailjs from '@emailjs/browser'

export default function AboutMe() {

  const form = useRef();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(()=>{
    console.log("This is useEffect Hook")
    console.log("name: " +name, " email: " + email, " message: " +  message)
  },[email, name, message]);

  const updateInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    console.log(target.name, target.value)
    setErrorMessage("")
    if (inputType === 'email') {
        setEmail(inputValue);
        console.log(email)
        if(inputValue === "")
          setErrorMessage("Email cannot be empty.")
        else if(!validateEmail(inputValue))
          setErrorMessage("Please enter a valid email")
      } else if (inputType === 'name') {
        setName(inputValue);
        console.log(name)
        if(inputValue === "")
          setErrorMessage("Name cannot be empty.")
      } else {
        setMessage(inputValue);
        console.log(message)
        if(inputValue === "")
          setErrorMessage("Message cannot be empty.")
      }
      if(errorMessage === "")
      {
        if(inputValue === "")
          setErrorMessage("Name cannot be empty.")
        else if(inputValue === "")
          setErrorMessage("Email cannot be empty.")
        else if(!validateEmail(inputValue))
          setErrorMessage("Please enter a valid email")
        else if(inputValue === "")
          setErrorMessage("Message cannot be empty.")
      }
  };

  const handleFormSubmit = (e) => {
    console.log("sending email")
    e.preventDefault();

    if(email === "" || name === "" || message === "")
      return;
    emailjs.sendForm('service_vejtvgb', 'testing_templates', form.current,'-LVgucmjEvPEz5vIJ')
    .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
    

  }

  return (
    <div>
      <p style={{textAlign: "center", fontSize:"20px"}}>Send me an Email!</p>
      <Form ref={form}onSubmit={handleFormSubmit} className="px-2"style={{marginRight:"25%", marginLeft:"25%", backgroundColor: "lightgrey"}}>
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
