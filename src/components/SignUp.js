import React, {useRef, useState} from 'react'
import { Card, Form, Button, Alert} from 'react-bootstrap'
import {useAuth} from "../contexts/AuthContext"

export default function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const {signUp} = useAuth()

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }
        try {
            setError("")
            setLoading(true)
           await signUp(emailRef.current.value, passwordRef.current.value)
        } catch{
            setError("failed to create an account")
        }
        setLoading(false)
    }

  return (
    <>
    <Card>
    <Card.Body>
        <h2 className="text-center mb-4">Sign up</h2>
        {error && <Alert variant="danger">{error}</Alert>}
    <Form onSubmit={handleSubmit}>
        <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={emailRef} required>
            </Form.Control>
        </Form.Group>
        <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref={passwordRef} required>
            </Form.Control>
        </Form.Group>
        <Form.Group id="password-confirm">
            <Form.Label>Password confirmation</Form.Label>
            <Form.Control type="password" ref={passwordConfirmRef} required>
            </Form.Control>
        </Form.Group>
        <Button disabled={loading} className="w-100" type="submit">Sign up</Button>
    </Form>
    </Card.Body>
    </Card>
    <div className = "w-100 text-center mt-2">Already have an account? Log in</div>
    </>
  )
}
