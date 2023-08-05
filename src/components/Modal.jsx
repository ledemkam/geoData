const Modal = ({closeModal,itemsData}) => {
  return (
    <div className="fixed z-10 top-0 left-0 w-full h-full bg-gray-800/95 flex items-center justify-center" onClick={closeModal}>Modal
      <div className="min-w-[500px] relative rounded p-7 bg-gray-50" onClick={e => e.stopPropagation()}>
        <button onClick={closeModal} className="absolute top-2 right-1 w-8 h-8 bg-red-600 text-white rounded flex justify-center items-center hover:bg-red-700 py-1 px-3">x</button>
        <h2 className="text-2xl mb-4"> Hre is {itemsData.name.common}</h2>
        <p className="text-lg mb-2">
            <span className="font-semibold">Languages</span> : {Object.entries(itemsData.languages).map(language => language[1] + "")}
        </p>
        <p className="text-lg mb-2">
            <span className="font-semibold">language(s)</span>: {itemsData.capital[0]}
        </p>
      </div>
    </div>
  )
}
export default Modal