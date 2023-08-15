// DO NOT DELETE
import * as React from 'react'

const DogImage = ({url}) => {

    return (
        <img src={url} className='dog_image' alt='犬の画像'></img>
    )
}

export { DogImage }