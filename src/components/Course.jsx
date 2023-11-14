import React from "react";

const Header = ({ courseName }) => {
    return <div>
    <h1>{courseName}</h1>
    </div>
}

const Content = ({ parts }) => {
    return (
      <ul>
        {parts.map((part) => (
          <li key={part.id}>
            {part.name} ({part.exercises} exercises)
          </li>
        ))}
      </ul>
    );
  };

  const Total = ({ parts }) => {
    const totalExercises = parts.reduce(
        (prev, curr) => prev + curr.exercises,
        0
      );
  return <p>Number of exercises: {totalExercises}</p>;
};

const Course = ({courses}) => {
    return (
        <div key={courses.id}>
            <Header courseName={courses.name} />
            <Content parts={courses.parts} />
            <Total parts={courses.parts} />
        </div>
    )
}

export default Course