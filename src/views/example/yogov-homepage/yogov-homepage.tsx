import * as React from "react"
import { View, Image, ViewStyle, TextStyle, ImageStyle, SafeAreaView, StatusBar } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { Text } from "../../shared/text"
import { Button } from "../../shared/button"
import { Screen } from "../../shared/screen"
import { Wallpaper } from "../../shared/wallpaper"
import { Header } from "../../shared/header"
import { color, spacing } from "../../../theme"
import { bowserLogo } from "."

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = { 
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
}
const TEXT: TextStyle = { 
  color: color.palette.black,
  fontFamily: "Montserrat",
}
const BUTTON_TEXT: TextStyle = { 
  color: color.palette.white,
  fontFamily: "Montserrat",
}
const BOLD: TextStyle = { fontWeight: "bold" }
const HEADER: TextStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[4] + spacing[1],
  paddingHorizontal: 0,
}
const HEADER_TITLE: TextStyle = { 
  ...TEXT,
  ...BOLD,
  fontSize: 12,
  lineHeight: 15,
  textAlign: "center",
  letterSpacing: 1.5,
}
const TITLE_WRAPPER: TextStyle = { 
  ...TEXT,
  textAlign: "center",
}
const TITLE: TextStyle = { 
  ...TEXT, 
  ...BOLD,
  fontSize: 28,
  lineHeight: 38,
  textAlign: "center",
}
const ALMOST: TextStyle = { 
  ...TEXT, 
  ...BOLD,  
  fontSize: 26,
  fontStyle: "italic",
}
const BOWSER: ImageStyle = {
  alignSelf: "center",
  marginVertical: spacing[5],
  maxWidth: "100%",
}
const CONTENT: TextStyle = {
  ...TEXT,  
  color: "#BAB6C8",  
  fontSize: 15,
  lineHeight: 22,
  marginBottom: spacing[5],
}
const CONTINUE: ViewStyle = { 
  paddingVertical: spacing[4], 
  paddingHorizontal: spacing[4],
  backgroundColor: "#EC1D24",
}
const CONTINUE_TEXT: TextStyle = {
  ...BUTTON_TEXT,
  ...BOLD,
  fontSize: 13,
  letterSpacing: 2,
}
const FOOTER: ViewStyle = { backgroundColor: "#FFFFFF" }
const FOOTER_CONTENT: ViewStyle = {
  paddingVertical: spacing[4], 
  paddingHorizontal: spacing[4],
}

export interface FirstExampleScreenProps extends NavigationScreenProps<{}> {}

export class FirstExampleScreen extends React.Component<FirstExampleScreenProps, {}> {
  nextScreen = () => this.props.navigation.navigate("secondExample")

  render() {
    return (
      <View style={FULL}>
        <StatusBar barStyle="light-content" />      
        <Wallpaper />
        <SafeAreaView style={FULL}>
          <Screen style={CONTAINER} backgroundColor={color.transparent} preset="scrollStack">
            
            <Image source={bowserLogo} style={BOWSER} />
            <Text style={TITLE_WRAPPER}> 
              <Text style={TITLE} text="Access government services without the waiting..." />
            </Text>
          
          </Screen>
        </SafeAreaView>
        <SafeAreaView style={FOOTER}>
          <View style={FOOTER_CONTENT}>
            <Button
              style={CONTINUE}
              textStyle={CONTINUE_TEXT}
              tx="firstExampleScreen.continue"
              onPress={this.nextScreen}
              />
          </View>
        </SafeAreaView>
      </View>
    )
  }
}
