import { Navigate, createBrowserRouter } from 'react-router-dom';
import { SplashScreen } from './components/screens/SplashScreen';
import { OnboardingScreen } from './components/screens/OnboardingScreen';
import { LoginScreen } from './components/screens/LoginScreen';
import { RegisterScreen } from './components/screens/RegisterScreen';
import { HomeScreen } from './components/screens/HomeScreen';
import { NewOccurrenceScreen } from './components/screens/NewOccurrenceScreen';
import { UploadEvidenceScreen } from './components/screens/UploadEvidenceScreen';
import { MapScreen } from './components/screens/MapScreen';
import { OccurrencesScreen } from './components/screens/OccurrencesScreen';
import { OccurrenceDetailScreen } from './components/screens/OccurrenceDetailScreen';
import { ChatScreen } from './components/screens/ChatScreen';
import { NotificationsScreen } from './components/screens/NotificationsScreen';
import { ProfileScreen } from './components/screens/ProfileScreen';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: SplashScreen,
  },
  {
    path: '/onboarding',
    Component: OnboardingScreen,
  },
  {
    path: '/login',
    Component: LoginScreen,
  },
  {
    path: '/register',
    Component: RegisterScreen,
  },
  {
    path: '/home',
    Component: HomeScreen,
  },
  {
    path: '/new-occurrence',
    Component: NewOccurrenceScreen,
  },
  {
    path: '/upload-evidence',
    Component: UploadEvidenceScreen,
  },
  {
    path: '/map',
    Component: MapScreen,
  },
  {
    path: '/occurrences',
    Component: OccurrencesScreen,
  },
  {
    path: '/occurrence/:id',
    Component: OccurrenceDetailScreen,
  },
  {
    path: '/chat',
    Component: ChatScreen,
  },
  {
    path: '/notifications',
    Component: NotificationsScreen,
  },
  {
    path: '/profile',
    Component: ProfileScreen,
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);
