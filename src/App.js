import Header from './components/Header'
import Task from './components/Task'

import './App.css'

const tasklist = [
  'My first task',
  'My second task',
  'My third task',
  'My fourth task',
  'My fiveth task'
]

function App() {
  return (
    <div className="App">
      <Header />
      <Task />
      <Task />
      <Task />
      <Task />
    </div>
  );
}

export default App;
