import React, {Component} from 'react';
import { Animation,Animated, StyleSheet, View, TouchableWithoutFeedback,Dimensions } from 'react-native';
import {Svg,Path} from 'react-native-svg';
const { width } = Dimensions.get('window');

export default class A extends Component {

  constructor(props){
    super(props);
    var toValue=this.props.navigation.getParam('toValue',null)
    console.log(toValue,'toValue')
    this.state={
      animationValue : new Animated.Value(1),
      scale:new Animated.Value(1),
      translateY:new Animated.Value(1),
      toval:toValue
    }
  }

  static navigationOptions = ({ navigation }) => {
      const { params = {} } = navigation.state
      return {header:null}
  };

  startScaleAnimation=()=>{
    Animated.timing(this.state.animationValue, {
      toValue : 2,
      timing : 1200
    }).start(()=>
      Animated.timing(this.state.animationValue,{
        toValue : 1,
        duration : 1200
      }).start()),
    Animated.parallel([
      Animated.timing(this.state.translateY,{
        toValue:this.state.toval==null?0.5:1,
        duration : 1200,
      }),
      Animated.timing(this.state.scale,{
          toValue : this.state.toval==null?0.5:1,
          duration : 1200,
          // asing: Easing.back(),
        })
    ]).start(()=>{this.props.navigation.navigate('B');Animated.timing(this.state.scale,{
      toValue : 1,
      timing : 1200
    }).start()});

    }

    // startScaleAnimation=()=>{
    //     Animated.parallel([
    //       Animated.timing(this.state.animationValue,{
    //         toValue:2,
    //         timing:1200
    //       }),
    //       Animated.timing(this.state.animationValue,{
    //         toValue:1,
    //         timing:1200
    //       }),
    //       Animated.timing(this.state.scale,{
    //         toValue:0.7,
    //         timing:1200
    //       })
    //     ]).start(()=>{this.props.navigation.navigate('B');Animated.timing(this.state.scale,{
    //           toValue : 1,
    //           timing : 3000
    //         }).start()})
    // }

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
          <View style={{width:500.677,height:158.374,position:'absolute',top:0,borderWidth:0,marginHorizontal:-20}}>
          <Svg xmlns="http://www.w3.org/2000/svg" width="500.677" height="158.374" viewBox="0 0 500.677 158.374">
            <Path d="M 0.96897334,2.6169344 H 500.85556 L 499.96314,156.63531 c -36.86631,-13.21602 -70.64536,-23.67678 -102.76212,-32.65404 -18.34349,-4.60219 -37.29688,-8.66003 -58.00695,-11.15016 -34.51648,-1.77133 -35.89015,-2.72783 -57.11452,0.79644 -16.61948,1.82792 -38.81607,5.73709 -51.76004,9.55727 -41.7758,14.1879 -32.37652,11.36689 -76.74768,22.30033 l -74.07038,11.94661 c -21.811243,3.81117 -49.310593,3.8411 -75.8552301,-0.79645 z"  fill={'#1d5685'}preserveAspectRatio = "none"/>
          </Svg>
        </View>
            {/* <Animated.View
             style={{width:width,height:200,
                    borderBottomRightRadius:2*1200/15+5-9,
                    borderBottomLeftRadius:2*150/3,
                    backgroundColor:'#65a7dd',
                    position:'absolute',
                    top:0,
                    transform:[{scaleY: this.state.scale},
                                {translateY:this.state.translateY.interpolate({inputRange:[0,1],outputRange:[1,0]}),},
                                {translateX:0},
                                {perspective: 1000},], // without this line this Animation will not render on Android while working fine on iOS
                    transition:2,
              }}>
          </Animated.View> */}
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
     height: 180,
     backgroundColor : '#FF6F00'
  },
});
