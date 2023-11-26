import './App.css';
import Toolbar from './Components/Toolbar/Toolbar';
import {Route, Routes} from 'react-router-dom';
import Home from './Containers/Home/Home';
import AboutUs from './Containers/AboutUs/AboutUs';
import Catalog from './Containers/Catalog/Catalog';
import SocialResponsibility from './Containers/SocialResponsibility/SocialResponsibility';
import Contacts from './Containers/Contacts/Contacts';

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
          <Route path="/catalog" element={<Catalog/>}/>
          <Route path="/social-responsibility" element={<SocialResponsibility/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="*" element={(<h1>Not found</h1>)}/>
        </Routes>
      </main>
    </>
  );
};

export default App;
