import * as React from 'react';
import axios from 'axios';
import Navbar from './navbar';
import '../html-css/home.css';
import { React_Bootstrap_Carousel } from 'react-bootstrap-carousel';
import 'react-bootstrap-carousel/dist/bootstrap.min.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import { Input } from '../swift-events';
import { Form } from '../swift-events';
import { Button } from '../swift-events';
import { BrowserRouter, Route, RouteComponentProps, Link } from 'react-router-dom';
import Iframe from 'react-iframe'
import ImageResponsive, { Source } from 'react-image-responsive';
import { LoginFormState } from '../types/form';


class Home extends React.Component<any, LoginFormState> {
    constructor() {
        super();
        this.state = {
            login: {
                email: '',
                password: ''
            }
        }
    }

    changeHandler = (e: any) => {
        let login = Object.assign({}, this.state.login);
        login[e.target.name] = e.target.value;
        this.setState({ login });
    }

    submit = async () => {
        let search = await axios.post('/auth/users/login', this.state.login);
        if (search.data.success) {
            localStorage.removeItem('userId');
            localStorage.setItem('userId',search.data.token);
            this.props.history.push('/kollelList');
        }
    }
    render() {
        return (
            <div>
                <Navbar title="Welcome" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <Iframe url="http://www.youtube.com/embed/OKY4QPBXQas?rel=0&controls=0"
                                height="300px"
                                display="initial"
                                position="relative"
                                allowFullScreen
                            />
                        </div>
                        <div className="col-md-4 text-center">
                            <Form submit={this.submit}>
                                <Input value={this.state.login.email} name="email" placeholder='Email' onChange={this.changeHandler} type='text' errorMessage='Email required' required />
                                <Input value={this.state.login.password} name="password" placeholder='password' onChange={this.changeHandler} type='password' errorMessage='Password required' required />
                                <Button buttonName='log in' className='btn btn-success' />
                            </Form>
                            <hr />
                            <Link to={'/createUserForm'}><Button buttonName='Register new Account' className='btn btn-success' /></Link>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
