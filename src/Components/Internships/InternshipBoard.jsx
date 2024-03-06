import React from 'react'
import InternshipCard from './InternshipCard.jsx'
export default function InternshipBoard() {
let articles = [
    {
        title: "Software Engineer Intern",
        duration: "Summer 2024",
        source: "Company XYZ",
        place: "San Francisco, CA",
        stipend: "$2000/month"
      },
      {
        title: "Data Analyst Intern",
        duration: "Fall 2024",
        source: "Company ABC",
        place: "New York, NY",
        stipend: "$1800/month"
      },
      {
        title: "Marketing Intern",
        duration: "Spring 2024",
        source: "Company DEF",
        place: "Los Angeles, CA",
        stipend: "$1500/month"
      }
]

  return (
    <div className='flex flex-row'>
       {articles.map((element, ind) => {

return <div key={ind} className=" px-10 rounded mx-3 my-3">
    <InternshipCard
    jobTitle={element.title}
     duration={element.duration}
    source={element.source}
    place = {element.place}
    stipend = {element.stipend} />
</div>
})}
    </div>
  )
}
