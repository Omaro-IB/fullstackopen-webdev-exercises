const Header = (props) => {
    return (
        <div>
            <h1>{props.course.name}</h1>
        </div>
    )
}

const Part = (props) => {
    return (
        <p>
            {props.partName} {props.numExercises}
        </p>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part partName={props.course.parts[0].name} numExercises={props.course.parts[0].exercises}/>
            <Part partName={props.course.parts[1].name} numExercises={props.course.parts[1].exercises}/>
            <Part partName={props.course.parts[2].name} numExercises={props.course.parts[2].exercises}/>
        </div>
    )
}

const Total = (props) => {
    return (
        <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header course={course}/>
            <Content course={course}/>
            <Total course={course}/>
        </div>
    )
}

export default App