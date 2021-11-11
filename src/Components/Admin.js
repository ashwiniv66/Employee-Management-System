import React from 'react';
import AdminService from './Service/AdminService';

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

export default class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      password: null,
      errors: {
        fullName: '',
        email: '',
        password: '',
      }
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'fullName':
        errors.fullName =
          value.length < 5
            ? 'Full Name must be at least 5 characters long!'
            : '';
        break;
      case 'email':
        errors.email =
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password':
        errors.password =
          value.length < 8
            ? 'Password must be at least 8 characters long!'
            : '';
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm(this.state.errors)) {
      //console.info('Valid Form')
      alert.info('Valid Form')
    } else {
      console.error('Invalid Form')
    }
  }
  updateEmployee(employee) {
    AdminService.updateEmployee(employee).then(response => {
      console.log(response)
    }).catch(error => console.log(error))
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="container mt-3">
        <div className="name">
          <form class="form-wrapper" onSubmit={this.handleSubmit} noValidate>
            <center>
              <h2>Admin Login</h2>
            </center>
            <label >Full Name</label>
            <input type='text' name='fullName' onChange={this.handleChange} noValidate />
            {errors.fullName.length > 0 &&
              <span className='error'>{errors.fullName}</span>}
            <div className='name'>
              <label>Email</label>
              <input type='email' name='email' onChange={this.handleChange} noValidate />
              {errors.email.length > 0 &&
                <span className='error'>{errors.email}</span>}
            </div>
            <div className='password'>
              <label>Password</label>
              <input type='password' name='password' onChange={this.handleChange} noValidate />
              {errors.password.length > 0 &&
                <span className='error'>{errors.password}</span>}
            </div>
            <div>
              <button className='submit'>Create</button>
            </div>
          </form>
        </div>
      </div>

    );
  }
}