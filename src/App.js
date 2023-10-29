import Producto from './componentes/Producto';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>

        <Producto
          img="cocamotion"
          nombre="Coca Cola Motion"
          valor="760"
          comercio="OXXO" 
          />

        <Producto
          img="cocaoriginal"
          nombre="Coca Cola Original"
          valor="700"
          comercio="OXXO"
        />

        <Producto
          img="cocaultimate"
          nombre="Coca Cola Ultimate"
          valor="800"
          comercio="Lider"
        />

        <Producto
          img="cocazero"
          nombre="Coca Cola Zero"
          valor="780"
          comercio="Santa Isabel"
        />

        <Producto
          img="fantaoriginal"
          nombre="Fanta Original"
          valor="650"
          comercio="Jumbo"
        />
        <Producto
          img="fantapomelo"
          nombre="Fanta Pomelo"
          valor="800"
          comercio="Lider"
        />

      </div>


    </div>
  );
}

export default App;
