import { studentList } from './datas/studentList';
import StudentList from './components/studentList';
import './App.css';

function App() {
  return (
    <div className="App">
      <studentList students={studentList} />
    </div>
  );
}

export default App;
