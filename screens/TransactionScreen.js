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
import Toast, {DURATION} from 'react-native-easy-toast';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import * as actionTypes from '../actions/actionTypes';
import { LinearGradient } from 'expo-linear-gradient';
import CaroselScreen from '../components/CaroselScreen';
const { width } = Dimensions.get('window');
const height = width * 0.8
const SERVER_URL = settings.url
const themeColor = settings.themeColor

class TransactionScreen extends React.Component {
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
          // drawerLabel: 'Home',
        //   title: '',
        //   headerLeft: (
        //     <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center',marginLeft:15 }}>
        //    <TouchableOpacity onPress={()=>{navigation.openDrawer({'color':params});}}><FontAwesome name={'bars'} size={22} color={'#fff'}/></TouchableOpacity>
        //     </View>
        //  ),
        //   headerRight: (
        //     <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
        //       <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
        //         <TouchableOpacity style={{ marginHorizontal: 8 }} onPress={() => params.searchoption()}  ><Text><FontAwesome name="search" size={22} color="#fff" /> </Text></TouchableOpacity>
        //       </View>
        //
        //     </View>
        //   ),
        //   headerStyle: {
        //     backgroundColor:'#ff446b',
        //   },
        //   headerTintColor: '#fff',
        // }
      };

  componentDidMount(){}

  render() {
    return (
      <View style={{flex:1}}>
        <ImageBackground source={require('../assets/images/profilebg.png')} style={{width: '100%', height: '100%',marginTop:0}}>
            <Toast style={{backgroundColor: 'grey'}} textStyle={{color: '#fff'}} ref="toast" position = 'top'/>
            <View style={{height:Constants.statusBarHeight}} />
            <View style={{  flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',marginLeft:15 ,marginTop:15}}>
                <TouchableOpacity onPress={()=>{this.props.navigation.openDrawer();}}>
                    <Image source={require('../assets/images/bar.png')} style={{height:20,width:20,tintColor:'#fff'}}  />
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style={{color:'#fff',fontSize:22}}>Transaction History</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginHorizontal: 10 }}   >
                    <Image source={require('../AllImage/Icons-POI/notification.png')} style={{height:22,width:20,tintColor:'#fff'}}  />
                </TouchableOpacity>
            </View>
            <View style={{flex:1,justifyContent:'center',borderWidth:0,}}>

                <View style={{borderWidth:0,width:width,alignSelf:'center',marginTop:-120}}>
                  <View style={{borderWidth:0,borderRadius:70,width:width,height:width*0.35,
                                marginTop:40,alignSelf:'center',shadowColor:"#fefefe",
                                shadowOpacity:0.2,shadowRadius:15,paddingVertical:15,paddingHorizontal:15,
                                shadowOffset:{height:2,width:0},elevation:5,
                                backgroundColor:'#383636',flexDirection:'row'}}>
                      <View style={{flex:0.6,alignSelf:'center',paddingLeft:10}}>
                         <Text style={{textAlign:'left',paddingHorizontal:10,color:'#fff',fontSize:18,paddingBottom:5}}>Hi Surya</Text>
                         <View style={{borderWidth:0.5,borderColor:'#fff',marginHorizontal:10,width:width*0.3}}></View>
                         <Text style={{textAlign:'left',paddingHorizontal:10,color:'#fff',fontSize:18,paddingTop:6}}>Rs.4,000/-</Text>
                      </View>
                      <View style={{flex:0.4,alignSelf:'center',borderWidth:0,alignItems:'center'}}>
                           <Image source={require('../assets/images/61.png')} style={{height:width*0.22,width:width*0.22,borderWidth:1,borderRadius:0}}  />
                      </View>
                  </View>
                  <View style={{borderWidth:0,borderRadius:10,width:width*0.8,justifyContent:'space-between',
                                marginTop:20,alignSelf:'center',shadowColor:"#fefefe",
                                shadowOpacity:0.2,shadowRadius:15,paddingVertical:12,paddingHorizontal:6,
                                shadowOffset:{height:2,width:0},elevation:5,backgroundColor:'#fff'}}>
                        <Text style={{textAlign:'center',paddingHorizontal:4,fontSize:14,paddingBottom:0,color:'#000'}}>Recent activity</Text>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:4,marginTop:4}}>
                            <Image source={require('../assets/images/Icone.png')}
                              style={{height:12,width:12,marginTop:10,marginLeft:30}}  />
                            <View style={{borderWidth:0,paddingLeft:-8}}>
                                 <Text style={{textAlign:'left',paddingHorizontal:4,fontSize:14,paddingBottom:2,color:'#000'}}>Transaction Success</Text>
                                 <Text style={{textAlign:'left',paddingHorizontal:4,fontSize:12,paddingTop:4,color:'#5e5a5a'}}>Today, 12:50pm</Text>
                             </View>
                             <View style={{borderWidth:0,alignItems:'center',paddingRight:10}}>
                                 <Text style={{fontSize:14,paddingVertical:0,paddingHorizontal:17,color:'#000'}}>Rs. 4,000/-</Text>
                             </View>

                         </View>
                         <View style={{borderWidth:0.3}}></View>
                         <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:4,marginTop:4}}>
                             <Image source={require('../assets/images/w.png')} style={{height:12,width:12,marginTop:10,marginLeft:30}}  />
                             <View style={{borderWidth:0,paddingLeft:-8}}>
                                  <Text style={{textAlign:'left',paddingHorizontal:4,fontSize:14,paddingBottom:2,color:'#000'}}>Transaction Success</Text>
                                  <Text style={{textAlign:'left',paddingHorizontal:4,fontSize:12,paddingTop:4,color:'#5e5a5a'}}>Today, 12:50pm</Text>
                              </View>
                              <View style={{borderWidth:0,alignItems:'center',paddingRight:10}}>
                                  <Text style={{fontSize:14,paddingVertical:0,paddingHorizontal:17,color:'#000'}}>Rs. 4,000/-</Text>
                              </View>

                          </View>
                          <View style={{borderWidth:0.3}}></View>
                          <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:4,marginTop:4}}>
                              <Image source={require('../assets/images/Icone.png')}
                              style={{height:12,width:12,marginTop:10,marginLeft:30}}  />
                              <View style={{borderWidth:0,paddingLeft:-8}}>
                                   <Text style={{textAlign:'left',paddingHorizontal:4,fontSize:14,paddingBottom:2,color:'#000'}}>Transaction Success</Text>
                                   <Text style={{textAlign:'left',paddingHorizontal:4,fontSize:12,paddingTop:4,color:'#5e5a5a'}}>Today, 12:50pm</Text>
                               </View>
                               <View style={{borderWidth:0,alignItems:'center',paddingRight:10}}>
                                   <Text style={{fontSize:14,paddingVertical:0,paddingHorizontal:17,color:'#000'}}>Rs. 4,000/-</Text>
                               </View>
                           </View>
                         <Text style={{textAlign:'center',paddingTop:4}}>More</Text>
                         <FontAwesome name={'ellipsis-h'} size={16} style={{alignSelf:'center'}}color={'#dd245c'}/>
                  </View>
                  <View style={{borderWidth:0,borderRadius:10,width:width*0.8,flexDirection:'row',justifyContent:'space-between',
                                marginTop:20,alignSelf:'center',shadowColor:"#fefefe",
                                shadowOpacity:0.2,shadowRadius:15,paddingVertical:12,paddingHorizontal:6,
                                shadowOffset:{height:2,width:0},elevation:5,backgroundColor:'#fff'}}>
                        <View style={{borderWidth:0,alignItems:'center',justifyContent:'center',paddingVertical:15,paddingLeft:20}}>
                            <Image source={require('../AllImage/Icons-POI/tools.png')} style={{height:100,width:100,}}  />
                        </View>
                        <View style={{borderWidth:0,width:width*0.6,paddingVertical:6}}>
                             <Text style={{textAlign:'left',paddingHorizontal:4,fontSize:16,paddingBottom:0,color:'#000000',fontWeight:'400'}}>Settings</Text>
                             <Text style={{textAlign:'left',paddingHorizontal:4,fontSize:14,paddingTop:4,color:'#5e5a5a'}}>Settings and preferences</Text>
                         </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(TransactionScreen);
