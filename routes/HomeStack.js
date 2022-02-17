import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Dashboard from '../screens/Dashboard';
import Branches from '../screens/Branches';
import About from '../screens/About';
import Onboarding from '../screens/Onboarding';
import SignUp from '../Register/SignUp';

const screens = {
  Home: {
    screen: Onboarding,
  },
  SignUp: {
    screen: SignUp,
  },
  About: {
    screen: About,
  }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
