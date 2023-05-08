import { Observable } from 'rxjs';

export interface MunicipalityRow{
  idMun?: string;
  maitre?: string;
  president?: string;
  secritaire?: string;
}

export interface UserRow{
  cin?: string;
  firstname?: string;
  lastname?: string;
  gender?: string;
  role?: string;
  valid?: string;
}

export interface DemandRow{
  id?: string;
  file?: string;
  stat?: string;
  type?: string;
  title?: string;
  cin?: string;
  firstname?:string;
  lastname?:string
}
export interface Item {
  id?: string;
  title?: string;
  priority?: string;
  iteration?: string;
  assignee?: string;
  status?: string;
  timeline?: string;
  $checked?: boolean;
  $expandConfig?: any;
  children?: any;
  chosen?: boolean;
  $isChildTableOpen?: boolean;
}


export interface ListPager {
  pageSize?: number;
  pageIndex?: number
}


export interface CardAction {
  icon?: string;
  num?: string;
}

export interface Card {
  name?: string;
  id?: number;
  ame?: string;
  title?: string;
  imgSrc?: string;
  subTitle?: string;
  content?: string;
  agreeNum?: number;
  starsNum?: number;
  messageNum?: number;
  actions?: CardAction[];
}

export abstract class ListData {
  abstract getListData(pager: ListPager): Observable<MunicipalityRow[]>;
  abstract getOriginSource(pager: ListPager): Observable<MunicipalityRow[]>;
  abstract getTreeSource(pager: ListPager): Observable<MunicipalityRow[]>;
  
  abstract getCardSource(pager: ListPager): Observable<Card[]>;
}
