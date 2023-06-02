import "./Student.css";

export const Student = ({ name, position, image, primaryColor }) => {
    return (

        <div className="student">
            <div className="header" style={{ backgroundColor: primaryColor }}>
                {image ? (<img src={image} alt="Imagem do estudante"></img>) 
                : <img src="/images/profile.png" alt="Imagem padrão"></img>}
                
            </div>
            <div className="footer">
                <h4>{name}</h4>
                <h5>{position}</h5>
            </div>
        </div>
    );
}