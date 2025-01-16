import { MariaPrea } from "../novarota/componentes";
import { MarioMoco } from "./componentes";
import { NewFunction } from "../page";

export default function NovaRotaHome(){

    return (
        <div> 
            <h1>Nova Rota 2, Nova Página</h1>
            <MariaPrea texto = "Morreu Preá Maria..."/>
            <MarioMoco/>
            <NewFunction/>
        </div>
    ) 
}