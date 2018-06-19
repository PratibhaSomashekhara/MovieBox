import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import NowPlaying from "./NowPlaying";
import Upcoming from "./Upcoming";
import { Constants } from 'expo';


class MovieList extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'nowPlaying', title: 'Now Playing' },
      { key: 'upcoming', title: 'Upcoming' },
    ]
  };


  _handleIndexChange = index => this.setState({ index });

  _renderTabBar = props => <TabBar {...props} style={styles.header} />;


  _renderScene = SceneMap({
    nowPlaying: NowPlaying,
    upcoming: Upcoming
  });

  render() {
    console.disableYellowBox = true;
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
        initialLayout={{
          width: Dimensions.get('window').width,
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop: Constants.statusBarHeight,
  }
});

export default MovieList

