import React from 'react';
import { Platform ,Image,View,TouchableOpacity} from 'react-native';
import { FontAwesome ,Ionicons,MaterialCommunityIcons,MaterialIcons,SimpleLineIcons} from '@expo/vector-icons';

import { createAppContainer,createSwitchNavigator,withNavigation} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator,DrawerItems } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from '../screens/HomeScreen';
import LogInScreen from '../screens/LogInScreen';
import AppLoginScreen from '../screens/AppLoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import OTPScreen from '../screens/OTPScreen';
import Otpemail from '../screens/Otpemail';
import TransactionScreen from '../screens/TransactionScreen';
import AdsScreen from '../screens/AdsScreen';
import ProfileScreen from '../screens/ProfileScreen';

import DrawerContent from '../components/DrawerContent';
import TabBarIcon from '../components/TabBarIcon';
import IconWithBadge from '../components/IconWithBadge';
import EmailRegister from '../components/EmailRegister';
import MobileRegistretion from '../components/MobileRegistretion';
import BlogScreen from '../components/BlogScreen';
import ShareScreen from '../components/ShareScreen';
import ContactScreen from '../components/ContactScreen';
import HelpScreen from '../components/HelpScreen';
import SettingsScreen from '../components/SettingsScreen';
import A from '../screens/A';
import B from '../screens/B';
const HomeStack = createStackNavigator(
    {
      HomeScreen:{
          screen: HomeScreen,
          navigationOptions: {}
      },
   },
   {
     initialRouteName: 'HomeScreen',
   }
)
HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarVisible:true,
    tabBarStyle:{
       borderWidth:0,
       borderColor:'#fff',
       shadowOffset: { height: 0, width: 0 },
       shadowColor: 'transparent',
       shadowOpacity: 0,
       elevation: 0 },
    tabBarOptions: {
        activeTintColor: "#cd3534",
        inactiveTintColor: '#000',
        activeBackgroundColor: 'trasnparent',
        inactiveBackgroundColor: 'trasnparent',
        borderTopWidth:0,
        borderTopColor: "transparent",
        labelStyle:{fontSize:16},
        style:{borderWidth:0,height:50,borderColor:'#fff',shadowOffset: { height: 0, width: 0 },
        shadowColor: 'transparent',
        shadowOpacity: 0,
        elevation: 0},
        tabStyle:{borderWidth:0,height:50,borderColor:'#fff',shadowOffset: { height: 0, width: 0 },
        shadowColor: 'transparent',
        shadowOpacity: 0,
        elevation: 0}
    },
    headerStyle:{borderWidth:0,shadowOffset: { height: 0, width: 0 },
    shadowColor: 'transparent',
    shadowOpacity: 0,
    elevation: 0},
    tabBarIcon: ({ focused, tintColor }) => (
      focused ?<Image
                source={require('../AllImage/Icons-POI/home1.png')}
                style={{width:30,height:30,tintColor:tintColor,marginVertical:10}}
            />:<Image
                  source={require('../AllImage/Icons-POI/home1.png')}
                  style={{width:27,height:27,tintColor:tintColor,marginVertical:10}}
                />
  ),
};

const TransactionStack = createStackNavigator(
    {
      TransactionScreen:{
          screen: TransactionScreen,
          navigationOptions: {}
      },
   },
   {
     initialRouteName: 'TransactionScreen',
   }
)
TransactionStack.navigationOptions = {
    tabBarLabel: 'Transaction',
    tabBarStyle:{
        borderWidth:0,
        borderColor:'#fff',
        shadowOffset: { height: 0, width: 0 },
        shadowColor: 'transparent',
        shadowOpacity: 0,
        elevation: 0 },
    tabBarVisible:true,
    tabBarOptions: {
        activeTintColor: "#cd3534",
        inactiveTintColor: '#000',
        activeBackgroundColor: 'trasnparent',
        inactiveBackgroundColor: 'trasnparent',
        borderTopWidth:0,
        borderTopColor: "transparent",
        labelStyle:{fontSize:16},
        style:{borderWidth:0,height:50,borderColor:'#fff',shadowOffset: { height: 0, width: 0 },
        shadowColor: 'transparent',
        shadowOpacity: 0,
        elevation: 0},
        tabStyle:{borderWidth:0,height:50,borderColor:'#fff',shadowOffset: { height: 0, width: 0 },
        shadowColor: 'transparent',
        shadowOpacity: 0,
        elevation: 0}
    },
    headerStyle:{borderWidth:0,shadowOffset: { height: 0, width: 0 },
    shadowColor: 'transparent',
    shadowOpacity: 0,
    elevation: 0},
    tabBarIcon: ({ focused, tintColor }) => (
      focused ?<Image
                  source={require('../AllImage/Icons-POI/transaction.png')}
                  style={{width:30,height:30,tintColor:tintColor,marginVertical:10}}
              />:<Image
                    source={require('../AllImage/Icons-POI/transaction.png')}
                    style={{width:25,height:25,tintColor:tintColor,marginVertical:10}}
                  />
  ),
};

