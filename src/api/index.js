import axios from 'axios';

export const getPokemon = () => {
  return axios
  .get('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(res => res.data.results)
  .catch(err => console.log(err));
};

export const getPokemonDetails = async (pokemon) => {
  try {
    const res = await axios.get(pokemon.url);
    return res.data;
  } catch (err) {
    console.log("❌ Error cargando Pokémon:", pokemon);
    return null;  
  }
};
