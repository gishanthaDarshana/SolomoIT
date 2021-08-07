import React from 'react'
import { View, StyleSheet } from 'react-native'
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
export default Home = props => {


    const onRoundedButtonClick = () => {
        console.debug("button pressed");
    }

    return (
        <MainView style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                <View style={styles.header}>
                    <Title style={styles.mainTitle} type={TitleType.Title}>My Profile</Title>
                    <Avatar></Avatar>
                    <Rating
                        imageSize={hp(3)}
                        ratingCount={5}
                        startingValue={2}
                        readonly={true}
                        tintColor={AppColors.secondaryBackground}
                        type='custom'
                        style={{ paddingVertical: 10 }}
                    />
                    <Title style={styles.userName} type={TitleType.MediumTitle}>Kathi Rose</Title>
                    <View style={styles.taskRow}>
                        <TaskTile taskValue='23' taskName='ToDo' />
                        <TaskTile taskValue='03' taskName='In Progress' />
                        <TaskTile taskValue='67' taskName='Completed' />
                    </View>
                </View>
            </View>
            <View style={styles.bottom}>
                <ProfileTile mainTitle="Current Address" subTitle="102, Santa Babara, Canada" iconName="map-marker" />
                <ProfileTile mainTitle="Mobile Number" subTitle="+94 444 444 444" iconName="mobile-phone" />
                <ProfileTile mainTitle="Email Address" subTitle="info@something.com" iconName="envelope" />
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
        top: hp('46%'),
        right: 10,
        elevation: 10,
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
        padding : hp(2),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        alignContent : 'space-between',
    }
})