export const Relationship = () => {
  return (
    <div>
      <legend className="text-left text-lg font-bold mb-2">Relationship:</legend>
      <div className="flex flex-row flex-wrap gap-4">
        <div className="flex-auto basis-1/4 flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
          <input id="number-of-people-radio-1" type="radio" value="Single" name="relationship" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
          <label htmlFor="number-of-people-radio-1" className="w-full py-4 ml-2 text-sm font-medium text-gray-900">Single</label>
        </div>
        <div className="flex-auto basis-1/4 flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
          <input id="number-of-people-radio-2" type="radio" value="Married" name="relationship" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
          <label htmlFor="number-of-people-radio-2" className="w-full py-4 ml-2 text-sm font-medium text-gray-900">Married</label>
        </div>
        <div className="flex-auto basis-1/4 flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
          <input id="number-of-people-radio-3" type="radio" value="De facto" name="relationship" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
          <label htmlFor="number-of-people-radio-3" className="w-full py-4 ml-2 text-sm font-medium text-gray-900">De facto</label>
        </div>
        <div className="flex-auto basis-1/4 flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
          <input id="number-of-people-radio-4" type="radio" value="civil partnership" name="relationship" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
          <label htmlFor="number-of-peopleradio-4" className="w-full py-4 ml-2 text-sm font-medium text-gray-900">civil partnership</label>
        </div>
        <div className="flex-auto basis-1/4 flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
          <input id="number-of-people-radio-5" type="radio" value="separated or divorced" name="relationship" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
          <label htmlFor="number-of-people-radio-5" className="w-full py-4 ml-2 text-sm font-medium text-gray-900">separated or divorced</label>
        </div>
        <div className="flex-auto basis-1/4 flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
          <input id="number-of-people-radio-6" type="radio" value="widowed" name="relationship" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
          <label htmlFor="number-of-people-radio-6" className="w-full py-4 ml-2 text-sm font-medium text-gray-900">widowed</label>
        </div>
      </div>
    </div>
  )
}