
// import Navbar from "./components/Navbar"
import { BrowserRouter,Routes,Route} from "react-router-dom"
import ShirtDetails from "./components/ShirtDetails"
import Filters from "./components/Filters"
import Sample from "./components/WebScraping/Sample"

const App=()=>{
    return(
        <div>
            <BrowserRouter>
                {/* <Sample/> */}
                    <Routes>
                        <Route element={<Filters/>} path="/"/>
                        <Route element={<ShirtDetails />} path="/shirts"/>
                    </Routes>
            </BrowserRouter>

            
        </div>
    )
}
export default App