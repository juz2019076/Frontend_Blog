import { DashboardPage } from './pages/dashboard';
import { AuthPage } from './pages/auth';

const routes = [
    {path: '/auth' , element: <AuthPage/>},
    {path: '/*' , element: <AuthPage/>}
]

export default routes