import './App.css';
import Toolbar from './Components/Toolbar/Toolbar';
import {Route, Routes} from 'react-router-dom';
import Home from './Containers/Home/Home';
import AboutUs from './Containers/AboutUs/AboutUs';

const App = () => {

  return (
    <>
      <header>
        <Toolbar/>
      </header>
      <main className="container-fluid">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="*" element={(<h1>Not found</h1>)}/>
        </Routes>
      </main>
    </>
  );
};

export default App;
