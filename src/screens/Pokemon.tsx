import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, Text } from 'react-native';
import { RootStackParamList } from '../navigation/HomeScreenNavigation';
import { getPokemonDetail } from '../api/pokemon';
import { useEffect, useState } from 'react';
import { PokemonType } from '../types';
import Header from '../components/Pokemon/Header';

type PokemonProps = NativeStackScreenProps<RootStackParamList, 'Pokemon'>;

export default function Pokemon({
  navigation,
  route: { params },
}: PokemonProps) {
  const [pokemon, setPokemon] = useState<any | null>(null);

  useEffect(() => {
    if (params) {
      (async () => {
        try {
          const data = await getPokemonDetail(params.pokemonId);
          setPokemon(data);
        } catch (e) {
          navigation.goBack();
        }
      })();
    }
  }, [params]);

  if (!pokemon) return null;

  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other['official-artwork'].front_default}
        type={pokemon.types[0].type.name}
      />
    </ScrollView>
  );
}
