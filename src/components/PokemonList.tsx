import { Text, FlatList, StyleSheet } from 'react-native';
import { PokemonType } from '../types';
import PokemonCard from './PokemonCard';

interface PokemonListProps {
  pokemons: PokemonType[];
}

export default function PokemonList({ pokemons }: PokemonListProps) {
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContainer}
    />
  );
}

const styles = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: 5,
  },
});
