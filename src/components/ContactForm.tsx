import { Component } from "react";

type ContactFormPropsType = {};

type ContactFormStateType = {
  fullName?: string;
  email?: string;
  phone?: string;
};

export class ContactForm extends Component<
  ContactFormPropsType,
  ContactFormStateType
> {
  constructor(props: ContactFormPropsType) {
    super(props);
    this.changeHandler.bind(this);
  }
  state = { fullName: "lixian", email: "lixiandai@gmail.com", phone: "323" };
  submitHandler = (evt: React.FormEvent) => {
    evt.preventDefault();
    alert("form submission disabled");
  };
  changeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    console.log(`name is ${name}, value is ${value}`);
    this.setState({ [name]: value });
  };

  componentDidMount() {
    console.log("did mount");
  };

  componentWillUnmount() {
    console.log("will unmount");
  };

  shouldComponentUpdate() {
    return true;
  }

  componentDidUpdate(): void {
  }

  render() {
    return (
      <>
        <form onSubmit={this.submitHandler}>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <input
              className="form-control"
              id="fullName"
              name="fullName"
              value={this.state.fullName}
              onChange={this.changeHandler}
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
              value={this.state.email}
              onChange={this.changeHandler}
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
              value={this.state.phone}
              onChange={this.changeHandler}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <p>{JSON.stringify(this.state)}</p>
        </form>
      </>
    );
  }
}

export default ContactForm;
