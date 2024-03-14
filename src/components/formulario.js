import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Formulario() {


    const [isIncorrectEmail, setIsIncorrectEmail] = useState(false)
    const [isIncorrectPassword, setIsIncorrectPassword] = useState(false)

    const [formValues, setFormValues] = useState({ email: "", password: "", favClass: "1" })

    const handleEmailChange = ((e) => {
        setFormValues({ ...formValues, email: e.target.value })
    });

    const handlePasswordChange = ((e) => {
        setFormValues({ ...formValues, password: e.target.value })
        const passwordArray = e.target.value.split("")
        let hasNumber = false
        let hasLetter = false
        for (const character of passwordArray) {
            if (!isNaN(character)) {
                hasNumber = true
            }
            else {
                hasLetter = true
            }
        }

        if (passwordArray.length >= 9 && hasNumber && hasLetter) {
            setIsIncorrectPassword(false)
        }
        else {
            setIsIncorrectPassword(true)
        }
    });

    const handleSelectChange = ((e) => {
        setFormValues({ ...formValues, favClass: e.target.value })
    });

    const clickSubmit = (() => {
        //Call fetch
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (emailRegex.test(formValues.email)) {
            setIsIncorrectEmail(false)
        } else {
            setIsIncorrectEmail(true)
        }

    });

    return (
        <div>
            <h1>Ejemplo de formularios!</h1>

            <Form>
                <Form.Group className={`mb-6 ${isIncorrectPassword ? 'border-danger' : ''}`} controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} value={formValues.email} />
                    {isIncorrectEmail && (
                        <p style={{ 'color': 'red' }}>Your email should follow an established format</p>
                    )}
                </Form.Group>

                <Form.Group className={`mb-3 ${isIncorrectPassword ? 'border-danger' : ''}`} controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} value={formValues.password} />
                    {isIncorrectPassword && (
                        <p style={{ 'color': 'red' }}>Your password should be have numbers and letters and should be at least 9 char long</p>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label>Favorite Class</Form.Label>
                    <Form.Select onChange={handleSelectChange}>
                        <option value="1">ISIS3710</option>
                        <option value="2">Programación con tecnologias web</option>
                    </Form.Select>
                </Form.Group>
                <Button variant="primary" onClick={clickSubmit}>
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Formulario;