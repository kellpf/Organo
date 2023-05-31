import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";

function App() {

  const [students, setStudent] = useState('');

  const addStudent = (student) => {
    console.log(student);
    setStudent([...students, student]);
  }

  return (
    <div className="App">

      <Banner></Banner>
      <Form newStudent={student => addStudent(student)}></Form>
      <Team name={"Matematica"}></Team>
      <Team name={"Matematica"}></Team>
      
    </div>
  );
}

export default App;
