import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignIn from '../pages/SingIn';
import Welcome from '../pages/welcome';


const stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <stack.Navigator>
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
        </stack.Navigator>
    );
}
