import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Helmet } from "react-helmet-async";
import Axios from "axios";
import { useState } from "react";

export default function SigninScreen() {
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SubmitHandler = async (e) => {
    e.preventDefult();
    try {
      const { data } = await Axios.post("/api/users/signin", {
        email,
        password,
      });
    } catch (err) {}
  };
  return (
    <Container className="small-container">
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <h1 className="my-3">Sign In</h1>
      <Form onSubmit={SubmitHandler}>
        <Form.Group className="mb-3" controlId="email"
        >
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required 
          onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" required 
          onChange={(e)=>setPassword(e.target.value)}/>
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Sign In</Button>
        </div>
        <div className="mb-3">
          New customer?{" "}
          <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
        </div>
      </Form>
    </Container>
  );
}
