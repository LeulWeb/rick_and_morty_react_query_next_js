import Axios from 'axios';

export let getAllCharacters = async ({ queryKey }) => {

    let result = await Axios.get(`https://rickandmortyapi.com/api/character?page=${queryKey[1].page}`)
    return await result.data
}

