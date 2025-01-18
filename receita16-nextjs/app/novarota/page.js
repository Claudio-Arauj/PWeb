import { MariaPrea } from "./componentes";
import { MarioMoco } from "../novarota2/componentes";
import { Condicao } from "./subdiretorio/componentesub";

export default function NovaRotaHome(){
    return (
        <div> 
            <MariaPrea texto = "Morreu Maria Preá..."/>
            <MarioMoco/>
            <Condicao/>
        </div>
    ) 
}