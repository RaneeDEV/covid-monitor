import { createContext, useState, useContext} from "react"


const DataContext = createContext()
export const useCovidData = () => useContext(DataContext)
export default function DataProvider({children}) {
    const [covidData, setCovidData] = useState([]);
    return (
        <DataContext.Provider value={{covidData, setCovidData}}>{children}</DataContext.Provider>
    ) 
    
    
}