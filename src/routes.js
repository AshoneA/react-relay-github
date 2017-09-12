import App from './component/App';
import { CommitListPage } from './component/project'

const routes = {
  path: '/',
  component: App,
  childRoutes: [
    { path: 'commit', component: CommitListPage }
  ]
}

export default routes;
