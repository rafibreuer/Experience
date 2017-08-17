import * as React from 'react';
import Navbar from './navbar';
import axios from 'axios';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Collapsible from 'react-collapsible';
import { Form } from '../swift-events';
import { RouteComponentProps, Redirect } from 'react-router-dom';
import { Button } from '../swift-events';
import setHeader from '../utils/setHeader';
import '../html-css/kollelList.css';
import NewWorkShop from './newWorkShop';
import * as checker from './check';

class WorkShopList extends React.Component<RouteComponentProps<any>, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            list: [],
            selectedWorkShop: '',
            title: 'Sponsor a Work Shop (Sponsorships are free!)',
            ref: <NewWorkShop clear={this.clear} />,
            red: <span></span>
        }
    }
    async componentWillMount() {
        if (await checker.checker(this)) return;
        let res = await axios.get('/aak/workShops/workShopList', setHeader());
        this.setState({ list: res.data.workShopList });
    }

    changer = (id: any, name: any) => {
        return () => {
            this.state.selectedWorkShop = id;
            this.state.title = name;
            this.setState(this.state);
        }
    }
    submit = async () => {
        if (!this.state.selectedWorkShop) return;
        let addWorkShop = await axios.post('/aak/workShops/workShopSponsor', { work_shop_id: this.state.selectedWorkShop }, setHeader());
        if (addWorkShop.data.success) {
            this.props.history.push('/workShopTable');
        }
    }
    clear = async () => {
        this.state.ref = false;
        await this.setState(this.state);
        this.state.ref = <NewWorkShop clear={this.clear} />;
        this.setState(this.state);
    }
    render() {

        let button;
        if (this.state.selectedWorkShop) {
            button = <Button buttonName="Sponsor" onClick={this.submit} className="btn btn-success" />
        }
        const list = this.state.list.map((e: any, index: any) => {
            const row = <h4 className="a k" >{e.name} ({e.author})</h4>
            const changer = this.changer(e.id, e.name);
            return (
                <div onClick={changer} key={index} >
                    <Collapsible trigger={row}>
                        <div className="well d">{e.description}</div>
                    </Collapsible>
                </div>
            )
        });
        return (

            <div>
                {this.state.red}
                <Navbar title={this.state.title}>
                    {button}
                </Navbar>
                <div className="row text-center">
                    {this.state.ref}
                </div>
                <div className="container text-center">
                    <div className="row text-center">
                        {list}
                    </div>
                </div>
            </div>
        );
    }
    
}
export default WorkShopList;