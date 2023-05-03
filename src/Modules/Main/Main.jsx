import { CatalogPress } from "./components/CatalogPress"
import { Job } from "./components/Job"
import { MainNews } from "./components/MainNews"
import { Clients } from "./components/Clients"
import { JobPress } from "./components/JobPress"



export const Main = () => {
    return (
        <>
            <Job/>
            <CatalogPress/>
            <MainNews/>
            <Clients/>
            <JobPress/>
        </>
        
    )
}