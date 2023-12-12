import React, { useRef, useState } from 'react'
import { View, TouchableOpacity, Animated, StyleSheet } from 'react-native'

const ButtonSwapAnimation = ({
  PressTitle,
  onPressTitle,
  bgColorName,
  activeOpacity
}) => {
  const [buttonText, setButtonText] = useState(PressTitle)
  const buttonTranslateX = useRef(new Animated.Value(0)).current

  const handleButtonSwipe = () => {
    Animated.timing(buttonTranslateX, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start(() => {
      setButtonText(onPressTitle == undefined ? 'Confirmed' : onPressTitle)
      buttonTranslateX.setValue(0)
    })
  }

  const buttonStyle = {
    transform: [
      {
        translateX: buttonTranslateX.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 200]
        })
      }
    ]
  }

  return (
    <View style={Styles.container}>
      <TouchableOpacity
        onPress={handleButtonSwipe}
        activeOpacity={activeOpacity == undefined ? 0.8 : activeOpacity}
        style={[
          buttonStyle,
          {
            backgroundColor: bgColorName == undefined ? 'blue' : bgColorName,
            borderRadius: 8,
            paddingVertical: 12,
            paddingHorizontal: 16
          }
        ]}
      >
        <Animated.Text style={Styles.buttonText}>{buttonText}</Animated.Text>
      </TouchableOpacity>
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default ButtonSwapAnimation
