import {RouteInfo} from '../types'
import View from './view'

export default class Router {
  routeTable: RouteInfo[];
  defaltRoute: RouteInfo | null;

  constructor() {
    window.addEventListener('hashchange', this.route.bind(this))

    this.routeTable = [];
    this.defaltRoute = null;
  }

  go(): void {
    this.route()
  }

  setDefaultPage(page: View): void {
    this.defaltRoute = {path: '', page};
  }

  addRoutePath(path: string, page: View): void {
    this.routeTable.push({path,page});
  }

  private route() {
    const routePath = location.hash;
    console.log(routePath)

    if(routePath === '' && this.defaltRoute) {
      this.defaltRoute.page.render();
    }

    for(const routeInfo of this.routeTable) {
      console.log(routePath, routePath.indexOf(routeInfo.path))
      if (routePath.indexOf(routeInfo.path) >= 0) {
        routeInfo.page.render();
        break
      }
    }
  }
}