import React from "react";
import {View, TouchableOpacity, Image, StyleSheet, Text} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {IMG_URL} from "../../config/api.contants";

const Movie = ({movie, onPress}) => {
  const img_url = `${IMG_URL}w185/${(movie.backdrop_path || movie.poster_path)}`;
  const releaseYear = `${movie.release_date.split("-")[0]}`;
  return (
    <TouchableOpacity style={[styles.movie]} onPress = {onPress(movie.id)}>
      <Image
        source={{uri: img_url}}
        style={styles.img}
      />
      <View style={[styles.movieDetails]}>
        <Text style={styles.title}>{`${movie.original_title} (${releaseYear})`}</Text>
        <View style={{flexDirection: "row", justifyContent: "flex-start"}}>
          <Icon name="md-star" size={24} color="#000000"/>
          <Text style={{fontSize: 18, paddingHorizontal: 5}}>
            {movie.vote_average}
          </Text>
        </View>
        <Text numberOfLines={2}> {movie.overview}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    movie: {
      borderBottomWidth: 1,
      padding: 5,
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      borderColor: '#ddd',
      position: 'relative'
    },
    movieDetails: {
      flex: 1,
      padding: 10
    },
    title: {
      fontWeight: "bold",
      fontSize: 16
    },
    img: {
      height: 100,
      width: 100
    }
  }
);


export default Movie;