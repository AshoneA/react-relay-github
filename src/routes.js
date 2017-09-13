import App from './component/App';
import { CommitListPage } from './component/project';
import UserPage from './component/User';
import IssueListPage, {
  IssueDetailPage
} from './component/issue';

const routes = {
  path: '/',
  component: App,
  childRoutes: [
    { path: 'commit', component: CommitListPage },
    { path: 'user', component: UserPage },
    { path: 'issues', component: IssueListPage },
    { path: 'issues/:number', component: IssueDetailPage },
  ]
}

export default routes;
