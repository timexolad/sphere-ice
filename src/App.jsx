import { Ourprocess } from "./components/Ourprocess"
import { OurSphere } from "./components/Oursphere"
import { Navbar } from "./layout/Navbar"
import { Delivery } from "./sections/Delivery"
import { Hero } from "./sections/Hero"
import { Spheres } from "./sections/Spheres"
import Trade from "./sections/Trade"


function App() {


  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
       <OurSphere/>
       <Ourprocess/>
        <Delivery />
        <Trade />
        <Spheres />
      </main>
    </div>
  )
}

export default App
