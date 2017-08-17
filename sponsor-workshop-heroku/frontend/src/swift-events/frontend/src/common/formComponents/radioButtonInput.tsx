import * as React from 'react';
import { RadioButtonInputProps } from '../../types/form';
import Input from './input';
import validateEmail from '../../utils/checkEmail';

export default class RadioButtonInput extends React.Component<RadioButtonInputProps, any>{

    render() {
        const radioButtons = this.props.radioButtonArray.map((button: string, index: number) => {
            return (
                <div key={index}>
                    <Input type="radio" name="vendorType" placeholder={button} onChange={this.props.onChange} required={false} value={button} errorMessage="Please select one option" />
                </div>
            );
        })

        return (
            <div>
                {radioButtons}
            </div>);

    }

}