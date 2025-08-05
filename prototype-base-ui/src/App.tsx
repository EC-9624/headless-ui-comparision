import DialogComponent from "./DialogComponent"

function App() {
  return (
    <>
      <div style={{ isolation: "isolate" }}>
        <h1>Base UI</h1>
        <DialogComponent />
      </div>
    </>
  );
}

export default App;
