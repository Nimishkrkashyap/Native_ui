import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen component={Main} name="main" />
    <Stack.Screen component={Home} name="home" />
    </Stack.Navigator>
    </NavigationContainer>
  )
}

const Home = ({navigation}) => {
  return (
    <View>
      <Text style={{color:'black'}}>This is home component</Text>
      <TouchableOpacity onPress={() => navigation.navigate('main')}>
      <Text style={{color:'black'}}> Main</Text>
      </TouchableOpacity>
    </View>
  )
}

const Main = ({navigation}) => {
  return (
    <View>
      <Text style={{color:'black'}}>This is main component</Text>
      <TouchableOpacity onPress={() => navigation.navigate('home')}>
      <Text style={{color:'black'}}> Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
