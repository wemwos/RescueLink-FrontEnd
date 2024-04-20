import { Link } from "react-router-dom";
import useLogin from '../logic/login.logic';

function Login() {
    //login logics and hooks
    const { formData, responseMessage, errorMessage, isLoading, handleChange, handleSubmit } = useLogin();
    
    return (
      <Container fluid>
        <Row className="justify-content-center align-items-center" style={{ height: '100vh' }}>
          {/* Left side - Logo */}
          <Col md={6} className="text-center">
            <img src="/path/to/your/logo.png" alt="Logo" style={{ maxWidth: '100%', maxHeight: '100%' }} />
          </Col>
  
          {/* Right side - Login Form */}
          <Col md={6}>
            <Container>
              <Row className="justify-content-center">
                <Col md={8}>
                  <h2 className="mb-4">Login</h2>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>ID</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
  
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
  
                    <Button variant="primary" type="submit" className="w-100 mt-3">
                      Login
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default Login;