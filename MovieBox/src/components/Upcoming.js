import React, {Component} from "react";
import {FlatList} from "react-native";
import {API_TOKEN, API_URL} from "../config/api.contants";
import axios from "axios";
import Spinner from "./Spinner";
import Movie from "./common/Movie";

class Upcoming extends Component {

  state = {
    moviesList: [],
    totalPages: 0,
    currentPage: 1,
    loading: false
  };

  componentDidMount() {
    const domain = `${API_URL}upcoming`;
    const {currentPage} = this.state;
    const queryParam = `api_key=${API_TOKEN}&page=${currentPage}`;
    const url = `${domain}?${queryParam}`;
    this.setState({
      loading: true
    });
    axios.get(url).then(({data}) => {
      const {results, page, total_pages} = data;
      if (results.length > 0) {
        this.setState({
          moviesList: [...results],
          totalPages: total_pages,
          currentPage: page,
          loading: false,
          selected: new Map()
        });
      }
    }).catch(() => {
      console.log("Error Making Request");
    })
  }

  _keyExtractor = (item, index) => item.id;


  _renderItem = ({item: movie}) => {
    return (
      <Movie movie={movie} onPress = {this._onPressItem}/>
    )
  };

  _onPressItem = (id) => {
    // updater functions are preferred for transactional updates
    this.setState((state) => {
      // copy the map rather than modifying state.
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id)); // toggle
      return {selected};
    });
  };



  render() {
    const {loading, moviesList} = this.state;

    if(loading) {
      return(<Spinner size="large" />);
    }

    return(
      <FlatList
        data = {moviesList}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
      />
    )
  }
}

export default Upcoming;