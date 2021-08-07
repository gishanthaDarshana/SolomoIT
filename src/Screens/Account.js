import React from 'react'
import {View, StyleSheet } from 'react-native'
import MainView from '../Components/Wrapper'
import Title from '../Components/Title'
import TitleType from '../Enums/TitleType'
import AppColors from '../Colors/AppColors'

export default Account = props => {
return (
       <MainView>
          <Title style={styles.title} type={TitleType.MediumTitle}>Account Screen</Title>
       </MainView>
       )
}
const styles = StyleSheet.create({
    title: {
        fontWeight: 'normal',
        color: AppColors.textColor
    },
})