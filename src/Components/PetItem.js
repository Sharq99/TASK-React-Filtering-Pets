import React, { useState } from 'react';

function PetItem({ pet, handleAdopt }) {
  const [petimage, setPetImage] = useState(pet.image);
  
  const turnGIF = () => {
    setPetImage(pet.image2);
  } 

  return (
    <div className="col-lg-4 col-md-8 col-sm-10">
      <div className="single-doctor">
        <img className="image" alt={pet.name} src={petimage} />
        <div className="content">
          <h3>{pet.name}</h3>
          <button type="button" onClick={turnGIF} className="btn btn-info">
            Pet
          </button>
          <button type="button" onClick={() => handleAdopt(pet.id)} class="btn btn-info  m-2">
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetItem;
