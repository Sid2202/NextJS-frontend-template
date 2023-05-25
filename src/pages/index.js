import { useState } from "react"
import axios from "axios"
import { useRouter } from 'next/router'

export default function Home() {

  const router = useRouter()

  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
      <div className="flex top-4 absolute">
        <p onClick={() => {router.push('/')}} className="p-4 text-lg">Home 🏠</p>
        <p onClick={() => {router.push('/form')}} className="p-4 text-lg">Form 📝</p>
        <p onClick={() => {router.push('/database')}} className="p-4 text-lg">Database 🧩</p>
      </div>
      <div className="h-1/2 w-1/2 flex flex-col items-center">
        <p className="text-4xl font-Quicksand m-4">Step into the next generation ✨</p>


        <div className="mt-10">
          <p className="text-white text-lg text-justify">
            You are in the middle of the multi-door pathway. The path is yours, and yours alone. It is fully furnished and a red carpet is laid down for you to walk smoothly. But you can walk, only when you know the destination in your brain, and the path to it. 
          </p>
        </div>

      </div>
    </div>
  )
}
