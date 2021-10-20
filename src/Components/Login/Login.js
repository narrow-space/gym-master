

import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import Menubar from '../../Components/Menubar/Menubar'
import Useauth from '../../Hooks/Useauth';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';


const Login = () => {

  const { user, EmailLogin, GooglesignIn, error, Githubsignin, setUser,handleEmailChange,handlepasswordchange } = Useauth();
  const location = useLocation();
  const history = useHistory()
  console.log("came from", location.state?.from);
  const redirect_uri = location.state?.from ||'/home'

  const handlegooglelogin = () => {
       GooglesignIn()
      .then(result => {
        history.push(redirect_uri)
        const user = result.user;

        
        setUser(user)
      })
  }
     

   const handleGithublogin=()=>{
    Githubsignin()
    
    .then(result => {
       history.push(redirect_uri)
      const user = result.user;

    
      setUser(user)
  })
   }


  return (
    <div className="">
      <Menubar />
      <Banner/>

      <Row>
        <Col sm={8}></Col>
        <Col sm={4}></Col>
      </Row>
      <Row>
        <Col sm></Col>
        <Col sm={5}>
          <h3 className="mt-3 text-info">Please Login</h3>
          <Form className="mt-5" onSubmit={EmailLogin}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control onChange={handleEmailChange} type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={handlepasswordchange} type="password" placeholder="Password" />
            </Form.Group>
            <p className="text-danger">{error}</p>
            <input className="btn btn-success w-100 p-4" type="submit" value="LogIn" />
          </Form>
          <div className="d-flex">
            <input className="btn btn-warning w-50 mt-4" onClick={handlegooglelogin} type="submit" value="Google sign in" />
            <input className="btn btn-success w-50 mt-4 mx-4 p-4" onClick={handleGithublogin} type="submit" value="Github SignIn" />


          </div>



        </Col>
        <Col sm></Col>
      </Row>
      <Link className="text-decoration-none" to="/register"><p>Are you new user please register</p></Link>
      <Footer></Footer>
    </div>

  );
}

export default Login;