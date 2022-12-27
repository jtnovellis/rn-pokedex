import { useCallback, useState } from 'react';
import { getFavPoke } from '../api/favorite';
import { getPokemonDetail } from '../api/pokemon';
import useAuth from '../hooks/useAuth';
import { PokemonType } from '../types';
import PokemonList from '../components/PokemonList';
import { useFocusEffect } from '@react-navigation/native';
import NotLogged from '../components/ NotLogged';

export default function FavoriteScreen() {
  const [favsPoke, setFavsPoke] = useState<PokemonType[] | []>([]);
  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const res = await getFavPoke();
          const pokemonsArray: PokemonType[] = [];
          for await (const pokemonId of res) {
            const pokemonDetail = await getPokemonDetail(pokemonId);
            pokemonsArray.push({
              id: pokemonDetail.id,
              name: pokemonDetail.name,
              type: pokemonDetail.types[0].type.name,
              order: pokemonDetail.order,
              image:
                pokemonDetail.sprites.other['official-artwork'].front_default,
            });
          }
          setFavsPoke(pokemonsArray);
        })();
      }
    }, [auth])
  );

  return !auth ? <NotLogged /> : <PokemonList pokemons={favsPoke} />;
}
