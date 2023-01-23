import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import CountriesPage from "./pages/CountriesPage";

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/countries/:page?" element={<CountriesPage/>} />
            <Route path='*' element={<Navigate to='/countries' />} />
        </Routes>
    </BrowserRouter>
  );
}