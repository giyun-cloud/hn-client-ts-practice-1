import { NewsFeed, NewsStore } from "./types";

export default class Store implements NewsStore {
  _currentPage: number;
  feeds: NewsFeed[];

  constructor() {
    this._currentPage = 1
    this.feeds = []
  }

  get currentPage() {
    return this._currentPage
  }

  set currentPage(page: number) {
    if (page <= 0 || page > Math.ceil(this.feeds.length/10)) return;
    this._currentPage = page
  }

  get nextPage(): number {
    if(this._currentPage >= this.feeds.length/10) return Math.ceil(this.feeds.length/10);
    return this._currentPage +1;
  }

  get prevPage(): number {
    return this._currentPage > 1 ? this._currentPage -1 : 1;
  }

  get numberOfFeed(): number {
    return this.feeds.length;
  }

  get hasFeeds(): boolean {
    return this.feeds.length > 0;
  }

  getAllFeeds(): NewsFeed[] {
    return this.feeds;
  }

  getFeed(position: number): NewsFeed {
    return this.feeds[position];
  }

  setFeeds(feeds: NewsFeed[]): void {
    this.feeds = feeds.map(feed => ({
      ...feed,
      read: false
    }))
  }

  makeRead(id: number): void {
    const feed = this.feeds.filter((feed: NewsFeed) => feed.id === id)[0];

    if(feed) {
      feed.read = true;
    }
  }
}