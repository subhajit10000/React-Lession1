import './App.css';
import "tailwindcss";
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Content from './Content.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

function App() {
  return (
    <div>
      <Navbar/>
      <Content/>
      <Footer/>
    </div>
    
  )
}

export default App;
