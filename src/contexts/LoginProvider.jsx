import React, { Children, useReducer } from "react";
import { loginContext as LoginContext } from "./loginContext";

function LoginProvider(children) {
  const initialState = { login: [] };

  const [state, dispatch] = useReducer((prevState, action) => {
    switch (action.type) {
      case "LOGIN_USER": {
        const newUser = [...prevState.login, action.payload];

        return { ...prevState, newUser };
      }
      case "DELETE_TODOS": {
        const newTodos = prevState.todos.filter((todo) => {
          return todo.title !== action.payload.title;
        });
        return { ...prevState, newTodos };
      }
      default:
        return prevState;
    }
  }, initialState);

  return (
    <LoginContext.Provider value={{ state, dispatch }}>
      {children}
    </LoginContext.Provider>
  );
}

export default LoginProvider;
