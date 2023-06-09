import { useState } from "react";
import Button from "../Button";
import InputText from "../InputText";
import Select from "../Select";
import './Form.css';
import { IStudent } from "../Shared/interfaces/IStudent";

interface FormProps {
    newStudent: (student: IStudent) => void;
    courses: string[];
}

export const Form = (props: FormProps) => {

    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [image, setImage] = useState('');
    const [course, setCourse] = useState('');
    const [date, setDate] = useState('');

    const save = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.newStudent({
            name,
            position,
            image,
            course,
            date
        });

        setName('');
        setPosition('');
        setImage('');
        setCourse('');
        setDate('');
    }

    return (
        <section className="form-component">
            <form onSubmit={save}>
                <InputText
                    required={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={name}
                    changed={value => setName(value)}
                />
                <InputText
                    required={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    value={position}
                    changed={value => setPosition(value)}
                />
                <InputText
                    type="date"
                    required={true}
                    label="Data de entrada no curso"
                    value={date}
                    changed={value => setDate(value)}
                    placeholder=''
                
                />
                <InputText
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    value={image}
                    changed={value => setImage(value)}
                />
                <Select
                    required={true}
                    label="Curso"
                    items={props.courses}
                    value={course}
                    changed={value => { setCourse(value) }}
                />

                <Button children={'Criar card'}></Button>
            </form>
        </section>
    );
}