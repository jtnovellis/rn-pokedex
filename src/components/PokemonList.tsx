import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import { getOnePokemon, getPokemons } from '../api/pokemon';
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
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
});
