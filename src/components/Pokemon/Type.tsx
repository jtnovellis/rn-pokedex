import { View, Text, StyleSheet } from 'react-native';
import { capitalize, map } from 'lodash';
import { getColorByPokemon } from '../../utils/getColorByPokemon';

interface TypeProps {
  types: any[];
}

export default function Type({ types }: TypeProps) {
  return (
    <View style={styles.content}>
      {map(types, (item, i) => (
        <View
          key={i}
          style={{
            ...styles.pill,
            backgroundColor: getColorByPokemon(item.type.name),
          }}
        >
          <Text>{item.type.name}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
  },
});
