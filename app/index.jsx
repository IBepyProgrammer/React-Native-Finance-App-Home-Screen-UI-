import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

import { router } from 'expo-router'

const index = () => {

    const handlePress = () => {
        router.replace("home")
    }
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <TouchableOpacity onPress={handlePress}>
        <Text>Proceed to Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})