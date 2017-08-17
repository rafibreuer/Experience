import * as React from 'react';
import axios from 'axios';
import Navbar from './navbar';
import { SignUpFormState } from '../types/form';
import { Input } from '../swift-events';
import { Form } from '../swift-events';
import { Button } from '../swift-events';

class CreateUserForm extends React.Component<any, SignUpFormState> {
    constructor() {
        super();
        this.state = {
            form: {
                name: '',
                email: '',
                password: '',
                location: '',
                phone: ''
            },
            serverError: '',
            confirmPassword: '',
            confirmError: ''
        }
    }
    submit = async () => {
        if (this.state.confirmError) return;
        let addUser = await axios.post('/auth/users/addUser', this.state.form);
        if (addUser.data.success) {
            localStorage.removeItem('userId');
            localStorage.setItem('userId', addUser.data.token);
            this.props.history.push('/workShopList');
        } else {
            let state = Object.assign(this.state);
            state.serverError = 'Email exists';
            this.setState(state);
        }
    }
    onChange = (e: any) => {
        let state = Object.assign(this.state);
        this.comparePassword();
        state.serverError = '';
        state.form[e.target.name] = e.target.value;
        if (state.confirmPassword && state.form.password === state.confirmPassword) {
            state.confirmError = '';
        }
        this.setState(state);
    }
    confirmChanger = (e: any) => {
        let state = Object.assign(this.state);
        state.confirmError = '';
        state.confirmPassword = e.target.value;
        this.setState(state);
    }
    comparePassword = () => {
        let state = Object.assign(this.state);
        state.confirmError = '';
        if (state.confirmPassword && state.form.password !== state.confirmPassword) {
            state.confirmError = 'passwords dont match';
        }
        this.setState(state);
    }
    render() {
        return (
            <div>
                <Navbar title="Join our Workshop!" />
                <div className="container">
                    <div className="row col-md-4 col-md-offset-4 text-center">
                        <Form submit={this.submit}>
                            <div className="form-group">
                                <Input className="form-control" value={this.state.form.name} name="name" placeholder='Name' onChange={this.onChange} type='text' errorMessage='Name required' required />
                            </div>
                            <div className="form-group">
                                <div className="e">{this.state.serverError}</div>
                                <Input className="form-control" value={this.state.form.email} name="email" placeholder='Email' onChange={this.onChange} type='email' errorMessage='Password required' required />
                            </div>
                            <div className="form-group">
                                <Input className="form-control" value={this.state.form.password} name="password" placeholder='password' onChange={this.onChange} type='password' errorMessage='Password required' required />
                            </div>
                            <div className="form-group">
                                <div className="e">{this.state.confirmError}</div>
                                <Input className="form-control" value={this.state.confirmPassword} custom={this.comparePassword} name="confirmPassword" placeholder='Confirm Password' onChange={this.confirmChanger} type='password' errorMessage='Confirm Password required' required />

                            </div>
                            <div className="form-group">
                                <Input className="form-control" value={this.state.form.location} name="location" placeholder='Location' onChange={this.onChange} type='text' errorMessage='Location required' required />
                            </div>
                            <div className="form-group">
                                <Input className="form-control" value={this.state.form.phone} name="phone" placeholder='Phone' onChange={this.onChange} type='text' errorMessage='Phone required' required />
                            </div>
                            <Button buttonName='Sign Up' className='btn btn-success' />
                        </Form>
                    </div>
                </div>
            </div>
        )

    }
}

export default CreateUserForm;
