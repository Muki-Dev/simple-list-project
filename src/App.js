import { students } from './datas/students';
import StudentList from './components/StudentList'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Student List</h1>
      <StudentList students={students} />
    </div>
  );
}

export default App;
