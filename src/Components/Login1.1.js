import React, { useState } from "react";
import { Button, FormGroup,FormLabel,FormControl } from "react-bootstrap";
export default function Login1(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    function performValidation() {
        return username.length > 0 && password.length > 0;
    }
    function handleSubmit(event) {
        event.preventDefault();
    }
    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="username" bsSize="small">
                    <FormLabel>Username</FormLabel>
                    <FormControl
                        autoFocus
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)} />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <FormLabel>Password</FormLabel>
                    <FormControl
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password" />
                </FormGroup>
                <Button block bsSize="large" disabled={!performValidation()} type="submit">
                    Login
                </Button>
            </form>
        </div>
    );
}
