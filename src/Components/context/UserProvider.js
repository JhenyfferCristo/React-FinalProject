import { useEffect, useState, createContext, useContext } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(() => getLocalStorage());
  useEffect(() => {
    setLocalStorage(user);
  }, [user]);

  function isUserLoggedIn() {
    return Boolean(user.username);
  }

  function logoutUser() {
    setUser({});
  }

  return (
    <UserContext.Provider
      value={{
        user: user,
        setUser: setUser,
        isUserLoggedIn: isUserLoggedIn,
        logoutUser: logoutUser,
      }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const userContext = useContext(UserContext);
  return userContext;
}

function setLocalStorage(value) {
  window.localStorage.setItem('user', JSON.stringify(value));
}

function getLocalStorage() {
  const value = window.localStorage.getItem('user');
  return value ? JSON.parse(value) : {};
}
