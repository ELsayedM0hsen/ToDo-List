import { Route, Routes } from 'react-router-dom';
import Home from './componants/pages/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
