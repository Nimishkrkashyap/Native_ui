import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Card = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',}}
        style={styles.image}
      />
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
    paddingHorizontal: 10
  },
  image: {
    height: 100,
    width: '25%',
    backgroundColor: 'teal',
    borderRadius: 10
  },
  descrition: {
    paddingTop: '6%',
    color: 'black',
    height: 100,
    fontSize: 20,
    width: '70%',
  },
});
