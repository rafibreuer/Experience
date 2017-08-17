// import * as React from 'react';
// import Input from './input';
// import FormLogo from './formLogo';
// import { FormGroupProps } from '../../types/form';
// import { FormGroupReduxProps, ReduxShouldSubmitObj } from '../../types/redux';
// import validateEmail from '../../utils/checkEmail';
// import { connect, MapStateToPropsParam } from 'react-redux';
// import * as errorActions from '../../actions/actions';

// let count = 0;

// class FormGroup extends React.Component<FormGroupProps & FormGroupReduxProps, any>{
    
// //     submit = () => {
// //         let hasError = false;
// //         if (this.props.children.length) {
// //             this.props.children.forEach((child: any) => {
// //                 hasError = this.validateInput(child, hasError);
// //             })
// //         } else {
// //             hasError = this.validateInput(this.props.children, hasError);
// //         }

// //         console.log(hasError);
// //         if (!hasError) {
// //             // this.props.submit();
// //             this.props.changeShouldSubmit({ name: this.props.name, shouldSubmit: true })
// //         }
// //     }
// //     validateInput = (input: any, hasError: boolean) => {
// //         if (input.props.required && !input.props.value) {
// //             hasError = true;
// //             let errorObj = {
// //                 name: input.props.name,
// //                 message: input.props.errorMessage
// //             }
// //             this.props.addErrorsSuccess(errorObj);
// //         }
// //         if (input.props.value && input.props.name === 'email' && !validateEmail(input.props.value)) {
// //             hasError = true;
// //         }
// //         return hasError;
// //     }
// //     checkIfSubmitted = () => {
// //         this.props.FormIsSubmited(false);
// //         if (this.props.formIsSubmited) {
// //             this.submit();
// //         } else {
// //         }
// //     }

// //     componentDidUpdate() {
// //         this.checkIfSubmitted()
// //     }

// //     componentWillMount() {
// //         console.log();
// //         this.props.addShouldSubmit({ name: this.props.name, shouldSubmit: false });
// //     }

// //     render() {


// //         return (
// //             <div>
// //                 {this.props.children}
// //             </div>
// //         )
// //     }
// // }

// // function mapStateToProps(state: any) {
// //     return {
// //         errors: state.errors,
// //         formIsSubmited: state.formIsSubmited
// //     }
// // }

// // function mapDispatchToProps(dispatch: any) {
// //     return {
// //         FormIsSubmited: (isSubmited: boolean) => dispatch(errorActions.FormIsSubmited(isSubmited)),
// //         addErrorsSuccess: (error: any) => dispatch(errorActions.addErrorsSuccess(error)),
// //         addShouldSubmit: (reduxShouldSubmitObj: ReduxShouldSubmitObj) => dispatch(errorActions.addShouldSubmit(reduxShouldSubmitObj)),
// //         changeShouldSubmit: (reduxShouldSubmitObj: ReduxShouldSubmitObj) => dispatch(errorActions.changeShouldSubmit(reduxShouldSubmitObj))
// //     }
// }

// export default connect<any, FormGroupReduxProps, FormGroupProps>(mapStateToProps, mapDispatchToProps)(FormGroup);