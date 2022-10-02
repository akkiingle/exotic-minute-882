

const AuthReducer = (state,action) => {
 switch(action.type){
    case "LOADING": return {
        ...state,
        loading:!state.loading,
        error:false
    };
    case "ERROR": return {
        ...state,
        loading:false,
        error:!state.error
    };
    case "STORETOKEN": return {
        ...state,
       token:action.payload
    };
    case "AUTHSTATUS": return {
        ...state,
        isAuth:!state.isAuth
    };
    default: return state;
 }
}

export default AuthReducer;
