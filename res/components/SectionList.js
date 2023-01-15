import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SectionList = ({ items }) => {
  return (
    <View style={styles.list}>
      {items.map(item => (
        <View style={styles.listItem} key={item}>
          <View style={styles.circle} />
          <Text>{item}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {},
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#333',
    marginRight: 8,
  },
});

export default SectionList;