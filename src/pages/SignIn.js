import React from 'react'
  import SignInNavbar from "../components/SignInNavbar"
  import classes from "../styles/SignIn.module.scss"
  import Image from 'next/image'
  import img1 from "../images/img2.png"
  import img2 from "../images/signinImg2.png"
  import Button from 'react-bootstrap/Button';
  import Form from 'react-bootstrap/Form';
import Link from 'next/link'
const SignIn = () => {
 

  return (
   <main>
  <SignInNavbar/>
  <div className={classes.signin_wrapper}>
    <Image src={img1} alt="" />
    <div className={classes.inner_wrapper}>
    <Form className={classes.form_Wrapper}>
      <h3>Sign in your account</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We will never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
       <Link href="/Profile" className={classes.linkprofile}><Button variant="primary" type="submit" >
     
        Submit
      </Button></Link>
      <p><Link href="/SignUp">You do not have an account yet?</Link></p>
    </Form>
    </div>
    <Image src={img2} alt=""/>

  </div>
   </main>
  )
}

export default SignIn