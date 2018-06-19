import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import MovieList from "./src/components/MovieList";
import { Constants } from 'expo';




export default class App extends React.Component {

  render() {
    console.disableYellowBox = true;
    return (
      <MovieList />
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop: Constants.statusBarHeight,
  }
});