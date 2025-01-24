import { students } from './datas/students';
import StudentList from './components/StudentList'
import './App.css';

function App() {
  return (
    <div className="App">
      <StudentList students={students} />
    </div>
  );
}

export default App;
