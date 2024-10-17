import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const Onboarding = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>SignUp Screen</Text>
    </View>
  )
}

export default Onboarding

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})