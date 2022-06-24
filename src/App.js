import Bu3 from './Images/Bu3.jpg'
import Bu2 from './Images/Bu2.jpg'
import Bu1 from './Images/Bugatti.jpg'
import t1 from './Img/Bugatti-Chiron-Noire-Sportive.jpg'
import t2 from './Img/Butt1.jpg'
import t3 from './Img/Bugatti-Centodieci.jpg'
import t4 from './Img/Bugatti-La-Voiture-Noire.jpg'

import './App.css';

function App() {
  return (
    
<div className="container">
<div className="row">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#"><h3>COMPANY </h3></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> </button>
          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">SHOWROOM <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#">BUY <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item active">
                    <a class="nav-link" href="#">TEL: <span class="sr-only">(current)</span></a>
                  </li>
                  </ul>
            </div>
          </nav>


          <div class="col-md-12 cont2">
              
              <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#carouselExampleCaptions" data-slide-to="0" class=""></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="1" class=""></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="2" class="active"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item">
                  <img src={Bu2} className="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                      <h2>Bugatti Black</h2>
                      <h3>Some representative placeholder content for the first slide.</h3>
                    </div>
                  </div>
                  <div class="carousel-item">
                  <img src={Bu3} className="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                      <h2>Bugatti Divo</h2>
                      <h3>The Divo shares most of the important mechanical features with the Chiron; most notably the same quad-turbocharged 8.0L W16 engine which produces an extravagant 1,500 horsepower.</h3>
                    </div>
                  </div>
                  <div class="carousel-item active">
                  <img src={Bu1} className="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                      <h2>Third slide label</h2>
                      <h3>Some representative placeholder content for the third slide.</h3>
                    </div>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </button>
              </div>
          </div>
          
          <div class="plan">
             <h1 class="wh">Which Type do you want</h1>
          </div>





          <div class="col-md-12 cont3">
                
                <div class="col-md-3 sub1 for">
       <img src={t1} class="Za"></img>
        <h3>Bugatti Chiron Norie Sportive</h3>
        <h5>This car is a sportive features andf matte carbon fiber exterior and matte finish on anything that isn't carbon fiber</h5>
                </div>
                <div class="col-md-3 sub2 for">
                <img src={t2} class="Za"></img>
                   <h3>Bugatti Chiron Spot 110</h3> 
                   <h5>From a performance standpoint, designers made no changes to the drivetrain. Only 20 will be produce</h5>
                </div>
                <div class="col-md-3 sub1 for">
                <img src={t3} class="Za"></img>
                    <h3>Bugatti Centodieci </h3>
                   <h5>The Bugatti Centodieci is the brand’s homage to one of its most iconic supercars of all time, the EB110. </h5>
                </div>
                <div class="col-md-3 sub2 for">
                <img src={t4} class="Za"></img>
        <h3>BugattiLa Voiture Noire</h3>
        <h5>Operating beyond the known best standard in any field is incredibly tough; new battle lines had to be drawn. </h5>
                </div>
                
        
              
               
        
        
        
        
        </div>
        
          <div class="footer">
          <div class="col-md-4 fot"><h3>VISIT US IN GHANA</h3>
            <h5>CENTRAL REGION CAPECOAST</h5>
          </div>
          <div class="col-md-4 fot"><h3>VISIT US IN CHINA</h3>
          <h5>BENJING SHI MUNICIPALITY</h5>
          </div>
          <div class="col-md-4 fot"><h3>VISIT US IN USA</h3>
            <h5>FLORIDA TALLAHASSEE</h5>
          </div>
        </div>
        
        
        
        
        
        
        
        
        
        
        <i class="fa-brands fa-twitter fay"></i>
        <i class="fa-brands fa-instagram-square fay"></i>
        <i class="fa-brands fa-whatsapp fay"></i>
        <i class="fa-brands fa-facebook-f fay"></i>
    

</div>
</div>
            
  );
}

export default App;
