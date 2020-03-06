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
class AppLoginScreen extends React.Component {

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
                <View style={{borderWidth:0,position:'absolute',top:width*0.06,alignSelf:'center',left:width*0.44}}>
                    <Text style={{fontSize:22,textAlign:'center',color:'#fff'}}>LOGIN</Text>
                </View>
                <View style={{justifyContent:'center',borderWidth:0,width:width*0.7,alignSelf:'center',marginBottom:100}}>
                    <View style={{borderWidth:0}}>
                        <Text style={{fontSize:16,paddingVertical:10}}>Email</Text>

                        <TextInput
                            style={{fontSize:16,paddingVertical:10,borderColor:'#000',
                                    shadowColor:"#fefefe",shadowOpacity:0.2,shadowRadius:15,
                                    shadowOffset:{height:2,width:0},elevation:15,
                                    backgroundColor:'#fff',paddingHorizontal:10}}
                            value={this.state.email}
                            onChangeText={(email)=>{this.setState({email})}}>
                        </TextInput>

                    </View>
                    <View style={{borderWidth:0,marginTop:10}}>
                        <Text style={{fontSize:16,paddingVertical:10}}>Password</Text>
                        <TextInput
                            style={{fontSize:16,paddingVertical:10,borderColor:'#000',
                                    shadowColor:"#fefefe",shadowOpacity:0.2,shadowRadius:15,
                                    shadowOffset:{height:2,width:0},elevation:15,
                                    backgroundColor:'#fff',paddingHorizontal:10}}
                            value={this.state.password}
                            onChangeText={(password)=>{this.setState({password})}}>
                        </TextInput>
                    </View>
                    <View style={{borderWidth:0}}>
                      <TouchableOpacity style={{borderWidth:0,alignSelf:'flex-end'}}>
                          <Text style={{fontSize:14,paddingVertical:4,paddingTop:15}}>Forgot password?</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{borderWidth:0,marginTop:10,alignItems:'center'}}>
                      <TouchableOpacity style={{borderWidth:0,backgroundColor:'#dd245c'}}
                                        onPress={()=>{this.props.navigation.navigate('Home')}}>
                          <Text style={{fontSize:20,paddingHorizontal:45,paddingVertical:10,color:'#fff'}}>Login</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{borderWidth:0,marginTop:15,alignItems:'center'}}>
                      <Text style={{fontSize:16}}>New to Loan App?</Text>
                      <TouchableOpacity style={{borderWidth:0,marginTop:10}}
                                        onPress={()=>{this.props.navigation.navigate('RegisterScreen')}}>
                          <Text style={{fontSize:16,textDecorationLine:'underline',paddingVertical:4}}>Register</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(AppLoginScreen);
