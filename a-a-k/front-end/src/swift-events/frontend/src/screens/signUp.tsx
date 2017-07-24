import * as React from 'react';
import Form from '../common/formComponents/form';
import { SignUpFormState } from '../types/form';
import axios from 'axios';
import Input from '../common/formComponents/input';
import { Link } from 'react-router-dom';
import Button from '../common/formComponents/button';
import CreatePasswordInput from '../common/formComponents/createPasswordInput';
import { BrowserRouter, Route, RouteComponentProps } from 'react-router-dom';

class SignUp extends React.Component<RouteComponentProps<any>, SignUpFormState>{
    constructor() {
        super();
        this.state = {
            signUp: {
                firstName: '',
                lastName: '',
                phoneNumber: '',
                username: '',
                password: '',
                email: ''
            },
            vendorCheckbox: false
        }
    }


    changeHandler = (e: any) => {
        let signUp = Object.assign({}, this.state.signUp);
        let vendorCheckbox = Object.assign({}, this.state.vendorCheckbox);
        signUp[e.target.name] = e.target.value;
        vendorCheckbox = e.target.checked;
        this.setState({ signUp, vendorCheckbox });
    }

    submit = async () => {
        if (!this.state.vendorCheckbox) {
            let addUser = await axios.post('/api/users/addUser', this.state.signUp)
            if (addUser.data.success) {
                this.props.history.push('/');
            } else {
                console.log('res not success');
            }
        } else {
            this.props.history.push('/vendorSignUpServiceSelector');
        }

    }

    render() {
        return (

            <div>
                <Form submit={this.submit}>
                    <Input value={this.state.signUp.firstName} name="firstName" placeholder='First Name' onChange={this.changeHandler} type='text' errorMessage='First Name required' required />
                    <Input value={this.state.signUp.lastName} name="lastName" placeholder='Last Name' onChange={this.changeHandler} type='text' errorMessage='Last Name required' required />
                    <Input value={this.state.signUp.phoneNumber} name="phoneNumber" placeholder='Phone Number' onChange={this.changeHandler} type='text' errorMessage='Phone Number required' required />
                    <Input value={this.state.signUp.username} name="username" placeholder='Username' onChange={this.changeHandler} type='text' errorMessage='Username required' required />
                    <Input value={this.state.signUp.password} name="password" placeholder='Password' onChange={this.changeHandler} type='password' errorMessage='Password required' required />
                    <Input value={this.state.signUp.email} name="email" placeholder='Email' onChange={this.changeHandler} type='text' errorMessage='Email required' required />
                    <Input value={this.state.vendorCheckbox} name='vendorCheckbox' onChange={this.changeHandler} type='checkbox' errorMessage='' placeholder='I am a vendor' required={false} />
                    <Button buttonName='Sign Up' className='btn btn-success' />
                </Form>

            </div>
        )

    }
}

export default SignUp;
