import './App.css';
import CandidateForm from './components/Form/CandidateForm';

const App = (props) => {
  let onSubmit = () => {
    console.log(111)
  }
  return (
    <section className="app-wrapper">
      <div className="main-title">Анкета соискателя</div>
      <CandidateForm onSubmit={onSubmit}/>
    </section>
  )
}

export default App;
