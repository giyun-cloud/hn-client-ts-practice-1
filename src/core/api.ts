import {NewsFeed, NewsDetail} from "../types"

export class Api {
  url: string
  constructor(url: string) {
    this.url = url
  }

  getRequest < AjaxResponse > (cb: (data: AjaxResponse) => void): void {
    const ajax: XMLHttpRequest = new XMLHttpRequest
    ajax.open("GET", this.url);
    ajax.addEventListener('load', () => {
      cb(JSON.parse(ajax.response));
    })
    ajax.send();
  }
}

export class NewsFeedApi extends Api {
  getData(cb: (data: NewsFeed[]) => void): void {
    return this.getRequest < NewsFeed[] > (cb);
  }
}

export class NewsDetailApi extends Api {
  getData(cb: (data: NewsDetail) => void): void {
    return this.getRequest < NewsDetail > (cb);
  }
}
