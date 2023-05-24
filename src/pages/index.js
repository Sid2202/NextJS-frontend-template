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

  const handleapi = async function(){
    const data ={
      "bitche": "bitche"
    }
    const res = await axios.post('http://localhost:5080/add_user', data)
    console.log(res.data)
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="h-1/2 w-1/2 flex flex-col items-center">
        <text className="text-4xl font-Quicksand m-4">Step into the next generation ✨</text>

        <div className='m-4 mt-20 flex text-black'>
          <input className="block p-2 w-96 text-black rounded-l-lg bg-gray-50 sm:text-md focus:ring-sky-600 focus:border-sky-600 dark:bg-gray-200 dark:placeholder-gray-400" type='text' placeholder='peek in' value={search} onChange={setSearchtags} />

          <button className='bg-sky-600 rounded-r-lg bg-sky-600 p-4 text-white' onClick={handlesearch}>⌲</button>
        </div>

        <div className="mt-10">
          <text className="text-white text-lg">
            You are in the middle of the multi-door pathway. The path is yours, and yours alone. It is fully furnished and a red carpet is laid down for you to walk smoothly. But you can walk, only when you know the destination in your brain, and the path to it. 
          </text>
        </div>

      </div>
    </div>
  )
}
