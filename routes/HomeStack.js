import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Branches from '../screens/Branches';
import About from '../screens/About';
import Onboarding from '../screens/Onboarding';
import SignUp from '../Register/SignUp';
import SignIn from '../Register/SignIn';
import Dashboard from '../screens/Dashboard';

//test imports
import BranchPage from '../screens/BranchPage';
import A_Branch from '../screens/A_Branch';

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
  BranchPage: {
    screen: BranchPage,  // props or hooks
  },
  A_Branch: {
    screen: A_Branch,
  }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
