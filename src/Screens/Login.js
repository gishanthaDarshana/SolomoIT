import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import MainView from '../Components/Wrapper'
import Title from '../Components/Title'
import TitleType from '../Enums/TitleType'
import Paddings from '../Enums/Paddings'
import Input from '../Components/Input'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RoundedButton from '../Components/RoundedButton'
import Loader from '../Components/Loader'
import { loginAction, logoutAction, loadingStateAction, fetchStateAction } from '../Redux/Actions';
import Services from '../Services/Services';
import { useDispatch, useSelector } from 'react-redux'
import AppColors from '../Colors/AppColors'
import SessionManager from '../AsyncStorage/SessionManager'
import { DismissKeyboardView } from '../Components/DismissKeyboardView'
export default Login = props => {



    const [userName, updateUserName] = useState('');
    const [password, updatePassword] = useState('');
    const [errorMessage, updateError] = useState('');

    const dispatch = useDispatch();
    const isLoading = useSelector(state => {
        console.log('Initial isLogin State: ', state);
        return state.loginReducer.apiLoaderVisible
    })

    const handleUserName = textIn => {
        updateError('');
        updateUserName(textIn)
    }

    const handlePassword = textIn => {
        updateError('');
        updatePassword(textIn)
    }

    const onRoundedButtonClick = () => {
        console.debug("button pressed");
        loginUser()
    }


    loginUser = async () => {
        dispatch(loadingStateAction(true))

        try {
            const authResponce = await fetch('https://dev-saas-au.i4tradies.com/api/v2/auth', {
                method: 'POST',
                headers: {
                    Accept: 'application/json', 'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    client_id: "3",
                    client_secret: "wYGlGHN3kZsUgEvfqNUFmiolfLUJBL6NE3yjElpD",
                    grant_type: "password",
                    username: userName,
                    password: password
                })
            })
            const authjson = await authResponce.json()
            console.log('Responce Json:', authjson);
            console.log('Status Code :', authResponce.status);

            dispatch(loadingStateAction(false));

            if (authResponce.status == 200) {
                console.log('login Responce :', authjson)
                new SessionManager().storeToken(authjson.result.access_token);
                dispatch(loginAction(authjson.result.access_token));
            } else {
                updateError(authjson.message);
                dispatch(loginAction(null));
            }

        } catch (error) {
            dispatch(loadingStateAction(false))
            console.error(error)
        } finally {
            console.log('Login API call Ended');
        }
    }


    useEffect(() => {
        dispatch(loadingStateAction(false));
    }, []);


    return (
        <DismissKeyboardView style={styles.mainView}>
            <MainView style={styles.mainView}>
                <Loader loading={isLoading}></Loader>
                <Title style={styles.mainTitle} type={TitleType.Title}>Welcome</Title>
                <Title style={styles.subTitle} type={TitleType.SubTitle}>Let's sign in to continue</Title>
                <Input textEdit={handleUserName} value={userName} placeHolder='Email' iconName='envelope' passWordField={false} />
                <Input textEdit={handlePassword} value={password} placeHolder='Password' iconName='lock' passWordField={true} />
                <Title style={styles.errorMessage} type={TitleType.SubTitle}>{errorMessage}</Title>
                <RoundedButton onPress={onRoundedButtonClick} iconName='arrow-right' disabled={userName == '' || password == ''} />
            </MainView>
        </DismissKeyboardView>

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
        marginBottom: wp(Paddings.normal),
    },
    errorMessage: {
        paddingLeft: wp(Paddings.normal + 1),
        marginBottom: wp(Paddings.small),
        color: AppColors.errorTextColor,
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