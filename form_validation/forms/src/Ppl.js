import React from 'react';

export default class Ppl extends React.Component {
    componentWillReceiveProps(props) {
        console.log('in props');
    }
    createRow(person, index) {
        return (
            <li key={index}>{person.firstName} {person.lastName}</li>
        )
    }
    render() {
        return (
            <ul>
                {this.props.ppl.map((p, i) => this.createRow(p, i))}
            </ul>
        )
    }
} 