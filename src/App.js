import './App.css';
import Form from './components/Form/Form';

const App = (props) => {
  return (
    <section className="app-wrapper">
      <div className="main-title">Анкета соискателя</div>
      <Form />
    </section>
  )
}

export default App;
