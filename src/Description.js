// DO NOT DELETE
import React, { useState } from 'react';
import { DogImage } from './DogImage'

const Description = () => {

  const [url, setUrl] = useState("https://images.dog.ceo/breeds/collie-border/n02106166_6084.jpg")

  const getDogImage = () => {
      fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => setUrl(data.message))
  }


    return (
      <div className='Description'>
        <div className='dog_image_container'>
          <p className='dog_message'>犬の画像を表示するサイトです。</p>
          <DogImage url={url} />
          <br />
        </div>
        <div className='update_button_container'>
          <button className='update_button' onClick={getDogImage}>更新</button>
        </div>
      </div>
    )
  }

  export { Description }
