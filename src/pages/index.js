import { useState } from "react"
import axios from "axios"

export default function Home() {

  const [search, setSearch] = useState("")

  function setSearchtags(e){
    setSearch(e.target.value)
  }

  const handlesearch = async function(){
    const data = {
      search: search
    }
    const res = await axios.post('http://localhost:5080/search', data)
    console.log(res.data.search)
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="h-1/2 flex flex-col items-center">
        <text className="text-4xl font-Quicksand m-4">Step into the next generation ✨</text>

        <div className='m-4 mt-20 flex text-black'>
            <input className="block p-2 w-96 text-black rounded-l-lg bg-gray-50 sm:text-md focus:ring-sky-600 focus:border-sky-600 dark:bg-gray-200 dark:placeholder-gray-400" type='text' placeholder='peek in' value={search} onChange={setSearchtags} />

            <button className='bg-white rounded-r-lg bg-sky-600 p-4 text-white' onClick={handlesearch}>⌲</button>
        </div>
      </div>
    </div>
  )
}
