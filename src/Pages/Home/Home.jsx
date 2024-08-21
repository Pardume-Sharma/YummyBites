import { useState } from 'react'
import './Home.css'
import Hero from '../../components/Hero/Hero'
import Factor from '../../components/Factor/Factor'
import Features from '../../components/Features/Features'
import Feedback from '../../components/Feedback/Feedback'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'


const Home = () => {
  const [category, setcategory] = useState("All");
  return (
    <>
    <Hero />
    <Features/>
    <Factor/>
    <ExploreMenu category={category} setcategory={setcategory} />
    <FoodDisplay category ={category} />
    <Feedback/>
    </>
  )
}

export default Home