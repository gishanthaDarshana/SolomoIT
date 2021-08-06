import React from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'


const MainView = props => {
    return (
        <SafeAreaView style={{...styles.container, ...props.style }}>
            <View style={{...styles.container, ...props.style }}>
                {props.children}
            </View>
        </SafeAreaView>
    )
}

export default MainView

const styles = StyleSheet.create({

    container: {
        /* flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center' */
    }
})