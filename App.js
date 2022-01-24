import React from 'react';
import { Location, Order,OrderDetail   } from "./src/screens";
import { createNativeStackNavigator  } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import themeReducer from './src/stores/themeReducer';

import Tabs from "./src/navigation/tabs";

const Stack = createNativeStackNavigator();

const store = createStore(
  themeReducer,
  applyMiddleware(thunk)
)

const App = () => {
  const [appIsReady, setAppIsReady] = React.useState(false);

  React.useEffect(() => {
    async function prepare() {
      try {
       
        await SplashScreen.preventAutoHideAsync();
        
        await Font.loadAsync({"Roboto-Bold": require('./src/assets/fonts/Roboto-Bold.ttf'),
        "Roboto-Black": require('./src/assets/fonts/Roboto-Black.ttf'),
        "Roboto-Regular": require('./src/assets/fonts/Roboto-Regular.ttf'),});
       
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = React.useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  onLayoutRootView()
 
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Home'}
            >
                <Stack.Screen
                    name="Home"
                    component={Tabs}
                />

                <Stack.Screen
                    name="Location"
                    component={Location}
                />

                <Stack.Screen
                    name="Order"
                    component={Order}
                />

                <Stack.Screen
                    name="OrderDetail"
                    component={OrderDetail}
                />
            </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

export default App;