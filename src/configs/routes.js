import PrivateScreen from '../screens/PrivateScreen';
import PublicScreen from '../screens/PublicScreen';
import Home from '../screens/Home';
import NotFound from '../screens/Other/NotFound';

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
    component: Home
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