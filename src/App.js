import './App.css';
import Navbar from './components/Navbar';  // Importamos los componentes.
import BodyApp from './components/BodyApp';
import Footer from './components/Footer';


export default function App() {
  
  /*let configuracion = {conBoton:true, color:"#ddd", cat: 10}    Por lo general cuando llamamos una funcion se le mando no mas de 2 o 3 parametros, podemos dentro de una varibale colocar un objeto y pasar el objeto como variable, */
  function saludar(){
    alert("Hola Niños");
  }

  return (  
            <div>
                {/* <Navbar config={configuracion} /> */}  {/* Una vez que escribimos aca la Navbar solo no coloca el Import, conBoton y color son las propiedades  */}

                <Navbar conBoton={true} color={"#ddd"} />
                <Navbar conBoton={false} color={"#00f"} />
                <BodyApp/>
                <Footer/>  
            </div>
  );
}


