import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native";
import {API_TOKEN, API_URL} from "../config/api.contants";
import axios from "axios";


export default class MovieDetails extends Component {

  state = {
    movie: {}
  }

  static navigationOptions = {
    title: "Movie Details"
  };

  componentDidMount() {
    const {id} = this.props;
    const url = `${API_URL}movie/${id}?api_key=${API_TOKEN}`
    axios.get(url).then((data) => {
      console.log("-----------------------------");
      console.log(data);
    }).catch(() => {
      console.log("Error While getting Details");
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Movie Details
        </Text>
      </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

