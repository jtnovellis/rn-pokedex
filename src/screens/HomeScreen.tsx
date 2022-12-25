import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { getOnePokemon, getPokemons } from '../api/pokemon';
import PokemonList from '../components/PokemonList';
import { PokemonType } from '../types';

export default function HomeScreen() {
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getPokemons();

        const pokemonsArray: PokemonType[] = [];
        for await (const pokemon of data.results) {
          const pokemonDetail = await getOnePokemon(pokemon.url);
          pokemonsArray.push({
            id: pokemonDetail.id,
            name: pokemonDetail.name,
            type: pokemonDetail.types[0].type.name,
            order: pokemonDetail.order,
            image:
              pokemonDetail.sprites.other['official-artwork'].front_default,
          });
        }
        setPokemons((prev) => [...prev, ...pokemonsArray]);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <View>
      <PokemonList pokemons={pokemons} />
    </View>
  );
}
