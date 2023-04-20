import Login from './components/Login.js';
import Registration from './components/Registration.js';
import ForgetPass from './components/ForgetPass.js';
import Dashboard from './components/Dashboard.js';
import PassConfirm from './components/PassConfirm.js';
import Reservation from './components/Reservation.js';
import Profile from './components/Profile.js';
import Details from './components/Details.js';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from 'react-redux';
import store from './plugins/store.js';

const Stack = createNativeStackNavigator();

export default function App (){
  return(
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Registration" component={Registration} options={{headerShown: false}}/>
        <Stack.Screen name="ForgetPass" component={ForgetPass} options={{headerShown: false}}/>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}}/>
        <Stack.Screen name="PassConfirm" component={PassConfirm} options={{headerShown: false}}/>
        <Stack.Screen name="Reservation" component={Reservation} options={{headerShown: false}}/>
        <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
        <Stack.Screen name="Details" component={Details} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}