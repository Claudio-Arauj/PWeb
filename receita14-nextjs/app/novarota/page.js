import { MariaPrea } from "./componentes";
import { MarioMoco } from "../novarota2/componentes";
import { Condicao } from "./subdiretorio/componentesub";

export default function NovaRotaHome(){

    return (
        <div> 
            <h1>Nova Rota 1, Nova Página</h1>
            <MariaPrea texto = "Morreu Maria Preá..."/>
            <MarioMoco/>
            <Condicao/>
        </div>
    ) 
}