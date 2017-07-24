import * as React from 'react';
import axios from 'axios';
import { RouteComponentProps } from 'react-router-dom';

interface VerifyEmail{
    isVerified: boolean,
    tempToken: string
}


interface Params {
    tempToken: string;
}

class verifyEmail extends React.Component<RouteComponentProps<Params>,  VerifyEmail>{
    constructor(){
        super();
        this.state = {
            isVerified : false,
            tempToken: ''
        }
    }

    async componentDidMount() {
        this.props.match.params.tempToken
        let tempToken = this.props.match.params.tempToken;
        this.setState({tempToken: tempToken});
        let isVerifiedResult = await axios.get(`/api/vprofiles/verifyEmail/${tempToken}`);
        this.setState({isVerified: isVerifiedResult.data});
    }

    render() {
        let verified;
        if(this.state.isVerified){
            verified = <div> verified </div>
        }

        return(
            <div>
                {verified}
            </div>
        )

    }
}

export default verifyEmail;