import * as React from 'react';
import Input from './input';
import { FormProps } from '../../types/form';
import { FormReduxProps } from '../../types/redux';
import validateEmail from '../../utils/checkEmail';
import { connect, MapStateToPropsParam } from 'react-redux';
import * as formSumbit from '../../actions/actions';

class Form extends React.Component<FormProps & FormReduxProps, any> {
    submitHandler = (e: any) => {
        e.preventDefault();
        this.props.FormIsSubmited(true);
    }

    checkIdShouldSubmit = () => {
        if ((this.props.shouldSubmit.every((e: any) => { return e.shouldSubmit })) && this.props.formIsSubmited) {
            this.props.submit();
            this.props.FormIsSubmited(false);
        }
    }

    componentWillUpdate() {
        this.checkIdShouldSubmit();
    }
    componentWillUnmount() {
        this.props.clearShouldSubmit();
        this.props.FormIsSubmited(false);

    }

    render() {
        return (
            <div>
                <div>{this.props.title}</div>
                <form onSubmit={this.submitHandler} >
                    {this.props.children}
                </form>
            </div>
        )
    }
}
function mapStateToProps(state: any) {
    return {
        formIsSubmited: state.formIsSubmited,
        shouldSubmit: state.shouldSubmit
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        FormIsSubmited: (isSubmited: boolean) => dispatch(formSumbit.FormIsSubmited(isSubmited)),
        clearShouldSubmit: () => dispatch(formSumbit.clearShouldSubmit())
    }
}

export default connect<any, FormReduxProps, FormProps>(mapStateToProps, mapDispatchToProps)(Form);