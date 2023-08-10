import { Routes, Route, Navigate } from 'react-router-dom'
import StartPg from './StartPg';
import NewOrderPg from './NewOrderPg';
import SingleItemDisplay from '../components/SingleItemDisplay';
import './App.css';

export default function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<StartPg />}/>
        <Route path='/order/new' element={<NewOrderPg />}/>
        {/* <Route path={`/order`/> element={} />*/}
        <Route path={`/:params`} element={<SingleItemDisplay/>}/>
        <Route path='/*' element={<Navigate to='/order/new'/>} />
      </Routes>
    </>
  );
}

