import React from 'react'
import useFetch from '../utils/useFetch'
import MealBox from './MealBox'

const MealList = ({filterData}) => {
    const url = "http://localhost:3001/api/v1/resData"
    const meals = useFetch(url).meals
    // console.log(meals)
    const filteredMeals = filterData ? meals.filter(meal => meal.labels.includes(filterData.toLowerCase())) : meals;
    // console.log(filteredMeals)
  return (
    <div>
        {
            filteredMeals ? filteredMeals.map((meal) => {
                return <MealBox key={meal.id}  meal={meal}/>
            }) : "Loading..."
        }
    </div>
  )
}

export default MealList