import React, { Component } from 'react';
import Form from './Form';
import Ppl from './Ppl';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        firstName: '',
        lastName: '',
        email: ''
      },
      ppl: [],
      cssClass: {
        firstName: '',
        lastName: '',
        email: ''
      }
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.savePerson = this.savePerson.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validationCheck = this.validationCheck.bind(this);
    this.errorRequired = this.errorRequired.bind(this);
    this.buttonCheck = this.buttonCheck.bind(this);
    this.classChanger = this.classChanger.bind(this);
  }
  changeHandler(e) {
    let person = this.state.person;
    this.setState({ person });
    person[e.target.name] = e.target.value;
    this.setState({ person });
  }
  buttonCheck(person) {
    if (person['email'] && !this.validateEmail(person['email'])) {
      return true;
    }
    for (var key in person) {
      if (!person[key]) {
        if (key === 'firstName' || key === 'lastName') {
          this.errorRequired(key);
          return true;
        }
      }
    }
  }
  classChanger(s, v) {
    let cssClass = this.state.cssClass;
    cssClass[s] = v;
    this.setState({ cssClass });
  }
  errorRequired(s) {
    this.classChanger(s, 'error');
  }
  validationCheck(e) {
    this.state.error = null;
    let name = e.target.name;
    this.classChanger(name, '');
    let person = this.state.person;
    if (name !== 'email') {
      if (!person[name]) {
        this.errorRequired(name);
      }
    } else if (person[name] && !this.validateEmail(person[name])) {
      this.errorRequired(name);
    }
  }
  validateEmail(e) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e);
  }
  savePerson() {
    let foo = this.state.ppl;
    let newPerson = Object.assign({}, this.state.person);
    if (this.buttonCheck(newPerson)) {
      return;
    } else {
      foo.push(newPerson);
      this.setState({ foo });
    }
  }

  render() {
    return (
      <div className="App">
        <Form
          save={this.savePerson}
          handler={this.changeHandler}
          validate={this.validationCheck}
          person={this.state.person}
          class={this.state.cssClass}
        />
        <br />
        <Ppl ppl={this.state.ppl} />
      </div>
    );
  }
}

export default App;
