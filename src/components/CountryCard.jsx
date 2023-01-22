import '../styles/countries.scss';

export default function CountryCard({ flag, name, population }) {
    return (
        <div className="col d-flex justify-content-center m-3">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={flag} alt={name} />
                    </div>
                    <div className="flip-card-back">
                        <h1>{name}</h1>
                        <p>Population: {population}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}