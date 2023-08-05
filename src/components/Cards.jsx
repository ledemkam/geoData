import { useState } from "react"
import { createPortal } from "react-dom"
import Modal from "./Modal"



const Cards = ({itemsData}) => {
  const[showModal,setShowModal] = useState(false)

  return (
 <>
      <li className="relative cursor-pointer rounded reounded transitiom-transform duration-300 hover:-translate-y-1 will-change-transform" onClick={()=>setShowModal(!showModal)}> 
        <h2 className="absolute left-0 top-0 p-2 bg-gray-50 drop-show-[2px_2px_1pc_rgba(0,0,0,0.5)] text-xl rounded">{itemsData.name.common}</h2>
         <img src={itemsData.flag} alt=""  className="w-full h-full object-cover rounded"/>
    </li>
    {showModal && createPortal(<Modal closeModal={()=>setShowModal(!showModal)} itemsData={itemsData}/>,
          document.body)}
</>
     
  )
}
export default Cards