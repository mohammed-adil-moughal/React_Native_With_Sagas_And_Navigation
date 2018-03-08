import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
import { fetchPosts } from '../actions';
import _ from 'lodash';

class componentName extends Component {
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        );
    }
}


class AlbumList extends Component {

    componentDidMount() {
        this.props.fetchPosts();
        console.log(this.props.fetchPosts(), 'consolelog');
    }
    renderPosts() {
        return(
         _.map(this.props.albums, album => {
             return (
                <AlbumDetail key={album.title} album={album} />
             )
         }))
 }

    renderAlbums() {
        console.log(this.props.albums, '=> State');
        if(this.props.albums)
        {
        return this.state.albums.map(album =>
        <AlbumDetail key={album.title} album={album} />);
        }
        else{
            console.log('nothin');
        }
    }
    render() {
        console.log(this.props.albums, '->RENDER')

        return (
            <ScrollView>
                {this.renderPosts()}
            </ScrollView >
        );
    }

}

function mapStateToProps(state) {
    // console.log(state, '=>State_to props')
    return { albums: state.albums }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch({ type: 'fetch_posts_saga' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumList);