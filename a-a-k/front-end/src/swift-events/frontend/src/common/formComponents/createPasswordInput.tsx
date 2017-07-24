import * as React from 'react';
import { CreatePasswordInputProps } from '../../types/form';
import Input from './input';
import validateEmail from '../../utils/checkEmail';

export default class CreatePasswordInput extends React.Component<CreatePasswordInputProps, any>{

    constructor() {
        super()
        this.state = {
            password: this.props.value,
            confirmPassword: ''

        }
    }

    blurHandler() {

    }

    render() {


        return (
            <div>
                <Input value={this.props.value} name="password" placeholder='Password' onChange={this.props.onChange} type='password' errorMessage='Password required' required />
                <Input value={this.state.confirmPassword} name="confirmPassword" placeholder=' confirm Password' onChange={this.props.onChange} type='password' errorMessage=' confirm Password required' required />
            </div>);

    }

}