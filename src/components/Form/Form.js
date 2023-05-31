import { useState } from "react";
import Button from "../Button";
import InputText from "../InputText";
import Select from "../Select";
import './Form.css';

export const Form = (props) => {

    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [image, setImage] = useState('');
    const [course, setCourse] = useState('');

    const cursos = [
        'Matemática',
        'História',
        'Engenharia civil',
        'Medicina',
        'Design',
        'Ciência sociais'
    ];

    const save = (event) => {
        event.preventDefault();
        props.newStudent({
            name,
            position,
            image,
            course
        });
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
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    value={image}
                    changed={value => setImage(value)}
                />
                <Select 
                required={true} 
                label="Curso" 
                items={cursos}
                value={course}
                changed={value => {setCourse(value)}}
                >
                </Select>
                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    );
}