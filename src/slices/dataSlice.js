import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemon, getPokemonDetails } from '../api';
import { setLoading } from './uiSlice';

const initialState = {
  pokemons: [],
  search: "",
};

export const fetchPokemonsWithDetails = createAsyncThunk(
  'data/fetchPokemonsWithDetails',
  async (_, { dispatch }) => {
    dispatch(setLoading(true));

    const pokemonsRes = await getPokemon();

    const pokemonsDetailed = await Promise.all(
      pokemonsRes.map((pokemon) => getPokemonDetails(pokemon))
    );

    dispatch(setPokemons(pokemonsDetailed.filter(p => p)));

    dispatch(setLoading(false));
  }
);

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setFavorite: (state, action) => {
      const index = state.pokemons.findIndex(
        (pokemon) => pokemon.id === action.payload.pokemonId
      );
      if (index >= 0) {
        state.pokemons[index].favorite = !state.pokemons[index].favorite;
      }
    },
  },
});

export const { setFavorite, setPokemons, setSearch } = dataSlice.actions;
export default dataSlice.reducer;
