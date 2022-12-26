import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Platform,
} from 'react-native';
import { PokemonType } from '../types';
import PokemonCard from './PokemonCard';

interface PokemonListProps {
  pokemons: PokemonType[];
  fetchPokemons: () => Promise<void>;
  nextUrl: string | null;
}

export default function PokemonList({
  pokemons,
  fetchPokemons,
  nextUrl,
}: PokemonListProps) {
  function loadPokemons() {
    if (nextUrl) {
      fetchPokemons();
    }
  }

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContainer}
      onEndReached={loadPokemons}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        <ActivityIndicator
          size='large'
          style={styles.spinner}
          color='#aeaeae'
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === 'android' ? 30 : 0,
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === 'android' ? 90 : 60,
  },
});
