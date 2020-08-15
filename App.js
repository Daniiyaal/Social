import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

import SignIn from './src/components/SignIn';
import SignUp from './src/components/SignUp';
import CodeVerification from './src/components/CodeVerification';
import MainScreen from './src/components/Main/MainScreen';
import Chat from './src/components/Main/Chat';
import Messages from './src/components/Main/Messages';
import AddFriend from './src/components/Main/AddFriend';
import Profile from './src/components/Main/Profile';
import Notification from './src/components/Main/Notification';
import SearchBar from './src/components/SearchBar';
import CreatePost from './src/components/Main/UploadPosts/CreatePost';
import {View} from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const MainStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const AddFriendStack = createStackNavigator();
const NotificationStack = createStackNavigator();

// function Header() {
//   <View
//     style={{
//       flexDirection: 'row',
//       height: 50,
//       borderWidth: 1,
//       borderColor: 'red',
//     }}></View>;
// }

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="MainScreen"
        component={MainScreen}
        options={navOptionHandler}
      />
    </MainStack.Navigator>
  );
};

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={navOptionHandler}
      />
    </ProfileStack.Navigator>
  );
};

const AddFriendStackScreen = () => {
  return (
    <AddFriendStack.Navigator>
      <AddFriendStack.Screen
        name="AddFriend"
        component={AddFriend}
        options={navOptionHandler}
      />
    </AddFriendStack.Navigator>
  );
};

const NotificationStackScreen = () => {
  return (
    <NotificationStack.Navigator>
      <NotificationStack.Screen
        name="Notification"
        component={Notification}
        options={navOptionHandler}
      />
    </NotificationStack.Navigator>
  );
};

const navOptionHandler = () => ({
  headerShown: false,
});

function bottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name == 'AddFriend') {
            iconName = focused ? 'user-plus' : 'user-plus';
          } else if (route.name == 'Notification') {
            iconName = focused ? 'bell-o' : 'bell';
          } else if (route.name == 'Profile') {
            iconName = focused ? 'user-circle-o' : 'user-circle';
          }
          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#009387',
        inactiveTintColor: 'gray',
        swipeEnabled: true,
        labelStyle: {
          fontSize: 16,
          height: 1,
          // paddingTop: 20,
          // paddingBottom: 10,
        },
      }}>
      <Tab.Screen name="Home" component={MainStackScreen} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
      <Tab.Screen name="AddFriend" component={AddFriendStackScreen} />
      <Tab.Screen name="Notification" component={NotificationStackScreen} />
    </Tab.Navigator>
  );
}

// function drawer() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Chat" component={Chat} />
//       <Drawer.Screen name="Home" component={MainScreen} />
//     </Drawer.Navigator>
//   );
// }

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // const {signedIn} = this.props;
    const {navigation} = this.props;
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainScreen" headerMode="none">
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen
            name="CodeVerification"
            component={CodeVerification}
            navigation={navigation}
          />
          <Stack.Screen
            name="MainScreen"
            component={bottomTabs}
            navigation={navigation}
          />
          <Stack.Screen name="Chat" component={Chat} navigation={navigation} />
          <Stack.Screen name="Messages" component={Messages} />
          <Stack.Screen
            name="SearchBar"
            component={SearchBar}
            navigation={navigation}
          />
          <Stack.Screen
            name="CreatePost"
            component={CreatePost}
            navigation={navigation}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default AppContainer;
