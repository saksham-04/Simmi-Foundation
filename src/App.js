import './App.css';
import Navbar from './components/Navbar'
import HeaderSlide from './components/HeaderSlide';
import pic5 from './india.png'
import Obj from './components/Obj';
import Footer from './components/Footer';



function App() {
  return (

    <div>

      <Navbar title='SIMMI Foundation' />

      <HeaderSlide />
      

        <div className="container my-5">
          <img src={pic5} length={500} width={250} className="rounded float-end" alt="..." />
          <h1><strong>Welcome to</strong></h1>
          <h1 style={{ color: "#fd7e14" }}><strong>SIMMI</strong></h1>

        </div>
        
          <div className="container">


            <p>

              Simmi Foundation envisions to develop a society based on
              legitimate rights, equity,
              justice, honesty, social sensitivity and a culture of service
              in which all are self-reliant.
              We look forward to alleviate poverty and enhance the dignty of poor
              in the world by addressing basic, but neglected issues of poor.
              Education is one of the means through which we can acheive our goals.
              Women Empowerment is another mode of development,
              as women are an important section of our society and their empowerment
              can bring socio-economic
              and political progress of the country.
            </p>
      

    </div>
    <Obj/>



   <Footer/>
      
  
      
       
    

   




   
    </div>
  
    
  );
}

export default App;
