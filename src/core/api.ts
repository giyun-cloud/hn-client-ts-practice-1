import {NewsFeed, NewsDetail} from "../types"

export class Api {
  getRequest < AjaxResponse > (url: string): AjaxResponse {
    const ajax: XMLHttpRequest = new XMLHttpRequest
    ajax.open("GET", url, false);
    ajax.send();

    return JSON.parse(ajax.response);
  }
}

export class NewsFeedApi extends Api {
  getData(url: string): NewsFeed[] {
    return this.getRequest < NewsFeed[] > (url);
  }
}

export class NewsDetailApi extends Api {
  getData(url: string): NewsDetail {
    return this.getRequest < NewsDetail > (url);
  }
}
