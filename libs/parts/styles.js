import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  //passwordInputView
  passwordInputView          : {
    flexDirection: 'row',
    alignSelf    : 'center',
  },
  passwordInputViewItem      : {
    alignItems     : 'center',
    justifyContent : 'center',
    height         : 2,
    margin         : 4,
    width          : 30,
  },
  passwordInputViewItemActive: {
    alignItems     : 'center',
    justifyContent : 'center',
    height         : 2,
    width          : 30,
    margin         : 4,
  },
  passwordInputViewNumberContainer: {
    height: 30,
    width: 30,
    margin: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  passwordInputViewItemActiveNumber: {
    height: 20,
    width: 20,
    borderRadius: 10,
    overflow: 'hidden'
  },
  // KeyboardView
  keyboardView               : {
    alignItems: 'center',
    marginTop : 23
  },
  keyboardViewItem           : {
    alignItems      : 'center',
    justifyContent  : 'center',
    height          : 70,
    width           : 70,
    marginHorizontal: 13,
    marginVertical  : 7,
    borderRadius    : 70 / 2,
  },
  keyboardViewItemText       : {
    fontSize  : 25,
    fontWeight: '300',
  },
})
