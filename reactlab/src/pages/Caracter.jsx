import { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Caracter() {
    const [character, setCharacter] = useState(" ");

    let { id } = useParams();
    useEffect(() => {
        axios.get(`https://6657369e9f970b3b36c865b0.mockapi.io/Images/${id}`)
            .then(function (response) {
                console.log(response);
                setCharacter(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])
    return (
        <>
            <div className='bg-pink-800 flex justify-center items-center h-screen max-sm:h-screen max-sm:pt-16'>
                <div className="flex flex-col items-center justify-evenly  bg-white shadow-lg rounded-lg  w-[90%] h-[80%] max-w-sm mx-auto ">
                    <div className='h-[50%] flex justify-center items-center'>
                    <img
                        src={character.image}
                        alt={character.name}
                        className="w-full h-[80%] rounded-lg mb-4"
                    />
                    </div>
                    <div className="flex flex-col items-start h-[48%]  w-[90%] max-w-sm mx-auto ">
                        <h3 className="text-xl items-start font-semibold text-pink-500 mb-1">Name: <span className="font-normal text-black">{character.name}</span></h3>
                        <h3 className="text-lg font-bold text-pink-500 mb-1">Hair: <span className="font-normal text-black">{character.hair}</span></h3>
                        <h3 className="text-lg font-bold text-pink-500 mb-1">Status: <span className="font-normal text-black">{character.status}</span></h3>
                        <h3 className="text-lg font-bold text-pink-500 mb-1">Species: <span className="font-normal text-black">{character.species}</span></h3>
                        <h3 className="text-lg font-bold text-pink-500 mb-1">Gender: <span className="font-normal text-black ">{character.gender}</span></h3>
                        <h3 className="text-lg font-bold text-pink-500 mb-1">Origin: <span className="font-normal text-black">{character.origin}</span></h3>
                    </div>
                </div>

            </div>
        </>
    )
}
