export const Location = () => {
  return (<div>
    <legend className="text-left text-lg font-bold mb-2">Location:</legend>
    <select id="ethnicity" name="location" class="pl-4 relative w-full cursor-default rounded-md bg-white py-4 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
      <option value="Victoria, Australia (Metro)">Victoria, Australia (Metro)</option>
      <option value="Victoria, Australia (Country)">Victoria, Australia (Country)</option>
      <option value="New South Wales, , Australia  (Metro)">New South Wales, Australia  (Metro)</option>
      <option value="New South Wales (Country)">New South Wales (Country)</option>
      <option value="Western Australia (Metro)">Western Australia (Metro)</option>
      <option value="Western Australia (Country)">Western Australia (Country)</option>
      <option value="South Australia (Metro)">South Australia (Metro)</option>
      <option value="South Australia (Country)">South Australia (Country)</option>
      <option value="Queensland (Metro)">Queensland (Metro)</option>
      <option value="Queensland (Country)">Queensland (Country)</option>
      <option value="ACT">ACT</option>
      <option value="NT">NT</option>
      <option value="Tasmania">Tasmania</option>
    </select>
  </div>)
}