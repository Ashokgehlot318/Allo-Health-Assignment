import { useState } from "react"
import FilterList from "./components/FilterList"
import MealList from "./components/MealList"

function App() {
  const [filterData, setFilterData] = useState(null)
  const handleFilterData = (labelName) => {
    // console.log(labelName)
    setFilterData(labelName)
  }
  return(
    <>
      <FilterList onFilterChange={handleFilterData}/>
      <MealList filterData={filterData}/>
    </>
  )
}

export default App
