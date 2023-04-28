import './App.css';
import { fetchGeneratedImages } from './fetchOpenAi';
import { useEffect, useState } from 'react';
import {Ethnicity} from './ethnicity';
import {Relationship} from './relationship';
import {Location} from './location'

function App() {
  const [images, setImages] = useState(null);

  const fetchImageHandler = (e) => {
    fetchGeneratedImages()
      .then(data => {
        const retVal = data.map((image) => {
          return image.url;
        })
        setImages(retVal);
      })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const formElem = document.getElementById("ai-form");
    const formData = new FormData(formElem);
    const payload = Object.fromEntries(formData.entries())
    const sentence = `A photorealistic image with a happy ${payload.number} ${payload.ethnicity} people who is ${payload.age}, ${payload.gender}, ${payload.lendingType}, ${payload.relationship}, ${payload.location}, inside a ${payload.setting} `
    fetchGeneratedImages(sentence)
    .then(data => {
      const retVal = data.map((image) => {
        return image.url;
      })
      setImages(retVal);
    })
  }
  return (
    <div>
      <h1 className="mt-4 mb-4 pb-12 text-3xl font-bold text-center border-solid border-1 border-grey-500">
      Pied Painter
      </h1>
      <div className="App">
      <div className="flex gap-8">
        <form className="flex-1 space-y-6" onSubmit={onSubmit} id="ai-form">
          <div>
            <legend className="text-left text-lg font-bold mb-2">Gender:</legend>
            <select id="small" name="gender" className="block w-full px-4 py-3 text-base mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Non binary">Neutral</option>
              <option value="DE">They</option>
            </select>
          </div>
          <div>
            <legend className="text-left text-lg font-bold mb-2">Number of people:</legend>
            <select id="small" name="number" className="block w-full px-4 py-3 text-base mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="Several">Several</option>
            </select>
          </div>
          <div>
            <legend className="text-left text-lg font-bold mb-2">Age:</legend>
            <select id="small" name="age" className="block w-full px-4 py-3 text-base mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="18 year old">18</option>
              <option value="20 year old">20s</option>
              <option value="30 year old">30s</option>
              <option value="40 year old">40s</option>
              <option value="50 year old">50s</option>
              <option value="60 year old">60s</option>
            </select>
          </div>
          <div>
            <legend className="text-left text-lg font-bold mb-2">Lending type:</legend>
            <select id="small" name="lendingType" className="block w-full px-4 py-3 text-base mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="" selected disabled hidden>Select lending type</option>
              <option value="First home">First home</option>
              <option value="Second home">Second home</option>
              <option value="Refinance">Refinance</option>
              <option value="Investment">Investment</option>
              <option value="Car loan">Car loan</option>
              <option value="Business loan">Business loan</option>
              <option value="Vacant land">Vacant land</option>
            </select>
          </div>
          <div>
            <legend className="text-left text-lg font-bold mb-2">Setting:</legend>
            <select id="small" name="setting" className="block w-full px-4 py-3 text-base mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="" selected disabled hidden>Select setting</option>
              <option value="Tiny house">Tiny house</option>
              <option value="Apartment">Apartment</option>
              <option value="New house">New house</option>
              <option value="Established house">Established house</option>
              <option value="Mansion">Mansion</option>
              <option value="Vacant land">Vacant land</option>
            </select>
          </div>
          <Ethnicity />
          <Relationship />
          <Location />
          <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Generate</button>
        </form>
        <div className="flex-1">
          <div className='h-full rounded-lg flex items-center justify-center bg-gray-200 mb-4'>
          {images && images.length > 0 ? images.map((image) => (
          <img width="256" height="256" alt="" src={image} key={image}/>
        )) : null} 
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
