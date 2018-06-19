import React, {Component} from "react";
import {FlatList} from "react-native";
import {API_TOKEN, API_URL} from "../config/api.contants";
import axios from "axios";
import Spinner from "./Spinner";
import Movie from "./common/Movie";



class NowPlaying extends Component {

  state = {
    moviesList: [],
    totalPages: 0,
    currentPage: 1,
    loading: false,
    refreshing: false
  };

  componentDidMount() {
    this.loadMovie();
  }

  loadMovie = () => {
    const domain = `${API_URL}now_playing`;
    const {currentPage, moviesList} = this.state;
    const queryParam = `api_key=${API_TOKEN}&page=${currentPage}`;
    const url = `${domain}?${queryParam}`;
    this.setState({
      loading: true
    });
    axios.get(url).then(({data}) => {
      const {results, page, total_pages} = data;
        this.setState({
          moviesList: currentPage === 1 ? [...results] : [...moviesList, ...results],
          totalPages: total_pages,
          currentPage: page,
          loading: false,
          refreshing: false,
          selected: null
        });
    }).catch(() => {
      this.setState({
        loading: false,
        refreshing: false
      })
    })
  };

  _renderItem = ({item: movie}) => {
    return (
      <Movie movie={movie} onPress = {this._onPressItem}/>
    )
  };

  _onPressItem = (id) => {

  };

  _renderFooter = () => {
    const {loading} = this.state;
    if(!loading) {
      return null;
    }

    return (<Spinner size="large" />);
  }

  _onRefresh = () => {
    this.setState({
      refreshing: true,
      currentPage: 1
    }, this.loadMovie)
  }

  _onEndReached = () => {
    const {currentPage} = this.state;
    this.setState({
      currentPage: currentPage + 1
    }, this.loadMovie);
  }



  render() {
    const {moviesList, refreshing } = this.state;
    return(
      <FlatList
        data = {moviesList}
        renderItem={this._renderItem}
        renderFooter={this._renderFooter}
        onRefresh={this._onRefresh}
        refreshing={refreshing}
        onEndReachedThreshold={0}
        onEndReached={this._onEndReached}
      />
    )
  }
}

export default NowPlaying