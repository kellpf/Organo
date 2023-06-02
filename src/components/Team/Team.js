import Student from '../Student';
import './Team.css';

export const Team = (props) => {
    return (

        // condicional
        (props.students.length > 0) &&
        <section className='team' style={{ backgroundColor: props.secundaryColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
            <div className='students'>
                {props.students.map(student =>
                    <Student
                        key={student.name}
                        name={student.name}
                        position={student.position}
                        image={student.image}
                        primaryColor={props.primaryColor}
                    >
                    </Student>
                )}
            </div>
        </section>
    );
}   