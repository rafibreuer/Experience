import * as React from 'react';
import { RouteComponentProps, Redirect } from 'react-router-dom';
import axios from 'axios';

interface Params {
    token: string;
}

interface StateInterface {
    isVerified: boolean;
}


export default class Verify extends React.Component<RouteComponentProps<Params>, StateInterface> {
    constructor() {
        super();
        this.state = {
            isVerified: false
        }
    }

    async componentDidMount() {
        let token = this.props.match.params.token;
        let result = await axios.get(`/api/users/verify/${token}`);
        if (result.data.match) {
            this.setState({ isVerified: true });
        }
    }

    render() {
        let renderThis;
        if (this.state.isVerified) {
            renderThis = <Redirect to={'/'} />
        }
        return (

            <div>
                {renderThis}
            </div>
        );
    }
}