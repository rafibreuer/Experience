import * as React from 'react';
import Navbar from './navbar';
import axios from 'axios';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Iframe from 'react-iframe'
import 'react-bootstrap-table/css/react-bootstrap-table.css';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.js';
import * as checker from './check';
import NewWorkShop from './newWorkShop';
import setHeader from '../utils/setHeader';
import { Button } from '../swift-events';
class WorkShopTable extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            list: [],
            red: <span></span>,
            changer: {
                iframe: null,
                title: '',
                ref: <NewWorkShop clear={this.clear} />

            }
        }
    }
    async componentWillMount() {
        if (await checker.checker(this)) return;
        let res = await axios.get('/aak/workshops/workShopTable', setHeader());
        this.setState({ list: res.data.workShopTable, changer: { title: 'Select Workshop', iframe: null, ref: <NewWorkShop clear={this.clear} /> } });
    }
    clear = async () => {
        this.state.changer.ref = false;
        await this.setState(this.state);
        await this.componentWillMount();
        this.setState(this.state);
    }
    delete = async (e: any) => {
        let r = await axios.post('/aak/workshops/deleteWorkshop', { id: e.target.id }, setHeader());
        if (r) await this.setState({ list: [] });
        this.componentWillMount();
    }
    render() {
        checker.checker();
        const options = {
            noDataText: 'Become a Work Shop Sponsor!',
            onRowClick: (row: any) => {
                this.state.changer.title = row.author + ' ---- ' + row.work_shop_name + ' ---- ' + row.description;
                this.state.changer.iframe = <div><Iframe url={'https://www.youtube.com/embed/' + row.url + '?rel=0'}
                    height="300px"
                    display="initial"
                    position="relative"
                    allowFullScreen={true}
                />
                    <h3><a href={row.backup_url}>{row.backup_url}</a></h3><button id={row.id} className="btn btn-warning" onClick={this.delete}>Delete</button>
                </div>
                this.setState(this.state);
            }
        }
        return (
            <div>
                {this.state.red}
                <Navbar title={this.state.changer.title} />

                <div className="container">

                    <div className="row text-center">
                        <h5>{this.state.changer.ref}</h5>
                        <div className="a col-md-6">
                            <BootstrapTable className="b" options={options} dataAlign="center" data={this.state.list} striped={true} hover={true}>
                                <TableHeaderColumn dataAlign="center" isKey={true} dataField="sponsor_name" dataSort={true}>User</TableHeaderColumn>
                                <TableHeaderColumn dataAlign="center" dataField="work_shop_name" dataSort={true}>Work Shop</TableHeaderColumn>
                                <TableHeaderColumn dataAlign="center" dataField="author" dataSort={true}>By</TableHeaderColumn>
                            </BootstrapTable>
                        </div>
                        <div className="col-md-6">
                            <h5>
                                {this.state.changer.iframe}
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default WorkShopTable;