const { default: Inicio } = require("pages/Inicio");
const { Route, Routes, BrowserRouter } = require("react-router-dom");

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes