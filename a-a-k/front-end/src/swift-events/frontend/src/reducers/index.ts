import { combineReducers } from 'redux';
import errors from './errors';
import formIsSubmited from './formIsSubmitted';
import shouldSubmit from './shouldSubmit'

const rootReducer = combineReducers({
    errors,
    formIsSubmited,
    shouldSubmit
})

export default rootReducer;