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
import AddFriend from './src/components/Main/AddFriend';
import Notification from './src/components/Main/Notification';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const MainStack = createStackNavigator();
const ChatStack = createStackNavigator();
const AddFriendStack = createStackNavigator();
const NotificationStack = createStackNavigator();

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

const ChatStackScreen = () => {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen
        name="Chat"
        component={Chat}
        options={navOptionHandler}
      />
    </ChatStack.Navigator>
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
          } else if (route.name === 'Chat') {
            iconName = focused ? 'envelope-open-o' : 'envelope';
          } else if (route.name == 'AddFriend') {
            iconName = focused ? 'user-plus' : 'user-plus';
          } else if (route.name == 'Notification') {
            iconName = focused ? 'bell-o' : 'bell';
          }
          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#009387',
        inactiveTintColor: 'gray',
        labelStyle: {
          fontSize: 16,
          paddingTop: 20,
          paddingBottom: 10,
        },
      }}>
      <Tab.Screen name="Home" component={MainStackScreen} />
      <Tab.Screen name="AddFriend" component={AddFriendStackScreen} />
      <Tab.Screen name="Chat" component={ChatStackScreen} />
      <Tab.Screen name="Notification" component={NotificationStackScreen} />
    </Tab.Navigator>
  );
}

function drawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Chat" component={Chat} />
      <Drawer.Screen name="Home" component={MainScreen} />
    </Drawer.Navigator>
  );
}

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // const {signedIn} = this.props;
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainScreen" headerMode="none">
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="CodeVerification" component={CodeVerification} />
          <Stack.Screen name="MainScreen" component={bottomTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default AppContainer;
