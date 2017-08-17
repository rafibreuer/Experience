import validateEmail from './checkEmail';
import validatePhone from './checkPhone';

export default function emailPhoneHelper(type:string, value:any) {
    if (type === 'phone') {
        if (!validatePhone(value)) return false;
    }
    if (type === 'email') {
        if (!validateEmail(value)) return false;
    }
    return true;
}
