// import { useState } from 'react'
import './Home.css'
import Hero from '../../components/Hero/Hero'
import Feedback from '../../components/Feedback/Feedback'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import Section from '../../components/section1/Section'
import SectionTwo from '../../components/section2/SectionTwo'
import SectionThree from '../../components/section3/sectionThree'

const Home = () => {
  // const [category, setcategory] = useState("All");
  return (
    <>
    <Hero />
    <Section/>
    <FoodDisplay category ={"All"} />
    <SectionTwo/>
    <Feedback/>
    <SectionThree/>
    </>
  )
}

export default Home