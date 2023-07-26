// import logo from './logo.svg';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import AddMemberForm from './components/AddMemberForm';
import './components/index.css';
import Navbar from './components/Navbar';
import SlidingImages from './components/SlidingImages';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListOfMembers from './components/ListOfMembers';
import AddTodaysData from './components/AddTodaysData';
import Payments from './components/Payments';


function App() {
  return (
    <div className="p-1 bg-info-subtle border border-dark-subtle text-dark">
      <Router>
        <Navbar />

        <div className='container'>
          <Routes>
            <Route path="/" element={<SlidingImages />} />
            <Route path="/addmember" element={<AddMemberForm />} />
            <Route path="/listofmembers" element={<ListOfMembers />} />
            <Route path="/addtodays" element={<AddTodaysData />} />
            <Route path="/payments" element={<Payments />} />

          </Routes>
          {/* <img src={pic1} className="d-block " alt="..." /> */}
          
        </div>
      </Router>

    </div>
  );
}

export default App;
