import './App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
function App() {
  return (
     <>
      <Header/>
      {/* <Body/> */}
      <Outlet/>
      <Footer/>
     </>
  );
}

export default App;
