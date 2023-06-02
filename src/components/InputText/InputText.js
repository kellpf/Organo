import './InputText.css';

export const InputText = (props) => {

    // const [value, setValue] = useState('Jessiezinho');

    // const changed = (event) => {
    //     setValue(event.target.value);
    // }

    const typed = (event) => {
        props.changed(event.target.value);
    }

    return (
        <div className="field-text">
            <label>
                {props.label}
            </label>
            <input value={props.value} onChange={typed} placeholder={props.placeholder} required={props.required}></input>
        </div>
    );
};
