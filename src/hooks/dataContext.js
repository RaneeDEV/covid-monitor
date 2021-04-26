import { createContext, useReducer, useContext, useEffect } from "react";

const initialState = {
  currentLocation: "world",
  data: {},
  lang: "en",
};

const DataContext = createContext();
export const useCovidData = () => useContext(DataContext);
export default function DataProvider({ children }) {
  const [covidData, covidDataDespatch] = useReducer(
    covidDataReducer,
    initialState
  );

  useEffect(() => {
    const today = new Date().toJSON().split("T")[0];
    getCovidData(`https://api-covid19.rnbo.gov.ua/data?to=${today}`);
  }, []);

  async function getCovidData(url) {
    try {
      const data = await fetch(url).then((r) => r.json());
      covidDataDespatch({ type: "setData", payload: data });
    } catch (error) {
      throw new Error("Invalid active type!");
    }
  }

  function covidDataReducer(state, action) {
    switch (action.type) {
      case "setData":
        return { ...state, data: action.payload };
      case "setLocation":
        return { ...state, currentLocation: action.payload };
      default:
        throw new Error("Invalid active type!");
    }
  }
  return (
    <DataContext.Provider value={{ covidData, covidDataDespatch }}>
      {children}
    </DataContext.Provider>
  );
}
