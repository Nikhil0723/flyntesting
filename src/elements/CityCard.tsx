import React from 'react'

const CityCard = ({city , properties}) => {

    const divStyle: React.CSSProperties = {
        backgroundImage: 'url("https://images.unsplash.com/photo-1490642914619-7955a3fd483c?auto=format&fit=crop&q=80&w=1793&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };

  return (
    <div className=' h-[180px] min-w-[300px] sm:min-w-[180px] lg:w-[300px] rounded-[10px] flex  items-center border justify-center' style={divStyle}>
        <div className='text-center text-white'>
            <h1 className=' text-[25px]'>{city}</h1>
            <p className=' text-[15px]'>{properties} Properties</p>
        </div>
    </div>
  )
}

export default CityCard