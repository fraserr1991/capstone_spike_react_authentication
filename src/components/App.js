import React from "react"
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import SignUp from "./SignUp"
function App() {
  return (
    <AuthProvider>

    <Container 
    className="d-flex align-items-center justify-content-center" 
    style={{minHeight: "60vh"}}>
      <div className="w-100" style={{maxWidth:"600px"}}>
        <SignUp/>
      </div>
    </Container>

    </AuthProvider>
  );
}

export default App;
