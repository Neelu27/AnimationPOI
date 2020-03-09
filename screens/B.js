import React, {Component} from 'react';
import { Animation,Animated, StyleSheet, View, TouchableWithoutFeedback,Dimensions } from 'react-native';
import {Svg,Path} from 'react-native-svg';
import Animate from "react-move";
import { interpolatePath } from "d3-interpolate-path";
import { interpolate } from "flubber";

const { width } = Dimensions.get('window');
const anim = new Animated.Value(0);
const AnimatedPath = Animated.createAnimatedComponent(Path);
const path1="M 0.14241827,1.7917557 H 501.68217 L 500.04156,76.234691 C 315.17054,74.475221 164.86711,75.053301 -1.6643006,74.748398 Z";
const path2="M -1.3250671,1.822443 H 501.6506 l -0.14842,89.697208 c -37.09413,-10.26933 -66.58482,6.336324 -98.90004,-0.639329 -18.45685,-3.576069 -39.0264,-13.474807 -59.86445,-15.409728 -34.72977,-1.376388 -42.85758,-6.616721 -64.21311,-3.878235 -16.72218,1.42036 -38.30641,2.209376 -51.33038,5.177795 -42.03395,11.024504 -43.06982,10.331517 -87.71517,18.827197 L 73.195607,103.38127 C 51.24958,106.34268 27.327879,98.870774 0.61920723,95.267234 Z";

export default class A extends Component {
  static navigationOptions = ({ navigation }) => {
      const { params = {} } = navigation.state
      return {header:null}
    };

  constructor(props){
    super(props);
    this.state={
      animationValue : new Animated.Value(1),
      scale: new Animated.Value(1),
    }
  }

  startScaleAnimation=()=>{
    Animated.timing(this.state.scale, {
      toValue : 2,
      duration : 500
    }).start(()=>{
      Animated.timing(this.state.scale,{
        toValue : 2,
        duration : 500
      }).start(()=>{Animated.timing(this.state.animationValue,{
        toValue : 1,
        duration : 500
      }).start();});
      this.props.navigation.navigate('A',{toValue:new Animated.Value(1)});
    })
  }
  componentDidMount() {
    const pathInterpolate = interpolate(path1, path2, {
      maxSegmentLength: 1,
    });
    this.state.scale.addListener(({ value }) => {
      const path = pathInterpolate(value);
      console.log(this.path,'pathpath')
      if(this._path!=null||this._path!=undefined){
        this._path.setNativeProps({
          d: path,
        });
      }
    });
}

  render() {
    const animatedStyle = {
      transform : [
        {
          scale : this.state.animationValue
        }
      ]
    }

    return (
        <View style={styles.MainContainer}>
            {/* // <Animated.View
            //  style={{width:width,height:60,
            //           backgroundColor:'#1d5685',
            //           position:'absolute',
            //           top:0,
            //           transform: [{scaleY:this.state.scale},
            //                       {translateY:2},
            //                       {perspective: 1000}, // without this line this Animation will not render on Android while working fine on iOS
            //                     ],
            //           transition:2,}}>
            // </Animated.View> */}

            <View style={{width:500.677,height:158.374,position:'absolute',top:0,borderWidth:0,marginHorizontal:-20}}>
            <TouchableWithoutFeedback>
              <Svg width="500.677" height="158.374" viewBox="0 0 500.677 158.374">
                <Path scale={0} d={path1} stroke="#1d5685" ref={path => this._path = path}fill={"#1d5685"} />
              </Svg>
            </TouchableWithoutFeedback>
            </View>
            <TouchableWithoutFeedback onPress={this.startScaleAnimation}>
               <Animated.View style={[styles.animatedBox, animatedStyle]} />
            </TouchableWithoutFeedback>
        </View>
    );
  }
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems : 'center',
    padding: 0

  },
  animatedBox:{
     width : 180,
     height: 40,
     backgroundColor : '#FF6F00'
  },

});
