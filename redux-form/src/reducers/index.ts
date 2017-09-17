import { combineReducers } from 'redux';
import errors from './errors';
import formIsSubmited from './formIsSubmitted';
import shouldSubmit from './shouldSubmit';
import moduleIsSubmited from './moduleIsSubmitted';

const rootReducer = combineReducers({
    errors,
    formIsSubmited,
    shouldSubmit,
    moduleIsSubmited
})

export default rootReducer;