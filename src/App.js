   
  import {Log,Web,Sign,Dash,Sidebar,Navbar,} from'./componet';
import {BrowserRouter,Routes,Route} from'react-router-dom';


function App() {
  return (
     
    <BrowserRouter>
    <Routes>
<Route path="/" element ={<Web/>}/>
<Route path="/log in" element={<Log/>}></Route>
<Route path="/Sign up" element={<Sign/>}></Route>
 
<Route path="/Dash" element={<Dash/>}></Route>
 
</Routes>
</BrowserRouter>
     
  );
}

export default App;
