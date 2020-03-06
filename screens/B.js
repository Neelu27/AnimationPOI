import React, {Component} from 'react';
import { Animated, StyleSheet, View, TouchableWithoutFeedback,Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

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
      timing : 3000
    }).start(()=>{
      Animated.timing(this.state.scale,{
        toValue : 2,
        duration : 3000
      }).start(()=>{Animated.timing(this.state.animationValue,{
        toValue : 1,
        duration : 3000
      }).start();});
      this.props.navigation.navigate('A',{toValue:new Animated.Value(1)});
      console.log(new Animated.Value(1),'jjh');
    })
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
            <Animated.View
             style={{width:width,height:60,
                      backgroundColor:'#1d5685',
                      position:'absolute',
                      top:0,
                      transform: [{scaleY:this.state.scale},
                                  {translateY:2},
                                  {perspective: 1000}, // without this line this Animation will not render on Android while working fine on iOS
                                ],
                      transition:2,}}>
            </Animated.View>
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
  animatedBox:
  {
     width : 180,
     height: 40,
     backgroundColor : '#FF6F00'
  },

});
