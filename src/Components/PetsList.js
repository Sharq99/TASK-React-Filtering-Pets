// import petsData from "../petsData";
// import PetItem from "./PetItem";
// import React, { useState } from 'react';

// function PetsList() {
//   const [pets, setPets] = useState(petsData);
  
//   const petList = pets.map((pet) => <PetItem pet={pet} key={pet.id} />);

//   const [query, setQuery] = useState("");
//   const [type, setType] = useState("");

//   let searchPet = (event) => {
//     let petLowerCase = event.target.value.toLowerCase();
//     setQuery(petLowerCase);

//     let qPets = pets.filter(P => P.type.toLowerCase().includes(query));
//     //qPets = 
//   }

//   let selectPet = (event) => {
//     setType(event);

//     let fPets = pets.filter((P) => P.type === type);
//     console.log(fPets);
//   }

//   let handleAdopt = (adoptID) => {
//     let index = pets.findIndex(x => x.id === adoptID);
//     pets.splice(index, 1);
//   }

//   return (
//     <section id="doctors" className="doctor-section pt-140">
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-xxl-5 col-xl-6 col-lg-7">
//             <div className="section-title text-center mb-30">
//               <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
//                 Fur-ends
//               </h1>
//               <div className="input-group rounded">
//                 <input
//                   type="search"
//                   onChange = {searchPet}
//                   className="form-control rounded"
//                   placeholder="Search"
//                   aria-label="Search"
//                   aria-describedby="search-addon"
//                 />
//               </div>
//               <br />
//               Type:
//               <select className="form-select" onChange = {event => selectPet(event.target.value)}>
//                 <option value="" selected>
//                   All
//                 </option>
//                 <option value="Cat">Cat</option>
//                 <option value="Dog">Dog</option>
//                 <option value="Rabbit">Rabbit</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         <div className="row justify-content-center">{petList}</div>
//       </div>
//     </section>
//   );
// }

// export default PetsList;


import petsData from "../petsData";
import PetItem from "./PetItem";
import React, { useState } from 'react';

function PetsList() {
  const [pets, setPets] = useState(petsData);
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");

  const handleAdopt = (adoptID) => setPets(pets.filter((pet) => pet.id !== adoptID));

  const qPets = pets.filter((pet) => pet.name.toLowerCase().includes(query.toLowerCase()) && pet.type.includes(type)).map((pet) => <PetItem pet={pet} key={pet.id} handleAdopt={handleAdopt} />);
  
  const petList = pets.map((pet) => <PetItem pet={pet} key={pet.id} handleAdopt={handleAdopt}/>);

  
  

  let searchPet = (event) => {
    // let petLowerCase = event.target.value.toLowerCase();
    // setQuery(petLowerCase);
    setQuery(event.target.value);

    //let qPets = pets.filter(P => P.type.toLowerCase().includes(query)); 
  }

  let selectPet = (event) => {
    setType(event);

    let fPets = pets.filter((P) => P.type === type);
    console.log(fPets);
  }

  

  return (
    <section id="doctors" className="doctor-section pt-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div className="section-title text-center mb-30">
              <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
              <div className="input-group rounded">
                <input
                  type="search"
                  onChange = {searchPet}
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
              </div>
              <br />
              Type:
              <select className="form-select" onChange = {event => selectPet(event.target.value)}>
                <option value="" selected>
                  All
                </option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Rabbit">Rabbit</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">{qPets}</div>
      </div>
    </section>
  );
}

export default PetsList;
