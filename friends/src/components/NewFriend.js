import React, { Component } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const FormDiv = styled.form`
    display:flex;
    margin:10px auto;
    justify-content:space-evenly;
    flex-direction: column;
    width: 20%;
    height: 4%;
`

const Input = styled.input`
    margin: 10px auto;
    border-radius:5px;
`

class NewFriend extends React.Component {
    state = {
        name: '',
        age: '',
        email: ''
    };

    handleChanges = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    };

    addFriend = e => {
        e.preventDefault();
        console.log('addfriend log: ', this.state);
        axiosWithAuth()
        .post('http://localhost:5000/api/friends', this.state)
        .then(res => {
            console.log('this is response from AddFriend ', res.data)
            this.setState([
                ...this.state,
                {
                    name: this.state.name,
                    age: this.state.age,
                    email: this.state.email
                }
            ]);
        })
        .catch(err => console.log(err));
    };

    render() {
        return(
            <div className='AddFriendDiv'>
                <FormDiv onSubmit={this.addFriend}>
                    <Input 
                        type='text'
                        name='name'
                        placeholder='name'
                        value={this.state.name}
                        onChange={this.handleChanges}
                    />
                    <Input 
                        type='text'
                        name='age'
                        placeholder='age'
                        value={this.state.age}
                        onChange={this.handleChanges}
                    />
                    <Input 
                        type='email'
                        name='email'
                        placeholder='email'
                        value={this.state.email}
                        onChange={this.handleChanges}
                    />
                    <button>Add Friend</button>
                </FormDiv>
            </div>
        )
    }
}

export default NewFriend;