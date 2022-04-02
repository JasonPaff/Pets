
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import createHost from '../../services/host/createHost'
import updateUserIsHost from '../../services/user/updateUserIsHost'

function CreateHost() {

  const navigate = useNavigate()

  const [host, setHost] = useState({
      "canHostMultiplePets": false,
      "canHostUnspayedFemales": false,
      "doesBoarding": false,
      "doesHouseSitting": false,
      "doesDropInVisits": false,
      "doesDayCare": false,
      "doesDogWalking": false,
      "hasChildren": false,
      "hasOtherPets": false,
      "isHomeFullTime": false,
      "isSmoking": false,
      "sizeCanHost": "All",
      "typeOfHome": "House",
      "typeOfYard": '',
  })





  const handleTextChange = (e) => {
      setHost({
      ...host,
      [e.target.name]: e.target.value,
      })
  }

  const handleBooleanChange = (e) => {
      const { checked } = e.target
      setHost({
        ...host,
        [e.target.name]: checked,
      })
  }

  const handleIntegerChange = (e) => {
      setHost({
      ...host,
      [e.target.name]: parseInt(e.target.value)
      })
  }



  async function handleCreateHost() {
    const response = await createHost(host);
    console.log(response)
    if (response.data.createHost.success) {
      updateUserIsHost(true)
      console.log("Host Created");
      navigate("/profile");
    } else {
      alert(response.data.createHost.message);
    }
  }

  return (
    <div className="flex flex-col px-10 py-4 gap-3">
      <h3 className="text-center text-accent-green">Become Host</h3>
      <div>
        <textarea type="text" placeholder="Cancellation Policy" name="cancellationPolicy" onChange={handleTextChange} />
      </div>
      <div>
        <label htmlFor=""> Can you host multiple pets? </label>
        <input type="checkbox" className=" appearance-none checked:slate-300" name="canHostMultiplePets" onChange={handleBooleanChange} />
      </div>
      <div>
        Can you host unspayed females?
        <input type="checkbox" name="canHostUnspayedFemales" onChange={handleBooleanChange} />
      </div>
      <div>
        <input type="text" placeholder="Days Available" name="daysAvailable" onChange={handleTextChange} />
      </div>
      <div>
        <input type="text" placeholder="Experience with animals" name="experience" onChange={handleTextChange} />
      </div>
      <div>
        Do you have children? <input type="checkbox" name="hasChildren" onChange={handleBooleanChange} />
      </div>
      <div>
        Do you have other pets? <input type="checkbox" name="hasOtherPets" onChange={handleBooleanChange} />
      </div>
      <div>
        Are you home full-time? <input type="checkbox" name="isHomeFullTime" onChange={handleBooleanChange} />
      </div>
      <div>
        Are you a smoker? <input type="checkbox" name="isSmoking" onChange={handleBooleanChange} />
      </div>
      <div>Type can Host</div>
      <div>
        Cat <input type="checkbox" name="doesCat" onChange={handleBooleanChange} />
      </div>
      <div>
        Dog <input type="checkbox" name="doesDog" onChange={handleBooleanChange} />
      </div>
      <div>Size can Host</div>
      <div>
        Small <input type="checkbox" name="canHostSmallPet" onChange={handleBooleanChange} />
      </div>
      <div>
        Medium <input type="checkbox" name="canHostMediumPet" onChange={handleBooleanChange} />
      </div>
      <div>
        Large <input type="checkbox" name="canHostLargePet" onChange={handleBooleanChange} />
      </div>
      <div>
        Giant <input type="checkbox" name="canHostGiantPet" onChange={handleBooleanChange} />
      </div>
      <div>
        <input type="text" placeholder="How far are you willing to work" name="range" onChange={handleIntegerChange} />
      </div>
      <div>
        <input type="text" placeholder="Enter a schedule" name="schedule" onChange={handleTextChange} />
      </div>
      <div>
        <input type="text" placeholder="What is the max number of pets you can host" name="totalCanHost" onChange={handleIntegerChange} />
      </div>
      <div>
        <input type="text" placeholder="Type of Home (House, Apartment, etc)" name="typeOfHome" onChange={handleTextChange} />
      </div>
      <div>
        <input type="text" placeholder="Description of your yard (if applicable)" name="typeOfYard" onChange={handleTextChange} />
      </div>
      <div>
        <input type="text" placeholder="About Me" name="aboutMe" onChange={handleTextChange} />
      </div>
      <button onClick={handleCreateHost}>Register</button>
    </div>
  );
}

export default CreateHost;
