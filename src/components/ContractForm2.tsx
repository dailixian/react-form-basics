import React, { useState } from "react";

export default function ContractForm2() {
  const [user, setUser] = useState({ fullName: "", email: "", phone: "" });
  const changeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    console.log(`name is ${name}, value is ${value}`);
    setUser({ ...user, [name]: value });
  };
  const submitHandler = (evt: React.FormEvent) => {
    evt.preventDefault();
    alert("form submission disabled");
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            className="form-control"
            id="fullName"
            name="fullName"
            value={user.fullName}
            onChange={changeHandler}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={user.email}
            onChange={changeHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone number
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={user.phone}
            onChange={changeHandler}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <p>{JSON.stringify(user)}</p>
      </form>
    </>
  );
}
