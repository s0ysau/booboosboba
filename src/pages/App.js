import './App.css';
import { Routes, Route } from 'react-router-dom'
import StartPg from './StartPg';
import SelectionPg from './SelectionPg';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<StartPg />}/>
        <Route path='/order' element={<SelectionPg />}/>
      </Routes>
    </>
  );
}

