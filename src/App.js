import react,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome' 
import Hello from './components/hello'
import Messege from './components/messege'
import Counter from './components/counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import State from './components/State';
import Effect from './components/Effect'
import Onchange from './components/Onchange'
import Onsubmit from './components/Onsubmit';
import Mapfunction from './components/Mapfunction';
import Filterfunction from './components/Filterfunction';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import {Calculator} from './components/Calculator';
import { Fetch } from './components/Fetch';
import {Axios} from './components/Axios'
import {Srikanth} from './components/Srikanth'
import {Navbar} from './components/Navbar'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import {Home} from './components/Home'
import {About} from './components/About'
import {Service} from './components/Service'
import {Task} from './components/Task'
// import Redux from './components/redux/Redux'
import iceCreamReducer from './components/iceCream/iceCreamReducer';
import Lifecycle from './components/Lifecycle';
import {Filter} from './components/Filter'
import {Useref} from './components/Useref';
import {Gallary} from './Gallarey/Gallary'
import { Todo } from './Todolist/Todo';
import { Weather } from './weather/Weather';

class App extends Component {
  render(){
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Route path="/" exact component={Home} />
      <Route path="/Weather" exact component={Weather} />
      <Route path="/Todo" exact component={Todo} />
      <Route path="/Gallary" exact component={Gallary} />
      </BrowserRouter> 

      {/* <Weather/> */}
      {/* <Todo/>
      <Gallary/> */}
      {/* <Useref/> */}
      {/* <Filter/> */}
      {/* <Lifecycle/> */}
      {/* <iceCreamRed/> */}
      {/* <Redux/> */}
      {/* <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
      
        <Route path="/Service" exact component={Service}/>
        <Route path="/About" exact component={About} />
        <Route path="/Service/:name" exact component={Service} /> 
        <Route path="/Task" exact component={Task}/>
       </Switch> 
       </BrowserRouter>   */}
      
      {/* <Srikanth/> */}
       {/* <Axios/> */}
      {/* <Fetch/> */}
      {/* <Calculator/> */}
       {/* <Signup/>  */}
      {/* <Login/> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}
       {/* <State/>  */}
      {/* <Effect/> */}
      {/* <Onchange/> */}
     {/* <Onsubmit/> */}
     {/* <Mapfunction/> */}
     {/* <Filterfunction/> */}
      {/* <Counter/> */}
    {/* <Messege/> */}
     {/* <Greet name="leo" fullname="srikanth"/>
     <p>He is good person</p>
     <Greet name="deo" fullname="saikumar"/>
     <button>Submit</button>
     <Greet name="neo" fullname="rakesh"/>
      <Welcome  name="leo" fullname="srikanth"/>
      <Welcome  name="deo" fullname="srikanth"/>
      <Welcome  name="neo" fullname="srikanth"/>
    {/* <Hello/> */}
    </div>
  );
}
}

export default App;
