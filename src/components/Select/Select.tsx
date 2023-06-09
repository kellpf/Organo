import './Select.css';

interface SelectProps {
    label: string;
    placeholder?: string;
    value: string;
    items: string[];
    required: boolean;
    changed: (value: string) => void;
}

export const Select = ({ changed, items, label, required, value, placeholder }: SelectProps) => {

    const typed = (event: React.ChangeEvent<HTMLSelectElement>) => {
        changed(event.target.value);
    }

    return (
        <div className='select-component'>
            <label>{label}</label>
            <select
                required={required}
                value={value}
                onChange={typed}
                placeholder="Selecione um curso..."
            >
                <option value={""}></option>
                {items.map(item => {
                    return <option key={item}>{item}</option>;
                })}
            </select>
        </div>
    );
}