import * as React from 'react';
import axios from 'axios';
import Navbar from './navbar';
import '../html-css/home.css';
//import { React_Bootstrap_Carousel } from 'react-bootstrap-carousel';
import 'react-bootstrap-carousel/dist/bootstrap.min.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import { Input } from '../swift-events';
import { Form } from '../swift-events';
import { Button } from '../swift-events';
import { BrowserRouter, Route, RouteComponentProps, Link } from 'react-router-dom';
import Iframe from 'react-iframe'
import ImageResponsive, { Source } from 'react-image-responsive';
import { LoginFormState } from '../types/form';
import setHeader from '../utils/setHeader';


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
    demo = async () => {
        this.state.login.password='demodemo';
        this.state.login.email='demo@demo.com';
        await this.setState(this.state);
        this.submit();
    }
    componentShouldMount() {
        return false;
    }
    submit = async () => {
        let search = await axios.post('/auth/users/login', this.state.login);
        if (search.data.success) {
            localStorage.removeItem('userId');
            localStorage.setItem('userId', search.data.token);
            this.props.history.push('/workShopList');
        }
    }
    render() {
        return (
            <div>
                <Navbar title="Welcome" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <Iframe url="https://www.youtube.com/embed/cVC3DQvAAIA?rel=0"
                                height="300px"
                                display="initial"
                                position="relative"
                                allowFullScreen={true}
                            />
                        </div>
                        <div className="col-md-4 text-center">
                            <Form submit={this.submit}>
                                <Input value={this.state.login.email} name="email" placeholder='Email' onChange={this.changeHandler} type='text' errorMessage='Email required' required />
                                <Input value={this.state.login.password} name="password" placeholder='password' onChange={this.changeHandler} type='password' errorMessage='Password required' required />
                                <Button buttonName='Login' className='btn btn-success' />
                            </Form>
                            <hr />
                            <Link to={'/createUserForm'}><Button buttonName='Become A Sponsor' className='btn btn-success' /></Link>
                            <Button buttonName='Demo Login' className='btn btn-primary' onClick={this.demo} />
                            <h3><a href="https://rafibreuer.com/fytc/"><Button buttonName='Favorite You Tube Collection' className='btn btn-success' /></a></h3>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
