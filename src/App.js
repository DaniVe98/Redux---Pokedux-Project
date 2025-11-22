import { useEffect } from 'react';
import { Col, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo from './statics/logo.svg';
import { fetchPokemonsWithDetails } from './slices/dataSlice';
import './App.css';

function App() {
const { pokemons, search } = useSelector((state) => state.data);

const filteredPokemons = pokemons.filter((pokemon) =>
  pokemon.name.toLowerCase().includes(search)
);

  const loading = useSelector((state) => state.ui.loading);

  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(fetchPokemonsWithDetails());
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);


  return (
    <div className='App'>
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? (
        <Col offset={12}>
          <Spin spinning size='large' />
        </Col>
      ) : (
        <PokemonList pokemons={filteredPokemons} />

      )}
    </div>
  );
}

export default App;