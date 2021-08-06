import React from 'react'
import { useState,useEffect } from 'react'
import { TextInput, View, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Paddings from '../Enums/Paddings'
import Icon from 'react-native-vector-icons/FontAwesome';
import AppColors from '../Colors/AppColors';


export default Input = props => {


    const handleInput = (text) => props.textEdit(text)
    const [issecureEntry, updateSequreEntry] = useState(false)


    useEffect( () => {
        updateSequreEntry(props.passWordField)
    }, [props.passWordField])

    const secureEntryHandler = secure => {
        console.log(secure)
        updateSequreEntry(secure)
    }

    const SecureEntryButton = () => {
        if (props.passWordField === true) {
            console.log('is Password Field')
            return (
                <TouchableOpacity onPress = {()=>secureEntryHandler(!issecureEntry)}>
                    {issecureEntry === true ? <Icon name="eye" size={30} color={AppColors.textColor} /> : <Icon name="eye-slash" size={30} color={AppColors.textColor} />} 
                </TouchableOpacity>
            );
        } else {
            console.log('not Password Field')
            return (<View/>);
        }
    }

    return (
        <View style={{ ...styles.textInputOuter, }}>
            <Icon style={styles.ImageStyle} name={props.iconName} size={20} color={AppColors.textColor} />
            <TextInput
                {...props}
                secureTextEntry={issecureEntry}
                onChangeText={handleInput}
                placeholder={props.placeHolder}
                numberOfLines={1}
                style={{ ...props.style, ...styles.Textinput }} >
            </TextInput>
            <SecureEntryButton></SecureEntryButton>
        </View>
    )
}

const styles = StyleSheet.create({
    textInputOuter: {
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'space-between',
        borderWidth: 1,
        borderColor: AppColors.borderColor,
        padding: wp(Paddings.small),
        flexDirection: 'row',
        marginHorizontal: wp(Paddings.normal),
        marginBottom: wp(Paddings.small)
    },
    Textinput: {
        flex: 1,
        height: wp(Paddings.normal),
        width: wp('80%'),

    },
    ImageStyle: {
        paddingLeft: wp(Paddings.small),
        paddingRight: wp(Paddings.normal)
    }
})