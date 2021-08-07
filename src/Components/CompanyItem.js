import React from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import Title from '../Components/Title'
import TitleType from '../Enums/TitleType'
import { Rating } from 'react-native-ratings';
import AppColors from '../Colors/AppColors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default CompanyItem = ({ onPress, item, backgroundColor, textColor }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, {backgroundColor : backgroundColor}]}>
            <View style={styles.innerView}>
                <View style={styles.leftSqure}>

                </View>
                <View style={styles.rightView}>
                    <Title style={styles.mainTitle} type={TitleType.SubTitle}>{item.title}</Title>
                    <Rating
                        imageSize={hp(3)}
                        ratingCount={5}
                        startingValue={item.rate}
                        readonly={true}
                        tintColor={backgroundColor}
                        type='custom'
                    />
                    <Title style={styles.mainTitle} type={TitleType.SmallTitle}>{item.description}</Title>
                </View>

            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    innerView: {
        padding : 10,
        flexDirection: 'row',
        alignItems : 'center'
    },
    leftSqure: {
        width: 50,
        height: 50,
        borderRadius: 10,
        borderColor: AppColors.textColor,
        borderWidth: 1
    },
    rightView: {
        paddingLeft : 20,
        flexDirection: 'column',
        alignItems : 'flex-start',
        alignContent : 'flex-start',
    },
    mainTitle : {
        alignItems : 'flex-start',
        alignContent : 'flex-start',
        textAlign : 'left',
        color : AppColors.textColor,
    }

})