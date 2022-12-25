import { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { getOnePokemon, getPokemons } from '../api/pokemon';
import PokemonList from '../components/PokemonList';
import { PokemonType } from '../types';

export default function HomeScreen() {
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);
  const [nextUrl, setNextUrl] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      fetchPokemons();
    })();
  }, []);

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons(nextUrl);
      setNextUrl(data.next);
      const pokemonsArray: PokemonType[] = [];
      for await (const pokemon of data.results) {
        const pokemonDetail = await getOnePokemon(pokemon.url);
        pokemonsArray.push({
          id: pokemonDetail.id,
          name: pokemonDetail.name,
          type: pokemonDetail.types[0].type.name,
          order: pokemonDetail.order,
          image: pokemonDetail.sprites.other['official-artwork'].front_default,
        });
      }
      setPokemons((prev) => [...prev, ...pokemonsArray]);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <SafeAreaView>
      <PokemonList
        nextUrl={nextUrl}
        pokemons={pokemons}
        fetchPokemons={fetchPokemons}
      />
    </SafeAreaView>
  );
}
