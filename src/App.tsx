import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react"

const GETLESSONS = gql`
  query {
    lessons{
      id
      title
      teacher {
        name
      }
    }
  }
`

interface Lesson {
  id: string
  title: string
  teacher: {
    name: string
  }
}

function App() {

  const {data} = useQuery<{lessons:Lesson[]}>(GETLESSONS);
  

  return (
  <ul>
    {
      data?.lessons.map(lesson => (
        <li key={lesson.id}> {lesson.title} </li> ) )
    }
  </ul>
    )
}

export default App
