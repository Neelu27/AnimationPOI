import React, {Component} from 'react';
import { Animation,Animated, StyleSheet, View, TouchableWithoutFeedback,Dimensions } from 'react-native';
import {Svg,Path} from 'react-native-svg';
import Animate from "react-move";
import { interpolatePath } from "d3-interpolate-path";
import { interpolate } from "flubber";

const { width } = Dimensions.get('window');
const anim = new Animated.Value(0);
const AnimatedPath = Animated.createAnimatedComponent(Path);
const path1="M 0.96897334,2.6169344 H 500.85556 L 499.96314,156.63531 c -36.86631,-13.21602 -70.64536,-23.67678 -102.76212,-32.65404 -18.34349,-4.60219 -37.29688,-8.66003 -58.00695,-11.15016 -34.51648,-1.77133 -35.89015,-2.72783 -57.11452,0.79644 -16.61948,1.82792 -38.81607,5.73709 -51.76004,9.55727 -41.7758,14.1879 -32.37652,11.36689 -76.74768,22.30033 l -74.07038,11.94661 c -21.811243,3.81117 -49.310593,3.8411 -75.8552301,-0.79645 z";
const path2="M -1.3250671,1.822443 H 501.6506 l -0.14842,89.697208 c -37.09413,-10.26933 -66.58482,6.336324 -98.90004,-0.639329 -18.45685,-3.576069 -39.0264,-13.474807 -59.86445,-15.409728 -34.72977,-1.376388 -42.85758,-6.616721 -64.21311,-3.878235 -16.72218,1.42036 -38.30641,2.209376 -51.33038,5.177795 -42.03395,11.024504 -43.06982,10.331517 -87.71517,18.827197 L 73.195607,103.38127 C 51.24958,106.34268 27.327879,98.870774 0.61920723,95.267234 Z";
const path3="M 0.14241827,1.7917557 H 501.68217 L 500.04156,76.234691 C 315.17054,74.475221 164.86711,75.053301 -1.6643006,74.748398 Z";

export default class A extends Component {

  constructor(props){
    super(props);
    var toValue=this.props.navigation.getParam('toValue',null)
    console.log(toValue,'toValue')
    this.state={
      animationValue : new Animated.Value(1),
      scale:new Animated.Value(1),
      translateY:new Animated.Value(1),
      toval:toValue,
      animation: new Animated.Value(0),
    }
  }

  static navigationOptions = ({ navigation }) => {
      const { params = {} } = navigation.state
      return {header:null}
  };

    handlePress = () => {
    Animated.sequence([
      // Animated.timing(this.state.animation, {
      //   toValue: 0,
      //   duration: 1500,
      // }),
      Animated.delay(500),
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 500
      })
    ]).start(()=>{
    this.props.navigation.navigate('B');Animated.timing(this.state.animation,{
      toValue : 1,
      duration : 500
    }).start()
    });
    // Animated.timing(this.state.animation,{
    //   toValue : 1,
    //   timing : 500
    // }).start()
  };

  componentDidMount() {
    const pathInterpolate = interpolate( path2,  path1, {
      maxSegmentLength: 1,
    });
    this.state.animation.addListener(({ value }) => {
      const path = pathInterpolate(value);
      this._path.setNativeProps({
        d: path,
      });
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
        <View style={styles.container}>
            <View style={{width:500.677,height:158.374,position:'absolute',top:0,borderWidth:0,marginHorizontal:-20}}>
                <TouchableWithoutFeedback onPress={this.handlePress}>
                    <Svg width="500.677" height="158.374" viewBox="0 0 500.677 158.374">
                        <Path scale={0} d={path1} stroke="#1d5685" ref={path => this._path = path}fill={"#1d5685"} />
                    </Svg>
                </TouchableWithoutFeedback>
            </View>
           <TouchableWithoutFeedback onPress={this.handlePress}>
                <Animated.View style={[styles.animatedBox, animatedStyle]} />
          </TouchableWithoutFeedback>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems : 'center',
    padding: 0
  },
  animatedBox:{
     width : 180,
     height: 180,
     backgroundColor : '#FF6F00'
  },
});

// startScaleAnimation=()=>{
//   Animated.timing(this.state.animationValue, {
//     toValue : 2,
//     timing : 1200
//   }).start(()=>
//     Animated.timing(this.state.animationValue,{
//       toValue : 1,
//       duration : 1200
//     }).start()),
//   Animated.parallel([
//     Animated.timing(this.state.translateY,{
//       toValue:this.state.toval==null?0.5:1,
//       duration : 1200,
//     }),
//     Animated.timing(this.state.scale,{
//         toValue : this.state.toval==null?0.5:1,
//         duration : 1200,
//         // asing: Easing.back(),
//       })
//   ]).start(()=>{this.props.navigation.navigate('B');Animated.timing(this.state.scale,{
//     toValue : 1,
//     timing : 1200
//   }).start()});
//   }

// const pathInterpolate = interpolatePath(path2,path1);
// this.state.animation.addListener(({ value }) => {
//   const path = pathInterpolate(value);
//   this._path.setNativeProps({
//     d: path,
//   });
// });
// const pathInterpolate = Tween(path1, path2);
// const p = new SVGPath();
// this.state.animation.addListener(({ value }) => {
//   pathInterpolate.tween(value);
//   pathInterpolate.applyToPath(p);
//   this._path.setNativeProps({
//     d: p.toSVG()
//   })
// });

// // <View style={styles.MainContainer}>
// //   <View style={{width:500.677,height:158.374,position:'absolute',top:0,borderWidth:0,marginHorizontal:-20}}>
// //   <Svg xmlns="http://www.w3.org/2000/svg" width="500.677" height="158.374" viewBox="0 0 500.677 158.374"
// //
// //   >
// //     <Path d={animatedStyle1}
// //       fill={'#1d5685'}preserveAspectRatio = "none"/>
// //
// //   </Svg>
// // </View>
//     {/* <Animated.View
//      style={{width:width,height:200,
//             borderBottomRightRadius:2*1200/15+5-9,
//             borderBottomLeftRadius:2*150/3,
//             backgroundColor:'#65a7dd',
//             position:'absolute',
//             top:0,
//             transform:[{scaleY: this.state.scale},
//                         {translateY:this.state.translateY.interpolate({inputRange:[0,1],outputRange:[1,0]}),},
//                         {translateX:0},
//                         {perspective: 1000},], // without this line this Animation will not render on Android while working fine on iOS
//             transition:2,
//       }}>
//   </Animated.View> */}
//  {/* <TouchableWithoutFeedback onPress={this.startScaleAnimation}>
//    <Animated.View style={[styles.animatedBox, animatedStyle]} />
//  </TouchableWithoutFeedback>
// </View> */}
