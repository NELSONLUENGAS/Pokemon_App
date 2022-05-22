import './App.css';
import { Routes, Route} from 'react-router-dom';
import Form from './components/Form/Form';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import Filters from './components/Filters/Filters';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/create/pokemon' element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
