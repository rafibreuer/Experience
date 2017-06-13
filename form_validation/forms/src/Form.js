import React from 'react';

export default function Form(props) {
  return (
    <div>
      <input
        onChange={props.handler}
        onBlur={props.validate}
        value={props.person.firstName}
        type="text"
        name="firstName"
        className={props.class['firstName']}
        placeholder="First Name"
      />
      <br />
      <input
        onChange={props.handler}
        onBlur={props.validate}
        value={props.person.lastName}
        type="text"
        name="lastName"
        className={props.class['lastName']}
        placeholder="Last Name"
      />
      <br />
      <input
        onBlur={props.validate}
        onChange={props.handler}
        value={props.person.email}
        type="email"
        name="email"
        className={props.class['email']}
        placeholder="email"
      />
      <br />
      <button onClick={props.save}>Save</button>
    </div>
  );
}
