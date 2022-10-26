import React from "react";          // Importamos toda la libreria de React, se hace en cada archivo.
import CardWidget from "./CardWidget";

export default function Navbar({conBoton, color, funcLogin}) {      /* Exportamos el componente para que lo use otro archivo y lo tenemos por defecto por si tenemos mas de uno. Entre llaves colocamos las propiedades que recive del padre y desestructuramos la funcion para atajar las propiedades que nos envia al componente*/
    
    return ( // Dentro del return esta prohibido usar IF, ELSE, se usa operadores ternarios.
            
            <div style={{backgroundColor: color}}>
              {/* <CardWidget /> */}
              NAVBAR
              <ul>
                <li>
                  <a href="http://google.com">Ir a Google</a>
                </li>
                <li>
                  <a href="http://google.com">Ir a Google</a>
                </li>
                <li>
                  <a href="http://google.com">Ir a Google</a>
                </li>
                <li>
                  <a href="http://google.com">Ir a Google</a>
                </li>
              </ul>
              {conBoton? <button onClick={() => funcLogin()}>LOGIN</button> : null}  {/* Con el metodo onCLick llamamos a la funcion declarada padre, en los componentes no van funcionalidades  */}
              {/* <CardWidget/> */}
            </div>
    );
}