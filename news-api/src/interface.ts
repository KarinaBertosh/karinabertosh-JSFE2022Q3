export interface Controller {}
export interface View {}

interface Controller {
  baseLink: string;
  options: {apiKey: string};
  prototype: object;
}

interface View {
  news: News {};
  sources: Sources {};
}
