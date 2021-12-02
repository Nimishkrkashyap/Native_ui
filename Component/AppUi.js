import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
// import Feather from 'react-native-vector-icons/Feather';
import Card from './Card';

const AppUi = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.header}>
        <Text style={styles.menuIcon}>Entertainmet</Text>
        <Text style={styles.menuIcon}>Education</Text>
        <Text style={styles.menuIcon}>Health</Text>
        <Text style={styles.menuIcon}>Finance</Text>
        <Text style={styles.menuIcon}>Entertainmet</Text>
        <Text style={styles.menuIcon}>Finance</Text>
      </ScrollView>
      <View style={styles.line}></View>
      <ScrollView style={styles.Articles}>
        <Card style={styles.cardStyle} />
        <Card style={styles.cardStyle} />
        <Card style={styles.cardStyle} />
        <Card style={styles.cardStyle} />
        <Card style={styles.cardStyle} />
        <Card style={styles.cardStyle} />
        <Card style={styles.cardStyle} />
        <Card style={styles.cardStyle} />
      </ScrollView>
    </View>
  );
};

export default AppUi;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    // width: '100%',
  },
  header: {
    // paddingHorizontal: 20,
    paddingBottom: 10,
    height: 60,
    // width: '100%',
    backgroundColor: 'lightgrey',
    flexDirection: 'row',
    // alignItems: 'flex-end',
    // justifyContent: 'center',
  },
  menuIcon: {
    color: 'black',
    fontSize: 25,
    marginHorizontal: 5,
  },
  line: {
    height: 1.2,
    width: '100%',
    backgroundColor: 'grey',
  },
  Articles: {
    padding: 5
  }
});
