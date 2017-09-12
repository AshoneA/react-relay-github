import App from './component/App';
import { CommitListPage } from './component/project';
import UserPage from './component/User';

const routes = {
  path: '/',
  component: App,
  childRoutes: [
    { path: 'commit', component: CommitListPage },
    { path: 'user', component: UserPage }
  ]
}

export default routes;
