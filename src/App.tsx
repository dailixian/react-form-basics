import ContactForm from "./components/ContactForm";
import ContractForm2 from "./components/ContractForm2";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <p>Class based component</p>
            <ContactForm></ContactForm>
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
