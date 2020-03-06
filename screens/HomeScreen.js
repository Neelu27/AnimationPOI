import React from 'react';
import {
  Image,Platform,
  ScrollView,StyleSheet,
  Text,Button,TextInput,
  TouchableOpacity,View,
  Slider,ImageBackground,
  Dimensions, Alert,StatusBar,
  FlatList, AppState, BackHandler ,
  AsyncStorage,ActivityIndicator,
  ToastAndroid,RefreshControl} from 'react-native';
import { createDrawerNavigator,DrawerItems, } from 'react-navigation-drawer';
import { FontAwesome,Entypo } from '@expo/vector-icons';
import { MonoText } from '../components/StyledText';
import  Constants  from 'expo-constants';
import { withNavigationFocus,DrawerActions ,DrawerNavigator} from 'react-navigation';
import settings from '../constants/Settings.js';
import CaroselScreen from '../components/CaroselScreen';
import Toast, {DURATION} from 'react-native-easy-toast';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import * as actionTypes from '../actions/actionTypes';
import { LinearGradient } from 'expo-linear-gradient';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const { width } = Dimensions.get('window');
const height = width * 0.8
const SERVER_URL = settings.url
const themeColor = settings.themeColor

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      images : [{name:'Primary',value:'Rs. 4,000/-',},
                      {name:'Premium',value:'Rs. 10,000/-',},
                      {name:'Platnum',value:'Rs. 20,000/-',}]
      }
    }

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state
        console.log(params,'params')
        return {header:null}
      };

  componentDidMount(){}

  render() {
    return (
      <View style={{flex:1}}>
        <ImageBackground source={require('../assets/images/62.png')} style={{width: '100%', height: '100%',marginTop:0}}>
            <Toast style={{backgroundColor:'grey'}} textStyle={{color: '#fff'}} ref="toast" position = 'top'/>
            <View style={{height:Constants.statusBarHeight}}/>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginLeft:15 ,marginTop:15}}>
                <TouchableOpacity onPress={()=>{this.props.navigation.openDrawer();}}>
                    <Image source={require('../assets/images/bar.png')} style={{height:20,width:20,tintColor:'#fff'}}  />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginHorizontal: 10 }}  >
                    <Image source={require('../AllImage/Icons-POI/notification.png')}      style={{height:22,width:20,tintColor:'#fff'}}  />
               </TouchableOpacity>
            </View>
            <View style={{flex:1,justifyContent:'center',borderWidth:0,}}>
              <View style={{height:width*0.17,width:width*0.17,
                            borderWidth:0,position:'absolute',top:width*0.07,
                            alignSelf:'center',left:width*0.44}}>
                    <Image source={require('../assets/images/6.png')}  style={{height:'100%',width:'100%',borderWidth:1,borderRadius:40}}  />
            </View>
            <View style={{borderWidth:0,width:width,alignSelf:'center',marginTop:20}}>
                <View style={{borderWidth:0,alignSelf:'center',alignItems:'center'}}>
                          <Text style={{fontSize:20,paddingVertical:10}}>Surya lg</Text>
                          <Text style={{fontSize:18,paddingVertical:6}}>Current Balance</Text>
                          <Text style={{fontSize:18,paddingVertical:10,color:'#dd245c',fontWeight:'600'}}>Rs.4000/-</Text>
                </View>
                <MyCarousel/>

                <View style={{borderWidth:0,borderRadius:10,
                              width:width*0.75,marginTop:10,alignSelf:'center',
                              shadowColor:"#fefefe",shadowOpacity:0.2,
                              shadowRadius:15,paddingVertical:6,
                              shadowOffset:{height:2,width:0},
                              elevation:5,backgroundColor:'#fff'}}>
                    <Text style={{textAlign:'left',paddingHorizontal:10,color:'#5e5a5a'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s,</Text>
                </View>
                <View style={{borderWidth:0,borderRadius:10,
                              width:width*0.75,marginTop:10,alignSelf:'center',
                              shadowColor:"#fefefe",shadowOpacity:0.2,shadowRadius:15,
                              backgroundColor:'#fff',paddingVertical:6,
                              shadowOffset:{height:2,width:0},elevation:5,}}>
                    <Text style={{textAlign:'left',paddingHorizontal:10,color:'#5e5a5a'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s,</Text>
                </View>
              </View>
            </View>

        </ImageBackground>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

const mapStateToProps =(state) => {
    return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

class MyCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      activeSlide:0,
      entries : [{name:'Primary',value:'Rs. 4,000/-',},
                 {name:'Premium',value:'Rs. 10,000/-',},
                 {name:'Platnum',value:'Rs. 20,000/-',}]
      }
    }
    _renderItem ({item, index}) {
        return <LinearGradient
                  colors={['#181717','#2b2b2b','#696969']}
                  style={{width:width*0.35,height:width*0.35,borderWidth:0,
                          justifyContent:'center',marginBottom:4,marginHorizontal:10,
                          borderRadius:10,alignItems:'center'}}>
                  <Text style={{color:'#fff',fontSize:16,paddingVertical:6,paddingLeft:0}}>{item.name}</Text>
                  <Text style={{color:'#fff',fontSize:16,paddingVertical:6,paddingLeft:0}}>{item.value}</Text>
                  <View style={{width:20,height:27,borderWidth:0,borderColor:'#fff',alignSelf:'center',marginLeft:8}}>
                      <Image  source={require('../AllImage/Icons-POI/lock1.png')} style={{width:'100%',height:'100%'}}/>
                  </View>
          </LinearGradient>
    }
    get pagination () {
        const { entries, activeSlide } = this.state;
        return (
            <Pagination
              dotsLength={entries.length}
              activeDotIndex={activeSlide}
              containerStyle={{ backgroundColor: 'trasnparent' }}
              dotStyle={{
                  width: 8,
                  height: 8,
                  borderRadius:4,
                  marginHorizontal:1,
                  backgroundColor: '#d21850',
                  borderWidth:0.2
              }}
              inactiveDotStyle={{
                  width: 8,
                  height: 8,
                  borderRadius:4,
                  marginHorizontal:1,
                  backgroundColor: '#cfcfcf',
                  borderWidth:0.5
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
        );
    }

    render () {
        return (
            <View>
                <Carousel
                  data={this.state.entries}
                  renderItem={this._renderItem}
                  onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                />
                { this.pagination }
            </View>
        );
    }
  }
  const sliderWidth=width*1;
const itemWidth=width*0.47;



{/* // <ScrollView
//     style={{marginTop:10}}
//     horizontal
//     pagingEnabled
//     showsHorizontalScrollIndicator={false}>
//   <LinearGradient
//           colors={['#000000','#2b2b2b','#696969']}
//           style={{width:width*0.35,height:width*0.35,borderWidth:0,
//                   justifyContent:'center',marginBottom:4,marginHorizontal:25,
//                   borderRadius:10,alignItems:'center'}}>
//           <Text style={{color:'#fff',fontSize:16,paddingVertical:6,paddingLeft:0}}>Primary</Text>
//           <Text style={{color:'#fff',fontSize:16,paddingVertical:6,paddingLeft:0}}>Rs. 4,000/-</Text>
//           <View style={{width:22,height:27,borderWidth:0,borderColor:'#fff',alignSelf:'center',marginLeft:8}}>
//               <Image  source={require('../AllImage/Icons-POI/lock1.png')} style={{width:'100%',height:'100%'}}/>
//           </View>
//   </LinearGradient>
//   <LinearGradient
//           colors={['#000000','#2b2b2b','#696969']}
//           style={{width:width*0.35,height:width*0.35,borderWidth:0,
//                   justifyContent:'center',marginBottom:4,marginHorizontal:25,
//                   borderRadius:10,alignItems:'center'}}>
//           <Text style={{color:'#fff',fontSize:16,paddingVertical:6,paddingLeft:0}}>Premium</Text>
//           <Text style={{color:'#fff',fontSize:16,paddingVertical:6,paddingLeft:0}}>Rs. 10,000/-</Text>
//           <View style={{width:22,height:27,borderWidth:0,borderColor:'#fff',alignSelf:'center',marginLeft:8}}>
//               <Image  source={require('../AllImage/Icons-POI/lock1.png')} style={{width:'100%',height:'100%'}}/>
//           </View>
//   </LinearGradient>
//   <LinearGradient
//           colors={['#181717','#2b2b2b','#696969']}
//           style={{width:width*0.35,height:width*0.35,borderWidth:0,
//                   justifyContent:'center',marginBottom:4,marginHorizontal:25,
//                   borderRadius:10,alignItems:'center'}}>
//           <Text style={{color:'#fff',fontSize:16,paddingVertical:6,paddingLeft:0}}>Platnum</Text>
//           <Text style={{color:'#fff',fontSize:16,paddingVertical:6,paddingLeft:0}}>Rs. 20,000/-</Text>
//           <View style={{width:20,height:27,borderWidth:0,borderColor:'#fff',alignSelf:'center',marginLeft:8}}>
//               <Image  source={require('../AllImage/Icons-POI/lock1.png')} style={{width:'100%',height:'100%'}}/>
//           </View>
//   </LinearGradient>
// </ScrollView> */}
