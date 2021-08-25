import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {colors} from '../styles/colors.style';
import {HomeScreen} from '../screens/main/home.screen';
import {NotificationsScreen} from '../screens/main/notifications.screen';
import {MessagesScreen} from '../screens/main/messages.screen';
import {ProfileScreen} from '../screens/main/profile.screen';

const Tab = createMaterialBottomTabNavigator();

export const MainNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor={colors.white} inactiveColor={colors.white} shifting={false}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
    </Tab.Navigator>
  );
};
