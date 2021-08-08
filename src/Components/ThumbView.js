import React from 'react'
import { View, StyleSheet } from 'react-native'
import ProgressiveImage from './ImageLoader'

export default ThumbView = props => {

    if (props.url === '') {
        return (<View />)
    } else {
        return (<ProgressiveImage
            thumbnailSource={{ uri: props.url }}
            source={{ uri: props.url }}
            style={props.style}
            resizeMode="cover"
        />);
    }
}
const styles = StyleSheet.create({})