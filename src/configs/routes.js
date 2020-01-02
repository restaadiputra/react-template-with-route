import PrivateScreen from '../screens/PrivateScreen';
import PublicScreen from '../screens/PublicScreen';
import Home from '../screens/Home';
import NotFound from '../screens/Other/NotFound';

/* 
  * Each route list will have several page.
  * Each page will have several keys.
  * Each keys will have the same name as props that accepted by React Route.
  * The minimum keys that must be available are:
    - title (will be shown in title bar)
    - path (the path of component will be displayed)
    - component
*/

export const privateRoute = {
  private: {
    title: 'Private Page',
    path: '/private',
    component: PrivateScreen
  }
};

export const publicRoute = {
  public: {
    title: 'Public Page',
    path: '/public',
    component: PublicScreen
  },
  home: {
    title: 'Home',
    path: '/',
    component: Home,
    exact: true
  }
};

export const otherRoute = {
  notFound: {
    title: '404 Not Found',
    path: '/*',
    component: NotFound
  }
};

export default { ...privateRoute, ...publicRoute, ...otherRoute };
