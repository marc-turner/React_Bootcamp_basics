import React, { Component } from 'react';

class MutipleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            email: '',
            password: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    handleSubmit(e) {
        alert(`You typed: ${this.state.fullName}`);
        this.setState({
            fullName: '',
        });
    }
    render() {
        return (
            <div>
                <h1>HOLA FROM MULTIPLE FORM</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        name='fullName'
                        placeholder='Full Name'
                        value={this.state.fullName}
                        onChange={this.handleChange}
                    />
                    <input
                        type='email'
                        name='email'
                        placeholder='Email'
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <input
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <button>Add!</button>
                </form>

                <div></div>
            </div>
        );
    }
}

export default MutipleForm;
