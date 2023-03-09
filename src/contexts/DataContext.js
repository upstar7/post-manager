import { createContext, useContext } from "react";

export const DataContext = createContext({
    data: undefined,
    setData: () => {},
});

export const useDataContext = () => useContext(DataContext);
