/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/authReducer";
const AuthContext = createContext();

const initialState = {
username :"",
};

const AuthProvider = ({children})=>{
const [state,dispatch] = useReducer(reducer,initialState);
//actions
const setUsername = (username) => {
    dispatch({ type: "SET_USERNAME", payload: username });
  };

  return (
    <AuthContext.Provider value={{ ...state, setUsername }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuthContext = () => {
    return useContext(AuthContext);
  };
  
  export { AuthProvider, useAuthContext };
