import App from './component/App';
import { CommitListPage } from './component/project';
import UserPage from './component/User';
import IssueListPage, {
  IssueDetailPage
} from './component/issue';
import Chart, {
  PRChartPage,
  UserRepoPage
} from './component/chart';

const routes = {
  path: '/',
  component: App,
  indexRoute: {
    component: UserPage
  },
  childRoutes: [
    { path: 'commit/:owner/:name', component: CommitListPage },
    { path: 'user', component: UserPage },
    { path: 'issues', component: IssueListPage },
    { path: 'issues/:number', component: IssueDetailPage },
    { path: 'chart/primary/:user', component: Chart },
    { path: 'chart/repo/:user', component: UserRepoPage },
    { path: 'chart/:owner/:name', component: PRChartPage },

  ]
}

export default routes;
