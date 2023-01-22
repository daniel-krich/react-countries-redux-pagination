import CountryCard from "./CountryCard";


export default function CountriesList({ countries }) {
    return (
        countries.length > 0 ? (
            <div className="row row-cols-1 row-cols-md-4 g-4 justify-content-center">
                {countries.map((country, index) => (
                    <CountryCard key={index} flag={country.flag} name={country.name} population={country.population} />
                ))}
            </div>
        ) : (<h3 className="text-center">No more countries...</h3>)
        
    );
}