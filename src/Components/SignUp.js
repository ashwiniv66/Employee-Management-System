import React, { useState, useEffect } from 'react';
import validation from './validation';

const SignUp = ({ submitForm }) => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        userId: "",
    });

    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
        setDataIsCorrect(true);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && dataIsCorrect) {
            submitForm(true);
        }
    }, [errors]);

    return (
        <div className="container">
            <div className="app-wrapper">
                <div>
                    <h2 className="title">Create Account</h2>
                </div>
                <form className="form-wrapper">
                    <div className="name">
                        <label className="label">User Id</label>
                        <input className="input" type="text" name="userId" />
                    </div>
                    <div className="name">
                        <label className="label">First Name</label>
                        <input className="input" type="text" name="firstname" value={values.firstname} onChange={handleChange} />
                        {errors.firstname && <p className="error">{errors.firstname}</p>}
                    </div>
                    <div className="name">
                        <label className="label">Last Name</label>
                        <input className="input" type="text" name="lastname" value={values.lastname} onChange={handleChange} />
                        {errors.lastname && <p className="error">{errors.lastname}</p>}
                    </div>
                    {/* <div id="date-picker-example" className="md-form md-outline input-with-post-icon datepicker" inline="true">
                        <label className="label">Date of Birth</label>
                        <input placeholder="Select date" type="text" id="example" className="form-control"/>
                        <i className ="fas fa-calendar input-prefix"></i>
                    </div> */}
                    <div className="name">
                        <label className="label">Date of Birth</label>
                        <input class="input" data-date-format="mm/dd/yyyy" type="text" name="dob" />
                    </div>
                    <div className="email">
                        <label className="label">Email</label>
                        <input className="input" type="email" name="email" value={values.email} onChange={handleChange} />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div>
                        <button className="submit" onClick={handleFormSubmit}>Sign Up</button>
                    </div>

                </form>
            </div>
        </div>
    );
}
export default SignUp;