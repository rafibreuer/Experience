import * as React from 'react';
import { InputProps, InputState } from '../../types/form';
import { InputReduxProps, ReduxShouldSubmitObj } from '../../types/redux';
import validateEmail from '../../utils/checkEmail';
import { connect } from 'react-redux';
import * as errorsActions from '../../actions/actions'


class Input extends React.Component<InputProps & InputReduxProps, InputState>{
    constructor() {
        super();
        this.state = {
            hasError: false,
            errorMessage: ''
        }
    }

    blurHandler = () => {
        if(this.props.custom){
            this.props.custom();
        }
        this.validateInput();
    }

    changeHandler = (e: any) => {
        this.props.onChange(e);
        let state = Object.assign(this.state);
        state.hasError = false;
        this.setState(state);
    }
    submit = () => {
        this.validateInput();
        if (!this.state.hasError) {
            this.props.changeShouldSubmit({ name: this.props.name, shouldSubmit: true })
        }
    }
    validateInput = () => {
        let state = Object.assign(this.state);
        let val = this.props.value;
        if (!val && this.props.required) {
            state.hasError = true;
            state.errorMessage = this.props.errorMessage;
        } else {
            state.hasError = false;
        }
        if (val && this.props.name === 'email' && !validateEmail(val)) {
            state.hasError = true;
            state.errorMessage = 'Not valid email';
        }
        this.setState(state);
    }
    checkIfSubmitted = () => {
        if (this.props.formIsSubmited) {
            this.props.FormIsSubmited(false);
            this.submit();
        }
    }

    componentDidUpdate() {
        this.checkIfSubmitted()
    }

    componentWillMount() {
        if (this.props.required) {
            this.props.addShouldSubmit({ name: this.props.name, shouldSubmit: false });
        }
    }

    render() {
        let className='';
        let error = <span><br /></span>
        if (this.state.hasError) {
            error = <span>{this.state.errorMessage}<br /></span>
            className='error';
        }

        let required;
        if (this.props.required) {
            required = <span>*</span>
        }
        let checkbox;
        if (this.props.type === 'checkbox' || this.props.type === 'radio') {
            checkbox = ' ' + this.props.placeholder
        }

        return (
            <div>
                <label>
                    {error}
                    {required}
                    <input className={className}
                        type={this.props.type}
                        name={this.props.name}
                        placeholder={this.props.placeholder}
                        onChange={this.changeHandler}
                        onBlur={this.blurHandler} />
                    {checkbox}
                </label>
            </div>);

    }
}
function mapStateToProps(state: any) {
    return {
        errors: state.errors,
        formIsSubmited: state.formIsSubmited
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        removeErrorSuccess: (error: any) => dispatch(errorsActions.removeErrorSuccess(error)),
        FormIsSubmited: (isSubmited: boolean) => dispatch(errorsActions.FormIsSubmited(isSubmited)),
        addShouldSubmit: (reduxShouldSubmitObj: ReduxShouldSubmitObj) => dispatch(errorsActions.addShouldSubmit(reduxShouldSubmitObj)),
        changeShouldSubmit: (reduxShouldSubmitObj: ReduxShouldSubmitObj) => dispatch(errorsActions.changeShouldSubmit(reduxShouldSubmitObj))
    }
}
export default connect<any, any, InputProps>(mapStateToProps, mapDispatchToProps, )(Input);
