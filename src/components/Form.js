import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            address: ''
        }
    }
    handleUsername = (event) => {
        this.setState({
            username: event.target.value
        });
    }
    handleAdderss = (event) => {
        this.setState({
            address: event.target.value
        })
    }
    handlesubmit = (event)=>{
        alert(`${this.state.username} ${this.state.address}`)
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handlesubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" value={this.state.username} onChange={this.handleUsername}></input>
                </div>
                <div>
                    <label>Address</label>
                    <textarea value={this.state.address} onChange={this.handleAdderss}></textarea>
                </div>
                <button>Submit Now</button>
            </form>
        )
    }
}

export default Form
