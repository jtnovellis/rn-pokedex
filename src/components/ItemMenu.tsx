import { View, Text, StyleSheet } from 'react-native';

interface ItemMenuProps {
  title: string;
  text: string | undefined | null;
}

export default function ItemMenu({ title, text }: ItemMenuProps) {
  return (
    <View style={styles.itemMenu}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemMenu: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#cfcfcf',
  },
  title: {
    fontWeight: 'bold',
    paddingRight: 10,
    width: 120,
  },
  text: {},
});
