import React from "react"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";


export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="cards">
        {data.map(course => {
          return (
            <Card
              key={course.id}
              // image={`../images/${course.coverImg}`}
              // rating={course.stats.rating}
              // reviewCount={course.stats.reviewCount}
              // country={course.country}
              // title={course.title}
              // price={course.price}
              // spots={course.openSpots}
              // location={course.location}
              {...course}
            />
          )
        })}
      </div>

    </div>
  )
};