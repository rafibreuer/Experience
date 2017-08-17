import * as React from 'react';
import { Button } from '../swift-events';
import axios from 'axios';
import Navbar from './navbar';
import setHeader from '../utils/setHeader';
import { EditUserProfile } from '../../../types/users';
import { EditFormState } from '../types/form';
import { Form } from '../swift-events';
import { input, div } from '../utils/tsxEditHelper';
import emailPhoneHelper from '../utils/emailPhoneHelper';
import * as checker from './check';
import { connect } from 'react-redux';

class Profiles extends React.Component<any, any>{
    constructor() {
        super();
        this.state = {
            editState: {
            },
            readState: {
            },
            red: null
        }
    }
    submit = async () => {
        const state = Object.assign({}, this.state);
        for (var p in this.state.readState) {
            if (!state.readState[p]) return;
            if (!emailPhoneHelper(p, state.readState[p])) return;
        }
        this.setState(this.state);
        if (localStorage.getItem('fytcId')) {
            const update = await axios.post('aak/users/updateUserProfile', this.state.readState, setHeader());
            if (update) {
                this.props.history.push('/');
                return;
            }

        }
    }
    onClick = (e: any) => {
        const state = Object.assign({}, this.state);
        if (!state.readState[e.target.id]) return;
        if (!emailPhoneHelper(e.target.id, state.readState[e.target.id])) return;
        if (state.editState[e.target.id]) {
            state.editState[e.target.id] = false;
        } else {
            state.editState[e.target.id] = true;
        }
        this.setState(state);
    }
    onChange = (e: any) => {
        const state = Object.assign({}, this.state);
        state.editState['edit'] = true;
        state.readState[e.target.name] = e.target.value;
        this.setState(state);
    }
    user = async () => {
        const profile = await axios.get('aak/users/getUserProfile', setHeader());
        const data: EditUserProfile = profile.data.success;
        const state = Object.assign({}, this.state);
        state.readState = data;
        this.setState(state);
    }
    custom = async () => {
    }
    async componentWillMount() {
        if (await checker.checker(this)) return;
        this.user();
        return;
    }
    render() {
        let button;
        if (this.state.editState.edit) {
            button = <Button className="btn btn-success" buttonName="Submit Change" onClick={this.submit} />;
        }
        const listArray = [];
        for (var p in this.state.readState) {
            if (this.state.editState[p]) {
                listArray.push(input(this, p));
            } else {
                listArray.push(div(this, p));
            }
        }
        return (
            <div>
                <Navbar title={'Edit Profile'}>
                    {button}
                </Navbar>
                <div className="container">

                    <div className="row col-md-6 col-md-offset-3 text-center">
                        {this.state.red}
                        <Form submit={this.custom}>
                            <h4></h4>
                            <div>{listArray}</div>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Profiles;