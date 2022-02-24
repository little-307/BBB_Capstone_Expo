import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Branches from '../screens/Branches';
import About from '../screens/About';
import Onboarding from '../screens/Onboarding';
import SignUp from '../Register/SignUp';
import SignIn from '../Register/SignIn';
import Dashboard from '../screens/Dashboard';

const screens = {
  Home: {
    screen: Onboarding,
  },
  SignIn: {
    screen: SignIn,
  },
  SignUp: {
    screen: SignUp,
  },
  Dashboard: {
    screen: Dashboard,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
