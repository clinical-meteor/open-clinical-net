import HelloWorldPage from './client/HelloWorldPage.jsx';
import PostcardPage from './client/PostcardPage.jsx';

var DynamicRoutes = [{
  'name': 'HelloWorldPage',
  'path': '/open-clinical-net',
  'component': HelloWorldPage
}];

var SidebarElements = [{
  'primaryText': 'Open Clinical Net',
  'to': '/open-clinical-net',
  'href': '/open-clinical-net'
}];

export { SidebarElements, DynamicRoutes, SamplePage, PostcardPage };
