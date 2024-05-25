const { createContext, useContext } = require('react');

const AppContext = createContext({
  activeLink: 0,
});

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider
      value={{
        activeLink,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export default useGlobalContext;
