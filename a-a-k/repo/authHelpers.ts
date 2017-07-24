import * as bcrypt from 'bcryptjs';
import * as crypto from 'crypto';


function hashPassword(password: string) {
    return bcrypt.hash(password, 10);
}

function getToken() {
    return crypto.randomBytes(16).toString('hex');
}
function comparePassword(storedPassowrd: string, enteredPassword: string) {
    return bcrypt.compare(enteredPassword, storedPassowrd);
}

export {
    hashPassword,
    getToken,
    comparePassword
}