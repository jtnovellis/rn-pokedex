import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView } from 'react-native';
import { RootStackParamList } from '../navigation/HomeScreenNavigation';
import { getPokemonDetail } from '../api/pokemon';
import { useEffect, useState } from 'react';
import Header from '../components/Pokemon/Header';
import Type from '../components/Pokemon/Type';
import Stats from '../components/Pokemon/Stats';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Favorite from '../components/Pokemon/Favorite';
import useAuth from '../hooks/useAuth';

type PokemonProps = NativeStackScreenProps<RootStackParamList, 'Pokemon'>;

export default function Pokemon({
  navigation,
  route: { params },
}: PokemonProps) {
  const [pokemon, setPokemon] = useState<any | null>(null);
  const { auth } = useAuth();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => auth && <Favorite id={pokemon?.id} />,
      headerLeft: () => (
        <Icon
          name='arrow-left'
          color='#fff'
          size={20}
          style={{ marginLeft: 20 }}
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, [navigation, params, pokemon]);

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
      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  );
}