const AdsStack = createStackNavigator(
    {
      AdsScreen:{
          screen: AdsScreen,
          navigationOptions: {}
      },
   },
   {
     initialRouteName: 'AdsScreen',
   }
)
AdsStack.navigationOptions = {
    tabBarLabel: 'Ads',
    tabBarVisible:true,
    tabBarStyle:{
        borderWidth:0,
        borderColor:'#fff',
        shadowOffset: { height: 0, width: 0 },
        shadowColor: 'transparent',
        shadowOpacity: 0,
        elevation: 0 },
    tabBarOptions: {
        activeTintColor: "#cd3534",
        inactiveTintColor: '#000',
        activeBackgroundColor: 'trasnparent',
        inactiveBackgroundColor: 'trasnparent',
        borderTopWidth:0,
        borderTopColor: "transparent",
        labelStyle:{fontSize:16},
        style:{borderWidth:0,height:50,borderColor:'#fff',shadowOffset: { height: 0, width: 0 },
        shadowColor: 'transparent',
        shadowOpacity: 0,
        elevation: 0},
        tabStyle:{borderWidth:0,height:50,borderColor:'#fff',shadowOffset: { height: 0, width: 0 },
        shadowColor: 'transparent',
        shadowOpacity: 0,
        elevation: 0}
    },
    headerStyle:{borderWidth:0,shadowOffset: { height: 0, width: 0 },
    shadowColor: 'transparent',
    shadowOpacity: 0,
    elevation: 0},
    tabBarIcon: ({ focused, tintColor }) => (
      focused ?<Image
                  source={require('../AllImage/Icons-POI/tool.png')}
                  style={{width:30,height:30,tintColor:tintColor,marginVertical:10}}
              />:<Image
                    source={require('../AllImage/Icons-POI/tool.png')}
                    style={{width:27,height:27,tintColor:tintColor,marginVertical:10}}
                  />
  ),
};

const ProfileStack = createStackNavigator(
    {
      ProfileScreen:{
          screen: ProfileScreen,
          navigationOptions: {}
      },
   },
   {
     initialRouteName: 'ProfileScreen',
   }
)
ProfileStack.navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarVisible:true,
    tabBarStyle:{
        borderWidth:0,
        borderColor:'#fff',
        shadowOffset: { height: 0, width: 0 },
        shadowColor: 'transparent',
        shadowOpacity: 0,
        elevation: 0 },
    tabBarOptions: {
        activeTintColor: "#cd3534",
        inactiveTintColor: '#000',
        activeBackgroundColor: 'trasnparent',
        inactiveBackgroundColor: 'trasnparent',
        borderTopWidth:0,
        borderTopColor: "transparent",
        labelStyle:{fontSize:16},
        style:{borderWidth:0,height:50,borderColor:'#fff',shadowOffset: { height: 0, width: 0 },
        shadowColor: 'transparent',
        shadowOpacity: 0,
        elevation: 0},
        tabStyle:{borderWidth:0,height:50,borderColor:'#fff',shadowOffset: { height: 0, width: 0 },
        shadowColor: 'transparent',
        shadowOpacity: 0,
        elevation: 0}
      },
    headerStyle:{borderWidth:0,shadowOffset: { height: 0, width: 0 },
    shadowColor: 'transparent',
    shadowOpacity: 0,
    elevation: 0},
    tabBarIcon: ({ focused, tintColor }) => (
    focused ?<Image
                source={require('../AllImage/Icons-POI/settings.png')}
                style={{width:30,height:30,tintColor:tintColor,marginVertical:10}}
            />:<Image
                  source={require('../AllImage/Icons-POI/settings.png')}
                  style={{width:27,height:27,tintColor:tintColor,marginVertical:10}}
                />
  ),
};

