import './App.css';
import AddCardPage from './pages/addCardPage';
import { Routes, Route } from 'react-router-dom';
import EditCardPage from './pages/editCardPage';
import CardsPage from './pages/cardsPage';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<CardsPage />} />
          <Route path='/addCard' element={<AddCardPage />} />
          <Route path='/editCard/:id' element={<EditCardPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
