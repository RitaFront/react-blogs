import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionCreator } from 'redux';
import { store } from 'store';
import { useActions } from 'store/hooks/useActions';
import { RootState } from 'store/rootReducer';
import { loginRequestAsync } from 'widgets/Login/model/action-creators/login';
import { LoginState } from 'widgets/Login/model/type/loginType';

export const useUserData = () => {
  const token = window.localStorage.token;
  const { loginRequestAsync } = useActions();
  const { data } = useSelector<RootState, LoginState>(
    (state) => state.user
  );

  useEffect(() => {
    console.log('useUserData');
    if (!token) return;
    loginRequestAsync(token);
  }, [token]);

  return data;
};
