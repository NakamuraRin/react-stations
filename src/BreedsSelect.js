// DO NOT DELETE
import * as React from 'react'

const BreedsSelect = ({breeds, selectedBreed, setSelectedBreedList, handleBreedChange, selectedBreedList}) => {

    const breedsList = []

    for (let i = 0; i < breeds.length; i++) {
        breedsList.push(
            <option value={breeds[i]}>{breeds[i]}</option>
        )
    }

    const getBreedImage = async () => {
        if (selectedBreed === 'Select') {
            return;
        }

        await fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/12`)
            .then(response => response.json())
            .then(data => setSelectedBreedList(data.message))

    }

    const breedImageList = []

    for (let i = 0; i < selectedBreedList.length; i++) {
        breedImageList.push(
            <img src={selectedBreedList[i]} className='breed_image' alt='犬の画像' />
        )
    }

    return (
        <div className='breed_image_container'>
            <div className='breeds_list_container'>
                <label className='breeds_list_label'>
                    Breeds List
                    <select value={selectedBreed} onChange={handleBreedChange} className='breeds_list'>
                        <option selected value={'Select'}>Select</option>
                        {breedsList}
                    </select>
                    <button className='display_button' onClick={getBreedImage}>表示</button>
                </label>
            </div>
            <div className='breeds_image_list'>
                {breedImageList}
            </div>
        </div>
    )

}

export { BreedsSelect }