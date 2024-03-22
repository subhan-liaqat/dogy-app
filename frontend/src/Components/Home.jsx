import React from 'react'

export default function Home() {
  return (
    <>
      <section className=' h-screen flex gap-8 m-16'>
        <div className=' flex-1 rounded-lg h-screen p-1 bg-bg_Color border-2 border-border_Color'>
          Left
        </div>
        <div className='flex-1 h-screen bg-red-500 rounded-lg'>
          Right Map
        </div>
      </section>
    </>
  )
}
