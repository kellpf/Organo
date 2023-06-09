import './Banner.css';

interface BannerProps {
    urlImage: string;
    textAlt?: string;
}

export const Banner = ({ urlImage, textAlt }: BannerProps) => {

    // JSX 
    return (
        <header className='banner'>
            <section>
                <img src={urlImage} alt={textAlt}></img>
            </section>
        </header>
    );
}
