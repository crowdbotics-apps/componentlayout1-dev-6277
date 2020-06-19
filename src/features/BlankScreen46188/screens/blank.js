import React from "react"
import { View, Image, ImageBackground } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input,
  Datepicker
} from "react-native-ui-kitten"
import Slider from "@react-native-community/slider"

export class _Blank extends React.Component {
  static navigationOptions = {
    title: "Blank".toUpperCase()
  }

  state = {
    Input_25: "",
    Input_30: "",
    CheckBox_41: true,
    Input_23: "",
    Radio_59: true
  }

  render = () => (
    <View
      style={{
        overflow: "visible",
        textAlign: "left",
        verticalAlign: "baseline",
        fontSize: 20,
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "stretch",
        alignContent: "stretch",
        borderStyle: "solid",
        backgroundSize: "auto"
      }}
    >
      <View
        style={{
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          fontSize: 20,
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignItems: "stretch",
          alignContent: "stretch",
          borderStyle: "solid",
          backgroundSize: "auto"
        }}
      >
        <View
          style={{
            overflow: "visible",
            textAlign: "left",
            verticalAlign: "baseline",
            fontSize: 20,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "stretch",
            borderStyle: "solid",
            backgroundSize: "auto"
          }}
        >
          <View
            style={{
              overflow: "visible",
              textAlign: "left",
              verticalAlign: "baseline",
              fontSize: 20,
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              alignItems: "stretch",
              alignContent: "stretch",
              borderStyle: "solid",
              backgroundSize: "auto"
            }}
          >
            <Button
              style={{
                overflow: "visible",
                textAlign: "left",
                verticalAlign: "baseline",
                fontSize: 20,
                borderStyle: "solid",
                backgroundColor: "#3366FF"
              }}
              onPress={() => alert("Pressed!")}
            >
              Button
            </Button>
            <Input
              placeholder="Text input placeholder"
              editable={true}
              keyboardType="numeric"
              style={{
                overflow: "visible",
                textAlign: "left",
                verticalAlign: "baseline",
                fontSize: 20,
                borderStyle: "solid"
              }}
              value={this.state.Input_25}
              onChangeText={nextValue => this.setState({ Input_25: nextValue })}
            />
            <Input
              placeholder="Text input placeholder"
              editable={true}
              multiline={true}
              textStyle={{ height: 100 }}
              style={{
                overflow: "visible",
                textAlign: "left",
                verticalAlign: "baseline",
                fontSize: 20,
                borderStyle: "solid"
              }}
              value={this.state.Input_30}
              onChangeText={nextValue => this.setState({ Input_30: nextValue })}
            />
            <CheckBox
              text="Checkbox"
              disabled={false}
              style={{
                overflow: "visible",
                textAlign: "left",
                verticalAlign: "baseline",
                borderStyle: "solid"
              }}
              checked={this.state.CheckBox_41}
              onChange={nextChecked =>
                this.setState({ CheckBox_41: nextChecked })
              }
            />
          </View>
          <View
            style={{
              overflow: "visible",
              textAlign: "left",
              verticalAlign: "baseline",
              fontSize: 20,
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              alignItems: "stretch",
              alignContent: "stretch",
              borderStyle: "solid",
              backgroundSize: "auto"
            }}
          >
            <Text
              style={{
                overflow: "visible",
                textAlign: "left",
                verticalAlign: "baseline",
                fontSize: 20,
                borderStyle: "solid"
              }}
            >
              Text
            </Text>
            <Input
              placeholder="Text input placeholder"
              editable={true}
              style={{
                overflow: "visible",
                textAlign: "left",
                verticalAlign: "baseline",
                fontSize: 20,
                borderStyle: "solid"
              }}
              value={this.state.Input_23}
              onChangeText={nextValue => this.setState({ Input_23: nextValue })}
            />
            <Radio
              text="Radio button"
              disabled={false}
              style={{
                overflow: "visible",
                textAlign: "left",
                verticalAlign: "baseline",
                borderStyle: "solid"
              }}
              checked={this.state.Radio_59}
              onChange={nextChecked => this.setState({ Radio_59: nextChecked })}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  container: {
    backgroundColor: theme["color-basic-100"]
  }
}))
