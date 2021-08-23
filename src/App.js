import './App.css';
import CandidateForm from './components/Form/CandidateForm';

const App = (props) => {
  return (
    <section className="app-wrapper">
      <div className="main-title">Анкета соискателя</div>
      <CandidateForm />
    </section>
  )
}

export default App;
