import {Link, useNavigate} from 'react-router-dom';


const Home = () => {
  const Navigation = useNavigate();
  return (
    <div>
      Home
      <button onClick={() => Navigation('/about-us')}>Got to about us</button>
      <Link to="/about-us">About us</Link>
    </div>
  );
};

export default Home;