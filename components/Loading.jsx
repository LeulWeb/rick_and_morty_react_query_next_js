import React from 'react'

const Loading = () => {
    return (
        <div className='w-full h-screen flex flex-col items-center justify-center'>
            <p className="text-3xl font-semibold">Rick & Morty <span className='text-lg font-normal'>Characters</span></p>
            <hr />
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    )
}

export default Loading