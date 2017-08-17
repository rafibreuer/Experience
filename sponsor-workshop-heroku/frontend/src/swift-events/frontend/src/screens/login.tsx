import * as React from 'react';
import Form from '../common/formComponents/form';

import { LoginFormState } from '../types/form';
import axios from 'axios';
import Input from '../common/formComponents/input';
import Button from '../common/formComponents/button';


class Login extends React.Component<any, LoginFormState>{
    constructor() {
        super();
        this.state = {
            login: {
                email: '',
                password: ''
            }
        }
    }

    changeHandler = (e: any) => {
        let login = Object.assign({}, this.state.login);
        login[e.target.name] = e.target.value;
        this.setState({ login });
    }

    submit = () => {
        alert('submitted');
    }

    render() {

        return (
            <div>

                <Form submit={this.submit}>

                    <Input value={this.state.login.email} name="email" placeholder='Email' onChange={this.changeHandler} type='text' errorMessage='Email required' required />
                    <Input value={this.state.login.password} name="password" placeholder='password' onChange={this.changeHandler} type='password' errorMessage='Password required' required />

                    <Button buttonName='log in' className='btn btn-success' />
                </Form>
            </div>
        )

    }
}
export default Login