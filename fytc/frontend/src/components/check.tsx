import axios from 'axios';
import setHeader from '../utils/setHeader';
import * as React from 'react';
import { Redirect } from 'react-router-dom';

async function check() {
    const res = await axios.get('/auth/users/checkLog', setHeader());
    if (res.data.success) return true;
    localStorage.clear();
    return false;
}
async function checker(obj: any = null) {
    let i;
    await check().then((res => {
        if (!res) {
            if (!obj) return;
            obj.state.red = <Redirect to='/' />;
            obj.setState(obj.state);
            i = true;
        }
    })
    );
    return i;
}
export {
    check,
    checker
}

