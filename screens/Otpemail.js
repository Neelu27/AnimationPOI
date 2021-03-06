import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Slider,
  Dimensions,ImageBackground,
  TextInput, FlatList, AsyncStorage, Alert, Linking, PermissionsAndroid, ToastAndroid,ActivityIndicator
} from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast';
import { FontAwesome } from '@expo/vector-icons';
import { MonoText } from '../components/StyledText';
import  Constants  from 'expo-constants';
import SmsListener from 'react-native-android-sms-listener'
import * as Expo from 'expo';
import * as Permissions from 'expo-permissions';
import * as Google from 'expo-google-app-auth';
import * as Facebook from 'expo-facebook';
import settings from '../constants/Settings.js';
const { width } = Dimensions.get('window');
const height = width * 0.8
const SERVER_URL = settings.url
const themeColor = settings.themeColor
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import * as actionTypes from '../actions/actionTypes';
import { LinearGradient } from 'expo-linear-gradient';
class Otpemail extends React.Component {

  static navigationOptions = {
    header:null,
  }


  constructor(props) {
    super(props);
    this.state = {
        email:'',
        password:'',
    }
  }





  render() {
    return (

      <View style={{flex:1}}>
        <ImageBackground source={require('../assets/images/apploginbg.png')} style={{width: '100%', height: '100%'}}>
            <Toast style={{backgroundColor: 'grey'}} textStyle={{color: '#fff'}} ref="toast" position = 'top'/>
            <View style={{height:Constants.statusBarHeight}} />
            <View style={{flex:1,justifyContent:'center',borderWidth:0,}}>

                <View style={{justifyContent:'center',borderWidth:0,width:width*0.7,alignSelf:'center',marginBottom:120}}>
                    <View style={{borderWidth:0,alignItems:'center'}}>
                        <Text style={{fontSize:18,paddingVertical:20}}>Enter OTP</Text>
                    </View>
                    <View style={{borderWidth:0,alignItems:'center',marginVertical:10}}>
                        <Text style={{fontSize:16,paddingVertical:2}}>One Time Password has been sent to</Text>
                        <Text style={{fontSize:16,paddingVertical:2}}>your email lg1234@gmail.com</Text>
                    </View>
                    <View style={{borderWidth:0,flexDirection:'row',justifyContent:'space-between',marginVertical:20}}>
                        <View style={{borderWidth:0,height:60,width:60,borderRadius:30,backgroundColor:'#dd245c'}}></View>
                        <View style={{borderWidth:0,height:60,width:60,borderRadius:30,backgroundColor:'#dd245c'}}></View>
                        <View style={{borderWidth:0,height:60,width:60,borderRadius:30,backgroundColor:'#dd245c'}}></View>
                        <View style={{borderWidth:0,height:60,width:60,borderRadius:30,backgroundColor:'#dd245c'}}></View>
                    </View>
                    <View style={{borderWidth:0,marginTop:10,alignItems:'center'}}>
                        <Text style={{fontSize:14,paddingVertical:10}}>Resend code in 00:29</Text>
                    </View>

                    <View style={{borderWidth:0,marginTop:15,alignItems:'center'}}>
                      <TouchableOpacity style={{borderWidth:0,backgroundColor:'#dd245c',borderRadius:35,}}
                                        onPress={()=>{this.props.navigation.navigate('MobileRegistretion')}}>
                          <FontAwesome name={'arrow-right'} size={22}color={'#fff'}style={{paddingHorizontal:25,paddingVertical:22}}/>
                          {/* <Text style={{fontSize:22,paddingHorizontal:25,paddingVertical:15,color:'#fff'}}>O</Text> */}
                      </TouchableOpacity>
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
    justifyContent: 'space-between',

  },
});

const mapStateToProps =(state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Otpemail);
