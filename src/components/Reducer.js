export default function appReducer(state,action){
    switch(action.type){
        case 'ADD-DATAS':
            return {
                
              parameters: action.payload
            }
        case 'ERROR':
            return {
                
              error: "Please check connection to the server"
            }
        default:
            return state;
    }
}