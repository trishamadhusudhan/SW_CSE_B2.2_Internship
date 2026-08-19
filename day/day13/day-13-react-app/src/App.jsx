import { Welcome } from "./components/P1";
import { ProductCard } from "./components/P2";
import headphones from "./assets/sony.jpg";
import './App.css'
function App() {
  
  return (
    <>
     <Welcome name="Trisha"/>
     <ProductCard 
    //  name="Sony ULT Wear Noise Cancellation Wireless Bluetooth Over Ear Headphones with Massive Bass"
     price={15999}
    //  image="https://m.media-amazon.com/images/I/610DB8Cwm7L._SY450_.jpg" 
     image={headphones} 
     />
     
    </>
  )
}

export default App