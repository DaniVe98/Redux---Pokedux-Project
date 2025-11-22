import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
  return (
    <div className="pokemon-grid">
      {pokemons.map((pokemon) => {
        if (!pokemon) return null;

        return (
          <PokemonCard
            name={pokemon.name}
            key={pokemon.id}
            image={pokemon.sprites?.front_default}
            types={pokemon.types}
            id={pokemon.id}
            favorite={pokemon.favorite}
          />
        );
      })}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: [],
};

export default PokemonList;
