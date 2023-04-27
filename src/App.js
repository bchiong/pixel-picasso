import './App.css';
import { fetchGeneratedImages } from './fetchOpenAi';
import { useEffect, useState } from 'react';

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
    e.preventDefault();
  }
 
  useEffect(() => {
  }, [])

  return (
    <div>
      <h1 className="mt-4 mb-4 pb-12 text-3xl font-bold text-center border-solid border-1 border-grey-500">
      Pixel Picasso
      </h1>
      <div className="App">
      <div className="flex gap-8">
        <form className="flex-1">
          <legend className="text-left text-lg font-bold mb-2">Number of people:</legend>
          <div className="flex flex-row flex-wrap gap-4">
            <div class="flex-auto basis-1/4 flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
              <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <label for="bordered-radio-1" class="w-full py-4 ml-2 text-sm font-medium text-gray-900">Option 1</label>
            </div>
            <div class="flex-auto basis-1/4 flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
              <input checked id="bordered-radio-2" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <label for="bordered-radio-2" class="w-full py-4 ml-2 text-sm font-medium text-gray-900">Option 2</label>
            </div>
            <div class="flex-auto basis-1/4 flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
              <input checked id="bordered-radio-2" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <label for="bordered-radio-2" class="w-full py-4 ml-2 text-sm font-medium text-gray-900">Option 3</label>
            </div>
            <div class="flex-auto basis-1/4 flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
              <input checked id="bordered-radio-2" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <label for="bordered-radio-2" class="w-full py-4 ml-2 text-sm font-medium text-gray-900">Option 4</label>
            </div>
            <div class="flex-auto basis-1/4 flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
              <input checked id="bordered-radio-2" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <label for="bordered-radio-2" class="w-full py-4 ml-2 text-sm font-medium text-gray-900">Option 5</label>
            </div>
            <div class="flex-auto basis-1/4 flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
              <input checked id="bordered-radio-2" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <label for="bordered-radio-2" class="w-full py-4 ml-2 text-sm font-medium text-gray-900">Option 6</label>
            </div>
          </div>
        </form>
        <div className="flex-1">
          <div className='h-full rounded-lg flex items-center justify-center bg-gray-200 mb-4'>Result Box</div>
          {images && images.length > 0 ? images.map((image) => (
          <img width="256" height="256" alt="" src={image} key={image}/>
        )) : null} 
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={(event) => fetchImageHandler(event)}>Generate</button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
