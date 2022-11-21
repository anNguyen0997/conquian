import React from 'react'

export const ModalRules = ({ isVisible, onClose, children }) => {
  if ( !isVisible ) return null;

  const handleClose = (e) => {
    if( e.target.id === 'wrapper') onClose();

  }
  return (
    <>
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' id="wrapper" onClick={(handleClose)}>
      <div className='w-[600px] flex flex-col'>
        <button className='text-white text-xl place-self-end' onClick={() => onClose()}>X</button>
        <div className='bg-white p-2 rounded'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Vq00jSkm96I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
    </>
  )
}


