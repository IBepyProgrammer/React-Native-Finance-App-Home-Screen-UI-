import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '@/constants/Colors'

const Header = () => {
  return (
    <SafeAreaView style={ styles.container } >
        <View style={ styles.wrapper }>

            <View style={ styles.userInfoWrapper }>
              <Image
                  source={{ uri: "https://i.pravatar.cc/250?i=12" }}
                  style={ styles.userImg }
              />
              <View style={ styles.userTextWrapper }>
                <Text style={[ styles.userText, {fontSize: 12} ]}>Hey, User</Text>
                <Text style={[ styles.userText, {fontSize: 16 }]}>Your <Text style={ styles.boldText }>Budget</Text></Text>
              </View>
            </View>

            <TouchableOpacity onPress={() => {}} style={ styles.userBtn }>
              <Text style={ styles.btnText }>
                My Transactions
              </Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
   flex:1,
   backgroundColor:Colors.black
    },

  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 70,
    alignItems: 'center',
    paddingHorizontal: 20 },

  userInfoWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  userImg: {
    height: 50,
    width: 50,
    borderRadius: 30
  },

  userTextWrapper: {
    marginLeft: 10
  },

  userText: {
    color: Colors.white
  },

  boldText: {
    fontWeight: '700'
  },

  userBtn: {
    borderColor: '#666',
    borderWidth: 1,
    padding: 8,
    borderRadius: 10
  },

  btnText: {
    color: Colors.white,
    fontStyle: 12
  }
})