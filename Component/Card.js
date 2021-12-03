import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Card = () => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.descrition}>
        Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
      </Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  image: {
    height: 200,
    width: 250,
    backgroundColor: 'teal',
    borderRadius: 10,
  },
  descrition: {
    paddingTop: '6%',
    color: 'black',
    height: 100,
    fontSize: 20,
    width: '70%',
  },
});
