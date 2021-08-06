import React from 'react'
import { useState } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import MainView from '../Components/Wrapper'
import Title from '../Components/Title'
import TitleType from '../Enums/TitleType'
import Paddings from '../Enums/Paddings'
import Input from '../Components/Input'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RoundedButton from '../Components/RoundedButton'
import Loader from '../Components/Loader'
export default Login = props => {

    const [userName, updateUserName] = useState('');
    const [password, updatePassword] = useState('');
    const [isLoading , updateLoaderVisibility] = useState(false);
    
    const handleUserName = textIn => {
        updateUserName(textIn)
    }

    const handlePassword = textIn => {
        updatePassword(textIn)
    }

    const onRoundedButtonClick = () => {
        console.debug("button pressed");
        updateLoaderVisibility(true)
    }


    return (
        <MainView style={styles.mainView}>
            <Loader loading = {isLoading}></Loader>
            <Title style={styles.mainTitle} type={TitleType.Title}>Welcome</Title>
            <Title style={styles.subTitle} type={TitleType.subTitle}>Let's sign in to continue</Title>
            <Input textEdit={handleUserName} value={userName} placeHolder='Email' iconName='envelope' passWordField = {false} />
            <Input textEdit={handlePassword} value={password} placeHolder='Password' iconName='lock' passWordField = {true}/>
            <RoundedButton onPress= {onRoundedButtonClick} iconName = 'arrow-right' disabled = {userName == '' || password == ''}/>
        </MainView>
    )
}
const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
    mainTitle: {
        paddingLeft: wp(Paddings.normal),
        paddingTop: wp(Paddings.normal),
        paddingBottom: wp(Paddings.small),
        fontWeight: 'bold',
    },
    subTitle: {
        paddingLeft: wp(Paddings.normal + 1),
        marginBottom : wp(Paddings.normal),
    },
    inputOuterStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
        padding: wp(Paddings.normal),
    },
    input: {
        justifyContent: 'center',
        backgroundColor: 'green',
        borderWidth: 1,
        padding: wp(Paddings.small)
    },
    Textinput: {
        height: wp(Paddings.normal),
    },
})