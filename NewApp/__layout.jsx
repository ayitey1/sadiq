import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Rootlayout = () => {
return (
    <View style={styles.container}>
    <Text>layout</Text>
    </View>
)
}

export default Rootlayout

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
}
})