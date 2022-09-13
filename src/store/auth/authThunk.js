import { isLoading, setUser } from "./authSlice";
import { loginWithEmailAndPassword } from "../../config/firebaseConfig";
// createThunk

const user = {
    name: 'Natalia',
    lastName : 'Bilbao',
    password : 'Pass123'
    
}
export const login = (email, password) => {
    return async(dispatch) => {
     dispatch(isLoading());
     dispatch(setUser(user));
     const loginResponse = await loginWithEmailAndPassword (email,password);
     console.log(loginResponse);
    dispatch(setUser(user));
// await datos user
//dispatch(setUser())
    };
}