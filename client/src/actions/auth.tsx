import * as api from "../api";
import { Dispatch } from "redux";
import { AUTH } from "../constants/actionType";

export const signin =
  (formData: object, navigate: any) => async (dispatch: Dispatch) => {
    try {
      const { data } = await api.signIn(formData);
      dispatch({ type: AUTH, data });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

export const signup =
  (formData: object, navigate: any) => async (dispatch: Dispatch) => {
    try {
      const { data } = await api.signUp(formData);
      dispatch({ type: AUTH, data });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
