// import Typical from "react-typical";

import { Route,Routes,BrowserRouter } from 'react-router-dom';
import  {FormInput} from "./components/FormInput";
import  {Edit } from "./components/Edit";
import  {Router}  from "./components/Router";
import  {Home}  from "./components/Home";
// import { ParameterContextProvider} from './components/ParameterContext'


// import { Table } from './Table';


// import  "./css/app.css"
function App() {  
  return (   
    
    <BrowserRouter>
    
      
      
      <Routes>      
      <Route path="/*" element={<Router/>}/>
      <Route path="/form" element={<FormInput/>}/>  
      <Route path="/edit" element={<Edit/>}/>  
      <Route path="/load" element={<Home/>}/>  
      </Routes>
      
      

    
     </BrowserRouter>
     
    
     
    
   
      );
}

export default App;
