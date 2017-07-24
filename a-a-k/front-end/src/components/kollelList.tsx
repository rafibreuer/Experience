import * as React from 'react';
import Navbar from './navbar';
import axios from 'axios';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Collapsible from 'react-collapsible';
import { Form } from '../swift-events';
import { RouteComponentProps } from 'react-router-dom';
import { Button } from '../swift-events';
import setHeader from '../utils/setHeader'
import '../html-css/kollelList.css';

class KollelList extends React.Component<RouteComponentProps<any>, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            list: [],
            selectedKollel: '',
            title: 'Choose a Kollel'
        }
    }
    async componentDidMount() {
        let res = await axios.get('/aak/kollels/KollelList',setHeader());
        this.setState({ list: res.data.kollels });
        console.log(this.state.shulId);
    }
    changer = (id: any, name: any) => {
        return () => {
            this.state.selectedKollel = id;
            this.state.title = name;
            this.setState(this.state);
        }
    }
    submit = async () => {
        if (!this.state.selectedKollel) return;
        let addPartnership = await axios.post('/aak/kollels/kollelShul', { kollel_id: this.state.selectedKollel }, setHeader());
        if (addPartnership.data.success) {
            this.props.history.push('/shulList');
        }
    }
    render() {
        let button;
        if (this.state.selectedKollel) {
            button = <Button buttonName="Sign On" onClick={this.submit} className="btn btn-success" />
        }
        const list = this.state.list.map((e: any, index: any) => {
            const row = <h4 className="a k" >{e.name}</h4>
            const changer = this.changer(e.id, e.name);
            return (
                <div onClick={changer} key={index} >
                    <Collapsible trigger={row}>
                        <p className="well">{e.location}<br />{e.about}</p>
                    </Collapsible>
                </div>
            )
        });
        return (
            <div>

                <Navbar title={this.state.title}>
                    {button}
                </Navbar>
                <div className="container text-center">
                    <div className="row text-center">
                        {list}
                    </div>
                </div>

            </div>
        );
    }
}
export default KollelList;