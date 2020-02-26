import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';

const Button = styled.button`
    width: 30%;
    border: 2 px silver;
    margin: 0 auto;
    background: lightgrey;
`

const Form = styled.form`
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

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChanges = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/login', this.state.credentials)
        .then(res => {
            window.localStorage.setItem('token', res.data.payload);
            // navigate the user to /protected (whatever landing page)
            this.props.history.push('/friends')
        })
        .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <Form onSubmit={this.login}>
                    <Input
                        type='text'
                        name='username'
                        placeholder='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChanges}
                    />
                    <Input
                        type='password'
                        name='password'
                        placeholder='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChanges}
                    />
                    <Button>Log In</Button>
                </Form>
            </div>
        )
    }
}

export default Login;