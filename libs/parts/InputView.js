import React from 'react';
import { Animated, View } from "react-native";

const InputView = ({pinViewAnim, animatedInputIndex, password, bgColor, activeBgColor, styles, bgOpacity, setPasswordLength}) => {
  const tilt = pinViewAnim.interpolate({
    inputRange : [0, 0.3, 0.6, 0.9],
    outputRange: [0, -50, 50, 0]
  });
  const pw = password ? password : Array.from(new Array(setPasswordLength),(val,index)=>index);
  return (
    <Animated.View style={ [styles.passwordInputView, {
      transform: [{translateX: tilt}]
    }] }>
      {
        pw.map((val, index) => {
          if (animatedInputIndex[index] === undefined) {
            return (
              <Animated.View key={ "passwordItem-" + index }>
                <View style={styles.passwordInputViewNumberContainer}>
                  <View style={styles.passwordInputViewItemActiveNumber} />
                </View>
                <View
                  style={ [styles.passwordInputViewItem, {
                    backgroundColor: bgColor,
                    opacity        : bgOpacity
                  }] }/>
              </Animated.View>
            )
          } else {
            return (
              <Animated.View key={ "passwordItem-" + index }>
                <View style={styles.passwordInputViewNumberContainer}>
                  <View style={[styles.passwordInputViewItemActiveNumber, {
                    backgroundColor: activeBgColor,
                    opacity: 1,
                  }]} />
                </View>
                <View
                  style={ [styles.passwordInputViewItemActive, {
                    backgroundColor: activeBgColor,
                    opacity        : 1
                  }] }/>
              </Animated.View>
            )
          }
        })
      }
    </Animated.View>
  )
};

export default InputView
