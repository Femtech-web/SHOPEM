import { loginStart, loginSuccess, loginFailure } from "./UserRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
    dispatch(loginStart())
    try {
        const res = await publicRequest.post('/auth/login', user);
        dispatch(loginSuccess(res.data));
        localStorage.setItem('TOKEN', res.data.accessToken);
        localStorage.setItem('userId', res.data._id);
    } catch (err) {
        dispatch(loginFailure())
    }
}



