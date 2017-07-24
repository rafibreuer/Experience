import * as React from 'react';
import Navbar from './navbar';
import axios from 'axios';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/css/react-bootstrap-table.css';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.js';
class ShulList extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            list: []
        }
    }
    async componentWillMount() {
        let res = await axios.get('/auth/users/getAllShuls');
        this.setState({ list: res.data.shuls });
    }
    render() {
        const options = {
            noDataText: 'Be the first Shul to partner with a kollel!'
        }
        return (
            <div>
                <Navbar title="Shuls that partnered" />
                <div className="container">
                    <div className="row text-center">
                        <div className="a">
                            <BootstrapTable options={options} dataAlign="center" data={this.state.list} striped={true} hover={true}>
                                <TableHeaderColumn dataAlign="center" isKey={true} dataField="shul_name" dataSort={true}>Shul Name</TableHeaderColumn>
                                <TableHeaderColumn dataAlign="center" dataField="shul_location" dataSort={true}>Shul Location</TableHeaderColumn>
                                <TableHeaderColumn dataAlign="center" dataField="kollel_name" dataSort={true}>Kollel Name</TableHeaderColumn>
                                <TableHeaderColumn dataAlign="center" dataField="kollel_location" dataSort={true}>Kollel Location</TableHeaderColumn>
                            </BootstrapTable>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ShulList;