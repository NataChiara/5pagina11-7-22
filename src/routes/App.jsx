import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "../containers/Home";
import Connection from '../containers/Connection';
import NotFound from '../containers/NotFound';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/Connection" element={<Connection/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;