import './InputText.css';

interface InputTextProps {
    changed: (value: string) => void;
    label: string;
    placeholder?: string;
    value: string;
    required?: boolean;
};

export const InputText = ({ changed, label, placeholder, value, required = false }: InputTextProps) => {

    // const [value, setValue] = useState('Jessiezinho');

    // const changed = (event) => {
    //     setValue(event.target.value);
    // }

    const typed = (event: React.ChangeEvent<HTMLInputElement>) => {
        changed(event.target.value);
    }

    return (
        <div className="field-text">
            <label>
                {label}
            </label>
            <input
                value={value}
                onChange={typed}
                placeholder={placeholder}
                required={required}
            >
            </input>
        </div>
    );
};
