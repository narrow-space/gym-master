

import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Menubar from '../../Components/Menubar/Menubar'
import Useauth from '../../Hooks/Useauth';


const Login = () => {

    const { user, EmailLogin, GooglesignIn, error,Githubsignin } = Useauth();





    return (
        <div className="">
            <Menubar />
            
                <Row>
                    <Col sm={8}></Col>
                    <Col sm={4}></Col>
                </Row>
                <Row>
                    <Col sm></Col>
                    <Col sm={5}>
                    <Form className="mt-5" onSubmit={EmailLogin}>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <p className="text-danger">{error}</p>
  <input className="btn btn-success w-100 p-4" type="submit" value="LogIn"/>
</Form>
                     <div className="d-flex">
                     <input className="btn btn-warning w-50 mt-4" onClick={GooglesignIn} type="submit" value="Google sign in" />
                     <input className="btn btn-success w-50 mt-4 mx-4 p-4" onClick={Githubsignin} type="submit" value="Github SignIn" />
                     

                     </div>
                      
                  
                     
                    </Col>
                    <Col sm></Col>
                </Row>
                <Link className="text-decoration-none" to="/register"><p>Are you new user please register</p></Link>
           </div>

            );}

            export default Login;