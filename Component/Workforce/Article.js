import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Article = () => {
  return (
    <View>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          }}
          style={{height:400, width:400}}
        />
      <View style={styles.bottom}></View>
    </View>
  );
};

export default Article;

const styles = StyleSheet.create({});
