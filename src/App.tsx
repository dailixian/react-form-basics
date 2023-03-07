import ContactForm from "./components/ContactForm";

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
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
