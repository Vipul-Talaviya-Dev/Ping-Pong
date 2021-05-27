import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import Home from "../Screens/Home";
import Game from "../Screens/Game";

const RootStackNavigator = createStackNavigator();

const AppStackNavigator = createStackNavigator();

const AppStack = () => {
  return (
    <AppStackNavigator.Navigator initialRouteName={"home"} headerMode="none">
      <AppStackNavigator.Screen name={"home"} component={Home} />
      <AppStackNavigator.Screen name={"game"} component={Game} />
    </AppStackNavigator.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <RootStackNavigator.Navigator headerMode="none">
        <RootStackNavigator.Screen name="Home" component={AppStack} />
      </RootStackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
