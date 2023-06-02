import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {

  const teams = [
    {
      name: 'Matemática',
      primaryColor: '#57C278',
      secundaryColor: '#D9F7E9'
    },
    {
      name: 'História',
      primaryColor: '#82CFFA',
      secundaryColor: '#E8F8FF'
    },
    {
      name: 'Engenharia civil',
      primaryColor: '#A6D157',
      secundaryColor: '#F0F8E8'
    },
    {
      name: 'Medicina',
      primaryColor: '#FFBA05',
      secundaryColor: '#FFF5D9'
    },
    {
      name: 'Design',
      primaryColor: '#DB6EBF',
      secundaryColor: '#FAE9F5'
    },
    {
      name: 'Ciência sociais',
      primaryColor: '#FF8A29',
      secundaryColor: '#FFEEDF'
    },
  ];

  const [students, setStudent] = useState([]);

  const addStudent = (student) => {
    setStudent([...students, student]);
  }

  return (
    <div className="App">

      <Banner></Banner>
      <Form courses={teams.map(team => team.name)} newStudent={student => addStudent(student)}></Form>

      {teams.map(team =>
        <Team
          key={team.name}
          name={team.name}
          primaryColor={team.primaryColor}
          secundaryColor={team.secundaryColor}
          students={students.filter(student => student.course === team.name)}
        >
        </Team>
      )}

      <Footer></Footer>
    </div>
  );
}

export default App;
