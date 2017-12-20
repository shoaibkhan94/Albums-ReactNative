import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = (props) => {

    const album = Object.assign({}, props.album);

    const onButtonPress = (url) => {
        //console.log("Pressed");
        Linking.openURL(url);
    }

    return (
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    <Image style={styles.thumbnailStyle} source={{uri: album.thumbnail_image}}/>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.headerTextStyle}>{album.title}</Text>
                    <Text>{album.artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={styles.imageStyle} source={{uri: album.image}}/>
            </CardSection>
            <CardSection>
                <Button whenPress={() => onButtonPress(album.url)} btnText={'Buy Now'}/>
            </CardSection>
        </Card>
    );
}

const styles = {
    textContainer : {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle:{
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        width: null,
        height: 300,
        flex: 1
    }
}

export default AlbumDetail;