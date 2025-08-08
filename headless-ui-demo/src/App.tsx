import BaseUIDialog from './components/BaseUIDialog'
import HeadlessUIDialog from './components/HeadlessUIDialog'
import RadixDialog from './components/RadixDialog'
import ReactAriaDialog from './components/ReactAriaDialog'
import PlainReactDialog from './components/PlainReactDialog'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Headless UI Library Comparison</h1>
        <p>
          Comparing dialog implementations across different headless UI libraries.
          Each dialog has the same functionality but uses a different library.
        </p>
      </header>

      <main className="comparison-grid">
        <section className="library-section">
          <h2>Base UI</h2>
          <p>MUI's headless component library</p>
          <BaseUIDialog />
        </section>

        <section className="library-section">
          <h2>Headless UI</h2>
          <p>Tailwind's headless component library</p>
          <HeadlessUIDialog />
        </section>

        <section className="library-section">
          <h2>Radix UI</h2>
          <p>Low-level UI primitives and components</p>
          <RadixDialog />
        </section>

        <section className="library-section">
          <h2>React Aria</h2>
          <p>Adobe's accessible React components</p>
          <ReactAriaDialog />
        </section>

        <section className="library-section">
          <h2>Plain React</h2>
          <p>React api's no components </p>
          <PlainReactDialog />
        </section>
      </main>

      <footer className="app-footer">
        <p>
          All dialogs implement the same signup form with first name and last name fields.
          Check the console to see form submission data.
        </p>
      </footer>
    </div>
  )
}

export default App
