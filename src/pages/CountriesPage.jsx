import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { countriesSelectorPagination } from '../helpers/countriesSelectorPagination';
import CountriesList from '../components/CountriesList';
import Pagination from "../components/Pagination";
import CentralizedLoadingSpinner from '../components/CentralizedLoadingSpinner';


export default function CountriesPage() {
    const { page } = useParams();
    const pageId = +(page ?? 1);
    const countriesTakeCount = 12;
    const isCountriesLoading = useSelector((state) => state.countries.loading);
    const countries = useSelector((state) =>  countriesSelectorPagination(state.countries.data, pageId, countriesTakeCount));
    const allCountriesLength = useSelector((state) => state.countries.data.length);
    return (
        <div className="container">
            <h1 className="text-center mt-3 mb-5">Current page {pageId}</h1>

            {isCountriesLoading ? <CentralizedLoadingSpinner /> : (
                <>
                    <CountriesList countries={countries} />
                    <Pagination baseUrl={"/countries"} currentPage={pageId} totalResults={allCountriesLength} maxResultsPerPage={countriesTakeCount} />
                </>
            )}
        </div>
    );
}