import React from 'react';
import { IStudent } from '../Shared/interfaces/IStudent';
import Student from '../Student';
import './Team.css';

interface TeamProps {
    primaryColor: string;
    secundaryColor: string;
    name: string;
    students: IStudent[]
}


export const Team = ({ name, primaryColor, secundaryColor, students }: TeamProps) => {
    return (

        // condicional
        (students.length > 0) ?
            <section className='team' style={{ backgroundColor: secundaryColor }}>
                <h3 style={{ borderColor: primaryColor }}>{name}</h3>
                <div className='students'>
                    {students.map(student =>
                        <Student
                            key={student.name}
                            name={student.name}
                            position={student.position}
                            image={student.image}
                            backgroundColor={primaryColor}
                        />
                    )}
                </div>
            </section>
        : <React.Fragment></React.Fragment>

        // atalho React.Fragment
        // <></>
    );
}   