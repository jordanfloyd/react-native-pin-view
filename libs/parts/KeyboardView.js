import React from 'react';
import { Animated, FlatList, Text, TouchableHighlight } from "react-native";

const KeyboardView = ({keyboardOnPress, password, onSuccess, onFailure, bgColor, textColor, animatedDeleteButton, deleteText, animatedDeleteButtonOnPress, styles, deletePosition, setPasswordLength, onSetPasswordLengthReached}) => {
  const data = deletePosition === 'right' ? ["1", "2", "3", "4", "5", "6", "7", "8", "9", "-1", "0", deleteText] : ["1", "2", "3", "4", "5", "6", "7", "8", "9", deleteText, "0"];
  const renderItem = ({item, index}) => {
    let style;
    let onPressActive;
    if (item === deleteText) {
      onPressActive = animatedDeleteButtonOnPress;
      style = [styles[0], {
        opacity: animatedDeleteButton
      }]
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
      <TouchableHighlight style={{
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
          backgroundColor: bgColor,
        }] }>
          <Text style={ [styles[1], {
            color  : textColor,
            opacity: 1,
          }] }>{ item }</Text>
        </Animated.View>
      </TouchableHighlight>
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
