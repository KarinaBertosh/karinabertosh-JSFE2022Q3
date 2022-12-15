
export interface IController {
  baseLink: string,
  options: IOptions;
  getNews: (e: MouseEvent, callback: any) => void;
  getSources: (data: any) => void;
}


export interface IView {
  news: object;
  sources: object;
  drawSources: (data: any) => void;
  drawNews: (data: any) => void;
}

export interface IOptions {
  apiKey?: string;
}

export interface IDataAppView {
  status: string;
  totalResults: number;
  articles: object[];
}

export interface IDataAppViewInDrawSources {
  status: string;
  sources: object[];
}

export interface IItemData {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  country: string;
}

export interface IResponse {
  endpoint: string,
  options?: IOptions,
}

// export interface INews {
//   draw: () => void;
// }

// export interface ISources {
//   draw: () => void;
// }
export interface ISource {
  status: string,
  sources: INewsSource[]
}

export interface INewsSource {
  category: string,
  country: string,
  description: string,
  id: string,
  language: string,
  name: string,
  url: string,
}