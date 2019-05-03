import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../actions/authentication';
import FooterBar from './FooterBar';
import classnames from 'classnames';
import './register.css'

const buttonStyle = {
  background: "grey",
  color: "whitesmoke",
  border: "grey"
}

class Register extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirm: '',
            errors: {},
            address: '',
            city: '',
            zipCode: '',
            state: '',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirm: this.state.password_confirm
        }
        this.props.registerUser(user, this.props.history);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    render() {
        const { errors } = this.state;
        return(
        <div className="registerPage">
          <main className="inner cover">
            <div className="container" style={{ marginTop: '50px', width: '700px', marginBottom: '70px'}}>
              <div className="forms">
                <h2 style={{marginBottom: '20px'}}>Registration</h2>
                <hr/>
                <form onSubmit={ this.handleSubmit }>
                    <div className="form-group">
                        <input
                        type="text"
                        placeholder="Name*"
                        className={classnames('form-control form-control-lg', {
                            'is-invalid': errors.name
                        })}
                        name="name"
                        onChange={ this.handleInputChange }
                        value={ this.state.name }
                        />
                        {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
                    </div>
                    <div className="form-group">
                        <input
                        type="email"
                        placeholder="Email*"
                        className={classnames('form-control form-control-lg', {
                            'is-invalid': errors.email
                        })}
                        name="email"
                        onChange={ this.handleInputChange }
                        value={ this.state.email }
                        />
                        {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                    </div>
                    <div className="form-group">
                        <input
                        type="password"
                        placeholder="Password*"
                        className={classnames('form-control form-control-lg', {
                            'is-invalid': errors.password
                        })}
                        name="password"
                        onChange={ this.handleInputChange }
                        value={ this.state.password }
                        />
                        {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                    </div>
                    <div className="form-group">
                        <input
                        type="password"
                        placeholder="Confirm Password*"
                        className={classnames('form-control form-control-lg', {
                            'is-invalid': errors.password_confirm
                        })}
                        name="password_confirm"
                        onChange={ this.handleInputChange }
                        value={ this.state.password_confirm }
                        />
                        {errors.password_confirm && (<div className="invalid-feedback">{errors.password_confirm}</div>)}
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        placeholder="Address"
                        name="address"
                        className='form-control form-control-lg'
                        onChange={ this.handleInputChange }
                        value={ this.state.address }
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        placeholder="City"
                        name="city"
                        className='form-control form-control-lg'
                        onChange={ this.handleInputChange }
                        value={ this.state.city }
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        placeholder="Zip code"
                        name="zipCode"
                        className='form-control form-control-lg'
                        onChange={ this.handleInputChange }
                        value={ this.state.zipCode }
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        placeholder="State"
                        name="state"
                        className='form-control form-control-lg'
                        onChange={ this.handleInputChange }
                        value={ this.state.state }
                        />
                    </div>
                    <div className="form-group">
                        <button style = {buttonStyle} type="submit" className="btn btn-primary">
                            Register User
                        </button>
                    </div>
                </form>
              </div>
            </div>
          </main>
          <div className = "footer">
            <FooterBar/>
          </div>
        </div>
        )
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps,{ registerUser })(withRouter(Register))
