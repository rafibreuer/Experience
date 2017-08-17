import * as React from 'react';
import Form from '../common/formComponents/form';
import axios from 'axios';

import RadioButtonInput from '../common/formComponents/radioButtonInput';
import { ServiceTypeForm } from '../types/form';
class vendorSignUpServiceSelector extends React.Component<any, any>{
    constructor() {
        super();
        this.state = {
            serviceTypeForm: {
                serviceTypeArray: ["Hall", "Florist", "Musician", "Photographer"],
                selectedServiceType: 'Hall'
            }

        }
    }


    changeHandler = (e: any) => {
        let selected = Object.assign({}, this.state.serviceTypeForm);
        selected.selectedServiceType = e.target.value;
        this.setState({ selected });
    }

    submit = () => {
        console.log('no error');
    }

    render() {

        return (
            <div>
                <Form submit={this.submit}>
                    <RadioButtonInput onChange={this.changeHandler} radioButtonArray={this.state.serviceTypeForm.serviceTypeArray} required />
                </Form>
            </div>
        )

    }
}

export default vendorSignUpServiceSelector;