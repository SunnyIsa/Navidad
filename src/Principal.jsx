import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import "./est.css"
import Saludo from "./Saludo";
function Pag0(){
    return(
        <div className="cont ">
            <h1>Bienvenido a la magia de la Navidad</h1>
            <Saludo nom="Sunny"></Saludo>
            <img src="https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/1638B/production/_127791019_gettyimages-1189804175.jpg.webp" alt="" />
            <p>La Navidad está aquí, trayendo consigo el brillo de las luces, el calor del hogar y la ilusión que nos acompaña desde pequeños. Este es el momento perfecto para detenernos, respirar profundo y recordar que los mejores regalos son aquellos que no se envuelven: la compañía, el cariño y los instantes que compartimos con quienes amamos.</p>
        </div>
    );
}
function Pag1(){
    return(
        <div className="cont">
            <div class="accordion" id="accordionExample">


                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading1">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                        Siglo I - Nacimiento de Jesús
                    </button>
                    </h2>
                    <div id="collapse1" class="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        La Navidad nace del recuerdo del nacimiento de Jesús de Nazaret. Aunque no existe una fecha exacta documentada, los primeros cristianos celebraban este acontecimiento como un pilar espiritual fundamental.
                    </div>
                    </div>
                </div>


                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading2">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                        Año 336 - Primera celebración del 25 de diciembre
                    </button>
                    </h2>
                    <div id="collapse2" class="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        El primer registro oficial de la Navidad el 25 de diciembre aparece en Roma en el año 336. La fecha se eligió para coincidir con festividades del solsticio de invierno.
                    </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading3">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                        Siglo IV - Expansión por el Imperio Romano
                    </button>
                    </h2>
                    <div id="collapse3" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Con Constantino y la aceptación del cristianismo, la Navidad se extiende oficialmente por todo el Imperio Romano como una celebración religiosa establecida.
                    </div>
                    </div>
                </div>


                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading4">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                        Siglos V-X - Tradiciones europeas antiguas
                    </button>
                    </h2>
                    <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Costumbres nórdicas y germánicas se mezclan con la Navidad cristiana: ramas verdes, fuego, velas y festejos de invierno se integran a la celebración.
                    </div>
                    </div>
                </div>


                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading5">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                        Siglos XI-XIII - Popularización del pesebre
                    </button>
                    </h2>
                    <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        En 1223, San Francisco de Asís presenta el primer pesebre viviente. Desde entonces, los belenes se convierten en un símbolo espiritual de la Navidad.
                    </div>
                    </div>
                </div>


                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading6">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                        Siglos XV-XVI - Villancicos y regalos
                    </button>
                    </h2>
                    <div id="collapse6" class="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Surgen villancicos, obras religiosas y celebraciones comunitarias. Aparece la costumbre de intercambiar pequeños obsequios durante la Navidad.
                    </div>
                    </div>
                </div>


                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading7">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                        Siglo XVII - Nace el árbol de Navidad moderno
                    </button>
                    </h2>
                    <div id="collapse7" class="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        En Alemania y el norte de Europa se comienza a adornar un árbol dentro del hogar, tradición que luego se extiende por todo el mundo.
                    </div>
                    </div>
                </div>


                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading8">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                        Siglo XIX - Santa Claus, tarjetas y Dickens
                    </button>
                    </h2>
                    <div id="collapse8" class="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Se populariza la figura moderna de Santa Claus, nacen las tarjetas navideñas y obras como “Un cuento de Navidad” dan forma al espíritu navideño actual.
                    </div>
                    </div>
                </div>


                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading9">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                        Siglo XX - Globalización de la Navidad
                    </button>
                    </h2>
                    <div id="collapse9" class="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Con la radio, el cine y la televisión, la Navidad se vuelve una celebración global. Elementos como luces, villancicos modernos y regalos se universalizan.
                    </div>
                    </div>
                </div>


                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading10">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                        Siglo XXI - Navidad digital y multicultural
                    </button>
                    </h2>
                    <div id="collapse10" class="accordion-collapse collapse" aria-labelledby="heading10" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        La Navidad evoluciona hacia un enfoque digital y conectado: videollamadas, regalos virtuales, luces LED y una celebración multicultural en un mundo global.
                    </div>
                    </div>
                </div>

                </div>

        </div>
    );
}
function Pag2(){
    return(
        <div className="cont">
            <div class="accordion" id="accordionExample">

  <div class="accordion-item">
    <h2 class="accordion-header" id="heading1">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
        El árbol de Navidad
      </button>
    </h2>
    <div id="collapse1" class="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Esta tradición proviene del norte de Europa. Consiste en colocar un pino o abeto decorado con luces, esferas y figuras que simbolizan esperanza, vida y protección durante el invierno.
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="heading2">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
        El nacimiento o pesebre
      </button>
    </h2>
    <div id="collapse2" class="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Representa el lugar donde nació Jesús. Incluye figuras como José, María, el niño Jesús, pastores, animales y, en algunos países, se añade al niño recién el 24 de diciembre.
      </div>
    </div>
  </div>


  <div class="accordion-item">
    <h2 class="accordion-header" id="heading3">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
        Las luces navideñas
      </button>
    </h2>
    <div id="collapse3" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Antiguamente se colocaban velas para simbolizar la luz que guía en la oscuridad del invierno. Hoy se usan luces LED para iluminar casas, árboles y calles.
      </div>
    </div>
  </div>


  <div class="accordion-item">
    <h2 class="accordion-header" id="heading4">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
        Los villancicos
      </button>
    </h2>
    <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Canciones tradicionales que se cantan en familia o en la comunidad. Suelen narrar escenas del nacimiento de Jesús, la llegada de los pastores o el espíritu de unión.
      </div>
    </div>
  </div>


  <div class="accordion-item">
    <h2 class="accordion-header" id="heading5">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
        El intercambio de regalos
      </button>
    </h2>
    <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Basado en la historia de los Reyes Magos y en la figura de San Nicolás. Representa gratitud, amistad y generosidad con quienes nos rodean.
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="heading6">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
        Las cenas de Nochebuena
      </button>
    </h2>
    <div id="collapse6" class="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Reunión familiar típica del 24 de diciembre. Dependiendo del país, incluye pavo, cerdo, panetón, chocolate caliente, ensaladas, buñuelos y recetas tradicionales.
      </div>
    </div>
  </div>


  <div class="accordion-item">
    <h2 class="accordion-header" id="heading7">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
        Las cartas a Papá Noel
      </button>
    </h2>
    <div id="collapse7" class="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Tradición donde los niños escriben una lista de deseos para Santa Claus. Fomenta la ilusión, la esperanza y la imaginación infantil.
      </div>
    </div>
  </div>


  <div class="accordion-item">
    <h2 class="accordion-header" id="heading8">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
        Las coronas navideñas
      </button>
    </h2>
    <div id="collapse8" class="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Coronas de ramas verdes colocadas en puertas o paredes. Simbolizan eternidad, esperanza y la llegada de la Navidad al hogar.
      </div>
    </div>
  </div>

 
  <div class="accordion-item">
    <h2 class="accordion-header" id="heading9">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
        La misa de gallo
      </button>
    </h2>
    <div id="collapse9" class="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Celebración religiosa que se realiza la noche del 24 de diciembre, tradicionalmente cerca de la medianoche, para conmemorar el nacimiento de Jesús.
      </div>
    </div>
  </div>

 
  <div class="accordion-item">
    <h2 class="accordion-header" id="heading10">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
        Los Reyes Magos
      </button>
    </h2>
    <div id="collapse10" class="accordion-collapse collapse" aria-labelledby="heading10" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        En muchos países se celebra el 6 de enero. Los niños dejan zapatos, cartas o comida para los camellos, y reciben regalos en honor a los tres sabios que visitaron a Jesús.
      </div>
    </div>
  </div>

</div>

        </div>

    );
}
function Pag3(){
    return(
        <div className="cont">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://hips.hearstapps.com/hmg-prod/images/cronicas-de-navidad-1543835550.jpg?crop=0.9879401833092136xw:1xh;center,top" class="d-block w-100"  alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRpSOsknJvBEYRhjSmQzAqjWHLAk0PVtC6pg&s" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://media.themoviedb.org/t/p/w500/pSNeHztDcCsUlDprFAdhCDFPcCl.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

        </div>
    );
}
function Pag4(){
    return(
        <div className="cont">
            <img src="https://hips.hearstapps.com/hmg-prod/images/captura-de-pantalla-2022-12-24-a-las-9-59-07-1671872361.png?crop=1xw:1xh;center,top" alt="" width="300px"/>
            <img src="https://hips.hearstapps.com/hmg-prod/images/pentatonix-1670180368.jpg?crop=1xw:1xh;center,top" alt="" width="300px"/>
            <img src="https://hips.hearstapps.com/hmg-prod/images/andrea-boceli-1670180371.jpg?crop=1xw:1xh;center,top" alt="" width="300px" />
        </div>
    );
}
function Principal(props){
    return(
        <div className="padre">
          
            <nav class="navbar navbar-expand-lg bg-light ">
            <div class="container-fluid">
                <Link to="/" class="navbar-brand mb-0 h1" href="#">Navidad</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                    <Link to="/pag1" class="nav-link active" aria-current="page" href="#">Historia</Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/pag2" class="nav-link" href="#">Tradiciones</Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/pag3" class="nav-link" href="#">Peliculas</Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/pag4" class="nav-link ">Canciones</Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>           
                <Routes>
                    <Route path="/" element={<Pag0></Pag0>}></Route>
                    <Route path="/pag1" element={<Pag1></Pag1>}></Route>
                    <Route path="/pag2" element={<Pag2></Pag2>}></Route>
                    <Route path="/pag3" element={<Pag3></Pag3>}></Route>
                    <Route path="/pag4" element={<Pag4></Pag4>}></Route>
                </Routes>
  
                
        </div>
    );
}
export default Principal;