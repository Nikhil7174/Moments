import * as api from "../api";
import { Dispatch } from "redux";
import { AUTH } from "../constants/actionType";

export const signin =
  (formData: object, navigate: any) => async (dispatch: any) => {
    try {
      // log in the user
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

export const signup =
  (formData: object, navigate: any) => async (dispatch: any) => {
    try {
      // sign up the user
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
