import React from 'react'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { USER_LOGIN_SUCCESS } from '../constants/userConstants'

export const login =
  (
    email: String,
    password: String
  ): ThunkAction<Promise<void>, {}, {}, AnyAction> =>
  async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    try {
      dispatch({
        type: USER_LOGIN_SUCCESS,
      })
    } catch (error) {}
  }
