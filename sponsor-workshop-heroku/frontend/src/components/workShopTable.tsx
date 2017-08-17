import * as React from 'react';
import Navbar from './navbar';
import axios from 'axios';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Iframe from 'react-iframe'
import 'react-bootstrap-table/css/react-bootstrap-table.css';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.js';
import * as checker from './check';
class WorkShopTable extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            list: [],
            changer: {
                iframe: null,
                title: 'Select A Work Shop'
            }
        }
    }
    async componentDidMount() {
        let res = await axios.get('/auth/users/workShopTable');
        this.setState({ list: res.data.workShopTable });
    }
    render() {
        checker.checker();
        const options = {
            noDataText: 'Become a Work Shop Sponsor!',
            onRowClick: (row: any) => {
                this.state.changer.title = row.author + ' ---- ' + row.work_shop_name + ' ---- ' + row.description;
                this.state.changer.iframe = <Iframe url={'https://www.youtube.com/embed/' + row.url + '?rel=0'}
                    height="300px"
                    display="initial"
                    position="relative"
                    allowFullScreen={true}
                />
                this.setState(this.state);
            }
        }
        return (
            <div>
                <Navbar title={this.state.changer.title} />
                <div className="container">
                    <div className="row text-center">
                        <div className="a col-md-6">
                              
                            <BootstrapTable className="b" options={options} dataAlign="center" data={this.state.list} striped={true} hover={true}>
                                <TableHeaderColumn dataAlign="center" isKey={true} dataField="sponsor_name" dataSort={true}>Sponsor</TableHeaderColumn>
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