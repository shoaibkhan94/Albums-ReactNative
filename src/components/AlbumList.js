import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import Axios from 'axios';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

    state = {
        albums: []
    };

    componentWillMount(){
        console.log("Component Will Mount");
        Axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(
            (response) => {
                //console.log(response);
                this.setState({albums: response.data});
            }
        )
    }

    renderAlbums(){
        return this.state.albums.map(album => <AlbumDetail key={album.title} album={album}/>)
    }

    render(){
        console.log(this.state);
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        )
    }
}

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
}

export default AlbumList;