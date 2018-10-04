import React from 'react';
import { Animated, FlatList, Text, TouchableHighlight, TouchableOpacity } from "react-native";

const KeyboardView = ({keyboardOnPress, password, onSuccess, onFailure, bgColor, textColor, animatedDeleteButton, deleteText, animatedDeleteButtonOnPress, styles, deletePosition, setPasswordLength, onSetPasswordLengthReached, deleteComponent, animatedDelete}) => {
  const data = deletePosition === 'right' ? ["1", "2", "3", "4", "5", "6", "7", "8", "9", "-1", "0", deleteText] : ["1", "2", "3", "4", "5", "6", "7", "8", "9", deleteText, "0"];
  const renderTextOrButton = (item, styles) => {
    if (item === deleteText && deleteComponent) {
      return deleteComponent
    }
    return (
      <Text style={ [styles[1], {
        color  : textColor,
        opacity: 1,
      }] }>{ item }</Text>
    )
  }
  const renderItem = ({item, index}) => {
    let style;
    let onPressActive;
    let backgroundColor = bgColor;
    let Touchable = TouchableHighlight;
    if (item === deleteText) {
      onPressActive = animatedDeleteButtonOnPress;
      style = [styles[0], {
        opacity: animatedDelete ? animatedDeleteButton : 1
      }]
      if (deleteComponent) {
        backgroundColor = 'transparent';
        Touchable = TouchableOpacity;
      }
    } else if (item === "-1") {
      onPressActive = true;
      style = [styles[0], {
        opacity: 0
      }]
    } else {
      onPressActive = false;
      style = [styles[0]]
    }
    return (
      <Touchable style={{
        alignItems : 'center',
        justifyContent  : 'center',
        height          : 70,
        width           : 70,
        marginHorizontal: 13,
        marginVertical  : 7,
        borderRadius    : 70 / 2,}}
                 underlayColor='rgba(255, 255, 255, 0.15)'
                 onPress={ () => keyboardOnPress(item, password, onSuccess, onFailure, setPasswordLength, onSetPasswordLengthReached) }
                 disabled={ onPressActive }>
        <Animated.View style={ [style, {
          backgroundColor: backgroundColor,
        }] }>
          {renderTextOrButton(item, styles)}
        </Animated.View>
      </Touchable>
    )
  };
  return (
    <FlatList
      scrollEnabled={ false }
      horizontal={ false }
      vertical={ true }
      numColumns={ 3 }
      renderItem={ renderItem }
      data={ data }
      keyExtractor={ (val, index) => "pinViewItem-" + index }
    />
  )
};

export default KeyboardView
