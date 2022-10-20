import { Routes, Route } from "react-router-dom";
import ButtonAppBar from "../components/ButtonAppBar";
import ClonacionView from "./ClonacionView";
import ResumenView from "./ResumenView";
import HomeView from "./HomeView"
import GruposView from "./GruposView";
import EntradasView from "./EntradasView"
import FasesView from "./FasesView";
import HorariosView from "./HorariosView";
import PlanesView from "./PlanesView";
import ErroresView from "./Errores.View";
export default function MultiView(){

return(
    <>
    
    <ButtonAppBar/>
        <Routes>
        <Route path="home" element={<HomeView/>}/>
                <Route path="clonacion" element={<ClonacionView />}/>
                <Route path="resumen" element={<ResumenView />}/>
                <Route path="entradas" element={<EntradasView />}/>
                <Route path="fases" element={<FasesView />}/>
                <Route path="horarios" element={<HorariosView />}/>
                <Route path="planes" element={<PlanesView />}/>
                <Route path="errores" element={<ErroresView />}/>
                <Route path="grupos" element={<GruposView />}/>
        </Routes>
    </>
);
}