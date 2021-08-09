import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import MainView from '../Components/Wrapper'
import Title from '../Components/Title'
import AppColors from '../Colors/AppColors'
import RoundedButton from '../Components/RoundedButton'
import TitleType from '../Enums/TitleType'
import Paddings from '../Enums/Paddings'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Avatar from '../Components/Avatar'
import ProfileTile from '../Components/ProfileTile'
import { Rating } from 'react-native-ratings';
import TaskTile from '../Components/TaskTile'
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../Components/Loader'
import { loginAction, logoutAction, loadingStateAction, fetchStateAction } from '../Redux/Actions';
import ProgressiveImage from '../Components/ImageLoader'

export default Home = props => {

    const dispatch = useDispatch();
    const w = Dimensions.get('window');
    const isLoading = useSelector(state => {
        console.log('LoaderState: ', state);
        return state.loginReducer.apiLoaderVisible
    })

    const token = useSelector(state => {
        console.log('TokenState: ', state);
        return state.loginReducer.userToken
    })

    const [profileData, setProfileData] = useState({
        userName: '',
        rating: 0,
        profile: '',
        address: '',
        phone: '',
        email: '',
        toDo: 0,
        inProgress: 0,
        completed: 0,
    });

    const onRoundedButtonClick = () => {
        console.debug("button pressed");
    }

    useEffect(() => {
        const unsubscribe = props.navigation.addListener('tabPress', e => { 
            //e.preventDefault(); 
            getUserProfile();
        });
        
        dispatch(loadingStateAction(false));
        getUserProfile();

        return unsubscribe;
    }, [props.navigation]);



    const AvatarImage = () => {
        if (profileData.profile != '') {
            return (<ProgressiveImage
                thumbnailSource={{ uri: profileData.profile }}
                source={{ uri: profileData.profile }}
                style={{
                    width: wp('25%'),
                    height: wp('25%'),
                    borderRadius: wp('15%'),
                }}
                resizeMode="cover"
            />)
        } else {
            return (<View />)
        }
    }

    getUserProfile = async () => {
        dispatch(loadingStateAction(true))

        try {
            const auth = "Bearer " + token
            const authResponce = await fetch('https://dev-saas-au.i4tradies.com/api/v2/home', {
                method: 'GET',
                headers: {
                    Accept: 'application/json', 'Content-Type': 'application/json', 'Authorization': auth
                },

            })
            dispatch(loadingStateAction(false))
            const authjson = await authResponce.json()
            console.log('Responce Json:', authjson);
            console.log('Status Code :', authResponce.status);

            if (authResponce.status == 200) {
                console.log('Profile Responce :', JSON.stringify(authjson))
                const userName = authjson.result.customer.profile.name;
                const rating = authjson.result.customer.profile.rating_count
                const profile = authjson.result.customer.profile.profilePicURL
                const address = authjson.result.customer.profile.address
                const phone = authjson.result.customer.profile.phoneNumber
                const email = authjson.result.customer.profile.email
                const toDo = authjson.result.recent_activities.length
                const inProgress = authjson.result.on_going
                const completed = authjson.result.completed
                const profileObj = {
                    userName: userName,
                    rating: rating,
                    profile: profile,
                    address: address,
                    phone: phone,
                    email: email,
                    toDo: toDo,
                    inProgress: inProgress,
                    completed: completed,
                }
                console.log('Profile Object : ', profileObj)
                setProfileData(profileObj);

            } else {

            }

        } catch (error) {
            dispatch(loadingStateAction(false))
            console.error(error)
        } finally {
            console.log('Home API call Ended');
        }
    }

    return (
        <MainView style={styles.mainContainer}>
            <Loader loading={isLoading}></Loader>
            <View style={styles.headerContainer}>
                <View style={styles.header}>
                    <Title style={styles.mainTitle} type={TitleType.Title}>My Profile</Title>
                    <Avatar>
                        <AvatarImage />
                    </Avatar>
                    <Rating
                        imageSize={hp(3)}
                        ratingCount={5}
                        startingValue={profileData.rating}
                        readonly={true}
                        tintColor={AppColors.secondaryBackground}
                        type='custom'
                        style={{ paddingVertical: 10 }}
                    />
                    <Title style={styles.userName} type={TitleType.MediumTitle}>{profileData.userName}</Title>
                    <View style={styles.taskRow}>
                        <TaskTile taskValue={profileData.toDo} taskName='ToDo' />
                        <TaskTile taskValue={profileData.inProgress} taskName='In Progress' />
                        <TaskTile taskValue={profileData.completed} taskName='Completed' />
                    </View>
                </View>
            </View>
            <View style={styles.bottom}>
                <ProfileTile mainTitle="Current Address" subTitle={profileData.address} iconName="map-marker" />
                <ProfileTile mainTitle="Mobile Number" subTitle={profileData.phone} iconName="mobile-phone" />
                <ProfileTile mainTitle="Email Address" subTitle={profileData.email} iconName="envelope" />
            </View>
            <View style={styles.circle} >
                <RoundedButton onPress={onRoundedButtonClick} iconName='pencil' disabled={false} />
            </View>
        </MainView>
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: AppColors.secondaryBackground
    },
    headerContainer: {
        flex: 1,
    },
    header: {
        width: '100%',
        height: hp('53%'),
        position: 'relative',
        backgroundColor: AppColors.secondaryBackground,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottom: {
        marginTop: hp(Paddings.small),
        width: '100%',
        height: 200,
        top: hp('53%'),
        left: 0,
    },
    circle: {
        borderRadius: 50,
        position: 'absolute',
        top: hp('53%') - wp('20%') / 2,
        right: 10,
        elevation: 10,
        width : wp('20%'),
        height : wp('20%'),
        alignItems : 'center',
        justifyContent : 'center',
    },
    mainTitle: {
        paddingBottom: hp(Paddings.small),
        fontWeight: 'normal',
        color: AppColors.mainBackground
    },
    userName: {
        fontWeight: 'normal',
        color: AppColors.mainBackground
    },
    taskRow: {
        padding: hp(2),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        alignContent: 'space-between',
    }
})