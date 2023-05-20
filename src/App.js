import { Routes, Route} from "react-router-dom";
import { Layout } from "./Modules/Layout/Layout";
import {Main} from "./Modules/Main/Main"
import { Services} from './Modules/Services/Services'
import { AboutCompany } from "./Modules/AboutCompany/AboutCompany";
import { Contacts } from "./Modules/Contacts/Contacts";
import { Security } from "./Modules/Security/Security";
import { Cafe } from "./Modules/Cafe/Cafe";
import { CargoTransport } from "./Modules/CargoTransportation/CargoTransportation";
import { Products } from "./Modules/Products/Products";
import { QualityControl } from "./Modules/QualityControl/QualityControl";
import { ProductsExport } from "./Modules/ProductsExport/ProductsExport";
import { Photo } from "./Modules/Photo/Photo";
import { JobOpenings } from "./Modules/JobOpenings/JobOpenings";
import { Feedback } from "./Modules/Feedback/Feedback";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>}></Route>
          <Route path="/services" element={<Services/>}></Route>  
          <Route path="/about-company" element={<AboutCompany/>}></Route>
          <Route path="/contacts" element={<Contacts/>}></Route>
          <Route path="/security" element={<Security/>}></Route>
          <Route path="/cafe" element={<Cafe/>}></Route>
          <Route path="/сargo-transportation" element={<CargoTransport/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/products-export" element={<ProductsExport/>}></Route>
          <Route path="/quality-control" element={<QualityControl/>}></Route>
          <Route path="/photo" element={<Photo/>}></Route>
          <Route path="/job-openings" element={<JobOpenings/>}></Route>
          <Route path="/feedback" element={<Feedback/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
