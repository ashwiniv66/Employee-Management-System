import './App.css';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Login from './Components/Login';
import Main from './Components/Main';
import Department from './Components/Department';
import Employee from './Components/Employee';
import Status from './Components/Status';
import Header from './Components/Header';
//import Particles from "react-particles-js";
import Forms from './Components/Forms';


function App() {
  return (
    <div>
      <>
      <Router>
        {/* <Particles
        params={
          {
            particles:{
              number:{
                value:30,
                density:{
                  enable:true,
                  value_area:900
                }
              }
            }
          }
        }
        /> */}
      <Main />
      <Forms />
      <Header />
     
      <Route exact path="/login" component={Login}/>
      <Route exact path="/Employee" component={Employee}/>
      <Route exact path="/Department" component={Department}/>
      <Route exact path="/Status" component={Status}/>
      </Router>
      </>
    </div>
  );
}

export default App;