const LogInStack = createStackNavigator(
    {
      LogInScreen:LogInScreen,
      AppLoginScreen:AppLoginScreen,
      RegisterScreen:RegisterScreen,
      OTPScreen:OTPScreen,
      Otpemail:Otpemail,
      EmailRegister:EmailRegister,
      MobileRegistretion:MobileRegistretion,
   },
   {
     initialRouteName: 'LogInScreen',
   }
)

const BlogStack = createStackNavigator(
  {
    BlogScreen:{
        screen: BlogScreen,
        navigationOptions: {
            header: null,
        }
    },
 },
 {
   initialRouteName: 'BlogScreen',
 }
)

const ShareStack = createStackNavigator(
  {
    ShareScreen:{
        screen: ShareScreen,
        navigationOptions: {
            header: null,
        }
    },
 },
 {
   initialRouteName: 'ShareScreen',
 }
)

const ContactStack = createStackNavigator(
  {
    ContactScreen:{
        screen: ContactScreen,
        navigationOptions: {
            header: null,
        }
    },
 },
 {
   initialRouteName: 'ContactScreen',
 }
)

const HelpStack = createStackNavigator(
  {
    HelpScreen:{
        screen: HelpScreen,
        navigationOptions: {
            header: null,
        }
    },
   },
   {
     initialRouteName: 'HelpScreen',
   }
)

const SettingsStack = createStackNavigator(
    {
      SettingsScreen:{
          screen: SettingsScreen,
          navigationOptions: {
              header: null,
          }
      },
   },
   {
     initialRouteName: 'SettingsScreen',
   }
)

const navigateBar =  createBottomTabNavigator({
    Home:{
      screen:HomeStack,
      navigationOptions:{
        header:null
      }
    },
    Transaction:{
      screen:TransactionStack,
      navigationOptions:{
        header:null
      }
    },
    Ads:{
      screen:AdsStack,
      navigationOptions:{
        header:null
      }
    },
    Profile:{
      screen:ProfileStack,
      navigationOptions:{
        header:null
      }
    }
});

const navigate = createStackNavigator({
   LogInScreen:{
       screen: LogInStack,
       navigationOptions: {
          header:null
       }
   } ,
   navigateBar:{
     screen:navigateBar,
     navigationOptions:{
        header:null
     }
   },
});

const drawerNavigator = createDrawerNavigator({
    navigate:{
      screen:navigate,
      navigationOptions:{
        drawerLabel:()=>null
      }
    },
    // Home:{
    //     screen:HomeStack,
    //     navigationOptions: {
    //           drawerLabel: () => null
    //         //  'Home',
    //         // drawerIcon: ({ tintColor }) => (
    //         //   <FontAwesome name="home" size={25} color={tintColor} />
    //         // )
    //     }
    // } ,

    Blog:{
        screen: BlogStack,
        navigationOptions: {
            drawerLabel: () => null
       }
    },

    Share:{
        screen: ShareStack,
        navigationOptions: {
            drawerLabel: () => null
       }
    },

    Contact:{
        screen: ContactStack,
        navigationOptions: {
            drawerLabel: () => null
       }
    },

    Help:{
        screen: HelpStack,
        navigationOptions: {
            drawerLabel: () => null
       }
    },

    Settings:{
        screen: SettingsStack,
        navigationOptions: {
            drawerLabel: () => null
       }
    },
  },
  {
    drawerBackgroundColor:'#fff',
    drawerPosition:'left',
    drawerType:'slide',
    hideStatusBar:false,
    contentComponent:props =><DrawerContent  {...props}  />,
    contentOptions: {
        activeTintColor: '#ee5034',
        inactiveTintColor: '#efa834',
        itemsContainerStyle: {
            marginVertical: 0,
            paddingVertical:0
        },
        iconContainerStyle: {
            opacity: 1
        }
    },
    initialRouteName:'navigate'
  }
);
const AStack = createStackNavigator(
    {
      A:{
          screen: A,
          navigationOptions: {}
      },
      B:B
   },
   {
     initialRouteName: 'A',
   }
)
export default createAppContainer(AStack);
