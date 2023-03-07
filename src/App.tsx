import { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContractForm2 from "./components/ContractForm2";

function App() {
  const [flag, setFlag] = useState(false);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <button onClick={() => setFlag(!flag)} className="btn btn-primary">
              Toggle Form
            </button>
            <p>Class based component</p>
            {flag && <ContactForm />}
          </div>
          <div className="col-sm">
            <p>Function based component</p>
            <ContractForm2></ContractForm2>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
