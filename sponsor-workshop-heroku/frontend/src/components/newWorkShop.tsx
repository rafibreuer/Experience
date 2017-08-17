import * as React from 'react';
import Navbar from './navbar';
import axios from 'axios';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Collapsible from 'react-collapsible';
import { Form } from '../swift-events';
import { RouteComponentProps } from 'react-router-dom';
import { Input } from '../swift-events';
import { Button } from '../swift-events';
import setHeader from '../utils/setHeader';
import '../html-css/kollelList.css';
import { connect, MapStateToPropsParam } from 'react-redux';
import { Link } from 'react-router-dom';
import * as formSumbit from '../swift-events/frontend/src/actions/actions';

class NewWorkShop extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            form: {
                name: '',
                description: '',
                url: '',
                author: ''
            },
            message: '',
            errorMessage: ''
        }
    }
    submit = async () => {
        let res = await axios.post('/aak/workShops/addWorkShop', this.state.form, setHeader());
        if (res) {
            this.state.message = "Thank You For Your Submission";
            this.props.ModuleIsSubmited(true);
            this.setState(this.state);
        }

    }
    onChange = (e: any) => {
        console.log(this.state.form[e.target.name]);
        this.state.form[e.target.name] = e.target.value;
        this.setState(this.state);
    }
    render() {
        let button;
        if (!this.props.moduleIsSubmited) button = <Button buttonName="Submit Request" className="btn btn-success" />;
        return (
            <div>
                <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Suggest A Work Shop</button>
                <div id="myModal" className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button onClick={this.props.clear} type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">Enter Work Shop Information</h4>
                            </div>
                            <div id="myModal" className="modal-body">
                                <Form submit={this.submit}>
                                    {this.state.errorMessage}
                                    <Input value={this.state.form.url} placeholder='url' name='url' required={true} type='text' onChange={this.onChange} errorMessage="Url Is Required" />
                                    <Input value={this.state.form.name} placeholder='Work Shop Title' name='name' required={false} type='text' onChange={this.onChange} errorMessage="" />
                                    <Input value={this.state.form.description} placeholder='Description' name='description' required={false} type='text' onChange={this.onChange} errorMessage="" />
                                    <Input value={this.state.form.author} placeholder='Author' name='author' required={false} type='text' onChange={this.onChange} errorMessage="" />
                                    {button}
                                </Form>
                            </div>
                            <div className="modal-footer">
                                {this.state.message}
                                <button onClick={this.props.clear} type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state: any) {
    return {
        moduleIsSubmited: state.moduleIsSubmited
    }
}
function mapDispatchToProps(dispatch: any) {
    return {
        ModuleIsSubmited: (isSubmited: boolean) => dispatch(formSumbit.ModuleIsSubmited(isSubmited))
    }
}
export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(NewWorkShop);