import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignIn from '../pages/SingIn';
import Welcome from '../pages/welcome';
import Register from '../pages/register';
import Home from '../pages/home';


const stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <stack.Navigator>
            {/* {<stack.Screen 
            name="UserScreen" 
            component={UserScreen}
            /> } */}
            <stack.Screen 
            name="Welcome" 
            component={Welcome}
            // options={{headerShown: false}} 
            />

            <stack.Screen 
            name="SignIn" 
            component={SignIn} 
            options={{headerShown: false}} 
            />
            <stack.Screen 
            name="register" 
            component={Register} 
            options={{headerShown: false}} 
            />
            <stack.Screen 
            name="home" 
            component={Home} 
            options={{headerShown: false}} 
            />
        </stack.Navigator>
    );
}
