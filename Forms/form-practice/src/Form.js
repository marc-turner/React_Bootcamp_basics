import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
            fullName: e.target.value,
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
                <h1>HOLA FROM FORM</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        value={this.state.fullName}
                        onChange={this.handleChange}
                    />
                    <button>Add!</button>
                </form>

                <div></div>
            </div>
        );
    }
}

export default Form;
