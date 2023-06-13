import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions, useNavigation} from '@react-navigation/native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import store from './plugins/store.js';
import Login from './components/Login.js';
import Registration from './components/Registration.js';
import ForgetPass from './components/ForgetPass.js';
import Dashboard from './components/Dashboard.js';
import PassConfirm from './components/PassConfirm.js';
import Reservation from './components/Reservation.js';
import Profile from './components/Profile.js';
import Details from './components/Details.js';

const Stack = createNativeStackNavigator();

export default function App() {
    const [isFontsLoaded, setIsFontsLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        loadFonts();
    }, []);

    const loadFonts = async () => {
        await Font.loadAsync({
            Montserrat: require('./assets/fonts/static/Montserrat-Regular.ttf'),
            JosefinSans: require('./assets/fonts/static/JosefinSans-Regular.ttf'),
            LeagueGothic: require('./assets/fonts/static/LeagueGothic-Regular.ttf'),
            // Add more font definitions here
            // FontName: require('./path/to/FontFile.ttf'),
        });

        setIsFontsLoaded(true);
    };

    if (!isFontsLoaded) {
        return null; // Render a loading screen or placeholder until the fonts are loaded
    }

    return (
        <Provider store={store}>
            <NavigationContainer>
                <MainStack setIsLoading={setIsLoading} />
            </NavigationContainer>
        </Provider>
    );
}

function MainStack({ setIsLoading }) {
    const navigation = useNavigation();

    useEffect(() => {
        loadAccessToken();
    }, []);

    const loadAccessToken = async () => {
        try {
            const accessToken = await AsyncStorage.getItem('access_token');
            console.log(accessToken);
            // You can add your condition here
            if (accessToken) {
                // Access token is stored, navigate to the Dashboard
                // You can replace 'Dashboard' with the appropriate screen name
                navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [{ name: 'Dashboard' }] // Replace 'Dashboard' with the appropriate screen name
                    })
                );
            } else {
                // Access token is not stored, navigate to the Login screen
                navigation.navigate('Login');
            }
        } catch (error) {
            console.log('Error retrieving access token:', error);
            // Handle the error condition if needed
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Registration" component={Registration} options={{ headerShown: false }} />
            <Stack.Screen name="ForgetPass" component={ForgetPass} options={{ headerShown: false }} />
            <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
            <Stack.Screen name="PassConfirm" component={PassConfirm} options={{ headerShown: false }} />
            <Stack.Screen name="Reservation" component={Reservation} options={{ headerShown: false }} />
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}
