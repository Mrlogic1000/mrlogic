import React,{useReducer,createContext,useEffect} from 'react'
import appReducer from './Reducer'
import axios from "axios";

export const ParameterContext = createContext()

const initiateState ={
    parameters: [],
    Loading: '',
    error: ''
    }
export const ParameterContextProvider = (props) => {
    const [state, dispatch] = useReducer(appReducer,initiateState)

    function addParameters(params){
        dispatch({
            type: 'ADD-DATAS',
            payload: params
        })

    }
    // function displayError(){
    //     dispatch({
    //         type: 'ERROR',            
    //     })

    // }
    
   
    useEffect(()=>{        
        const data = async ()=>{
          const res = await axios.get("http://localhost:4000")              
          addParameters(res.data)
               
          
        }
        data()
      
     },[])
       
    
    return (
       <ParameterContext.Provider value={{
           parameters: state.parameters,
           addParameters:addParameters
            
       }}>
       {props.children}
       </ParameterContext.Provider> 
      
    )
}
