// DO NOT DELETE
import React, { useEffect, useState } from "react"
import { BreedsSelect } from "./BreedsSelect"

const DogListContainer = () => {

    const [breeds, setBreeds] = useState([])
    const [selectedBreed, setSelectedBreed] = useState('Select')
    const [selectedBreedList, setSelectedBreedList]= useState([])
        
    
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(data => setBreeds(
            Object.keys(data.message))
            )
    }, [])

    const handleBreedChange = (event) => {
        setSelectedBreed(event.target.value)
    }
    
    return (
        <BreedsSelect breeds={breeds} selectedBreed={selectedBreed} handleBreedChange={handleBreedChange} selectedBreedList={selectedBreedList} setSelectedBreedList={setSelectedBreedList} />
    )
}

export { DogListContainer }