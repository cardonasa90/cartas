import imagen0 from './imagenes/car1.jpeg';
import imagen1 from './imagenes/car2.jpg';
import imagen2 from './imagenes/car3.jpeg';

import './miestilo.css';

function App() {
  let nombres = ["car1","car2","car3"];
  return (
    <div className="container">
          <div className="caja carro1">
           <img src = {imagen0}/>
           <div className="name">{nombres[0]}</div>

      </div>
      <div className="caja">
           <img src = {imagen1}/>
           <div className="name">{nombres[1]}</div>

      </div>

      <div className="caja">
           <img src = {imagen2}/>
           <div className="name">{nombres[2]}</div>

      </div>
           
          
      
      </div>

      
    
  );
}

export default App;
