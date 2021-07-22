import React from 'react'
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from '../constants/userConstants'

export interface UserState {
  loading?: boolean
  error?: string
  userInfo?: { email: string; password: string }
}

interface Action {
  type: string
  payload?: string
}

export const userLoginReducer = (state: UserState = {}, action: Action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return { loading: true }
    default:
      return state
  }
}
