import './Select.css';

export const Select = (props) => {
    
    const typed = (event) => {
        props.changed(event.target.value);
    }

    return (
        <div className='select-component'>
            <label>{props.label}</label>
            <select required={props.required} value={props.value} onChange={typed} placeholder="Selecione um curso...">
                <option value={""}></option>
                {props.items.map(item => {
                    return <option key={item}>{item}</option>;
                })}
            </select>
        </div>
    );
}