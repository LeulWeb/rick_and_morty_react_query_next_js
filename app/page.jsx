'use client'
import Image from 'next/image'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import CharacterCard from '@/components/CharacterCard'
import Container from '@/components/Container'
import Loading from '@/components/Loading'
import { getAllCharacters } from '@/services/characters'
import { useState } from 'react'


export default function Home() {
  let [page, setPage] = useState(1)

  let { data, isLoading, error, isPlaceholderData } = useQuery({
    queryKey: ['character', { page: page }],
    placeholderData: keepPreviousData,
    queryFn: getAllCharacters,
  })

  if (isLoading) return <Loading />
  if (error) return <div>Error  {error.message}  </div>

  return (





    <section>



      <Container>

        <h1 className='text-center font-semibold text-4xl py-4 '>Rick & Morty </h1>



        <h6>{data.info.count} Characters</h6>
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {
            data && data.results.map((char) => {
              return <CharacterCard key={char.id} character={char} />
            })
          }
        </section>



        <div className="join py-4">
          <button disabled={data.info.prev == null} onClick={() => setPage(page - 1)} className="join-item btn">«</button>
          <button className="join-item btn">Page {page}</button>
          <button disabled={data.info.next == null || isPlaceholderData} onClick={() => setPage(page + 1)} className="join-item btn">»</button>
        </div>

      </Container>
    </section>
  )
}



/* 
  using pagination with react query




*/