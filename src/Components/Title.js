import React from 'react'
import { Text, StyleSheet } from 'react-native'
import fontSizeRatio from '../Enums/FontSizeRatio'
import TitleType from '../Enums/TitleType'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default Title = props => {

    const fontSize = (type) => {
        switch (type) {
            case TitleType.Title:
                return wp(fontSizeRatio.large)
            case TitleType.SubTitle:
                return wp(fontSizeRatio.normal)
            case TitleType.MediumTitle:
                return wp(fontSizeRatio.medium)
            case TitleType.SmallTitle:
                return wp(fontSizeRatio.small)
            default:
                return wp(fontSizeRatio.normal)
        }
    }
    return (
        <Text {...props} style={{ fontSize: fontSize(props.type), ...props.style }}> {props.children}</Text>
    )
}