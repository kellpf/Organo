import "./Student.css";

export interface StudentProps {
    name: string;
    position: string;
    image: string;
    backgroundColor: string;
    date: string;
}

export const Student = ({ name, position, image, backgroundColor, date }: StudentProps) => {
    return (

        <div className="student">
            <div className="header" style={{ backgroundColor: backgroundColor }}>
                {image ? (<img src={image} alt="Imagem do estudante"></img>)
                    : <img src="/images/profile.png" alt="Imagem padrão"></img>}
            </div>
            <div className="footer">
                <h4>{name}</h4>
                <h5>{position}</h5>
                <h5>{new Date(date).toLocaleDateString()}</h5>
            </div>
        </div>
    );
}