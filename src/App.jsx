import { useEffect } from "react"
import { useState } from "react"
import Cards from "./components/Cards"

function App() {
   const[country,setCountry] = useState(null)

   useEffect(() =>{
      fetch("https://restcountries.com/v3.1/region/europe")
      .then(response => response.json())
      .then(data => {
        data.sort((a,b) => {
          if(a.name.common < b.name.common){
            return -1
          }else if(a.name.common > b.name.common){
            return 1
          }else{
            return 0
          }
        })
        setCountry(data)})
      
   },[])
  return (
    <div className="min-h-screen bg-slate-800">
           <div className="max-xl-7xl mx-auto py-20 px-4">
           <h1 className="text-gray-50 text-4xl">Europe Country Etat</h1>
           <p className="text-gray-100 text-xl mb-8">click on Card for more informations</p>
          {country && (
                            <ul className="grid min-[450px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 auto-rows-[200px]">
              {country.map((itemes,index) => ( 
                                   <Cards key={index} itemsData = {itemes} />
               ))}
                          </ul>)}
           </div>
    </div>
  )
}

export default App
