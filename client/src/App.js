import { Route, Routes } from 'react-router-dom';
import Home from './componants/pages/Home';
import Register from './componants/auth/register';
import Login from './componants/auth/login';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
