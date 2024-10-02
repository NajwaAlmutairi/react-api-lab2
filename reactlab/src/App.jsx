import { useState } from 'react'
import './App.css'
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function App() {
  const [images, setImages] = useState([])

  useEffect(() => {
    axios.get('https://6657369e9f970b3b36c865b0.mockapi.io/Images/')
      .then(function (response) {
        console.log(response);
        setImages(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])
  return (
    <>

      {/*  */}
      <div className='bg-pink-800'>
      <h1 className="text-5xl font-bold text-center py-6 text-red-200">IMAGES</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] mx-auto'>
          {images.map((ele, index) => {
            return (
              <div key={index}>
                <div className='border-red-200 border-2 transition-transform duration-300 hover:scale-105'>
                  <Link to={`/character/${ele.id}`}>
                    <img src={ele.image} className='w-full' />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/*  */}
    </>
  )
}

export default App
