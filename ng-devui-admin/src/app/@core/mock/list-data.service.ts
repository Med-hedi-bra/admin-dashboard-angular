import { Injectable, OnInit } from '@angular/core';
import { Observable, of as observableOf, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Item, ListData, Card, ListPager, MunicipalityRow, UserRow, DemandRow } from '../data/listData';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { element } from 'protractor';


@Injectable()
export class ListDataService extends ListData {
  private basicData: Item[] = [
    {
      id: '230000213706283786',
      title: 'Yriqtjdjd Omdfdvqxe Xxlfgjtnj Hsyf Qecu',
      priority: 'Medium',
      iteration: 'iteration',
      assignee: 'Shirley Martin',
      status: 'Stuck',
      timeline: '1985-01-10',
      children: [
        {
          id: '230000132101025982',
          title: 'Volbp Wdosdfbo Ukme Szbgjmeo Kodfsbn Aawyirm Rmbobdyn',
          priority: 'Low',
          iteration: 'iteration',
          assignee: 'Daniel Martinez',
          status: 'Done',
          timeline: '2008-08-02',
        },
        {
          id: '230000337101025982',
          title: 'Volbp Wdobo Ukme Szbgjmasfsaeo Kobn Aawyirm Rmbobdyn',
          priority: 'Low',
          iteration: 'iteration',
          assignee: 'Daniel Martinez',
          status: 'Done',
          timeline: '2008-08-02',
          children: [
            {
              id: '22000098860224174X',
              title: 'Ozhtysdfax Wfppasdf Essvpkjrx Havonov Cdcmgmggnj Vqwcwd Ooolirn',
              priority: 'High',
              iteration: 'iteration',
              assignee: 'Margaret Clark',
              status: '',
              timeline: '2015-05-08',
            },
            {
              id: '140000197123426183',
              title: 'Govfunhwa Gkvcrasdfv Uvbq Gqyrasdfwntx Ofnnuwrnh',
              priority: 'Low',
              iteration: 'iteration',
              assignee: 'Jason Rodriguez',
              status: 'Done',
              timeline: '1994-02-08',
            },
            {
              id: '440000123807134089',
              title: 'Rbhasdf Wklmth Xkeg Iasduzan Isufy',
              priority: 'Medium',
              iteration: 'iteration',
              assignee: 'Kenneth Robinson',
              status: 'Done',
              timeline: '2017-02-04',
            },
          ],
        },
        {
          id: '521230200110166246',
          title: 'Rrqdasfcneg Iknmasdf Tbo',
          priority: 'Medium',
          iteration: 'iteration',
          assignee: 'Paul Hernandez',
          status: 'Stuck',
          timeline: '2017-02-01',
        },
      ],
    },
  ];
  private cardSource: Card[] = [
    {
      name: 'Angular9',
      title: 'Angular9',
      content: 'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念...',
      actions: [
        {
          icon: 'icon-star-o',
          num: '200',
        },
        {
          icon: 'icon-fork',
          num: '300',
        },
      ],
    },
    {
      name: 'NG-evUI',
      title: 'NG-DevUI',
      content:
        'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计...',
      actions: [
        {
          icon: 'icon-star-o',
          num: '2000',
        },
        {
          icon: 'icon-fork',
          num: '2000',
        },
      ],
    },
    {
      name: 'BootStrap',
      title: 'BootStrap',
      content: 'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相...',
      actions: [
        {
          icon: 'icon-star-o',
          num: '3000',
        },
        {
          icon: 'icon-fork',
          num: '3000',
        },
      ],
    },
    {
      name: 'React',
      title: 'React',
      imgSrc: 'https://codingthesmartway.com/wp-content/uploads/2019/12/logo_react.png',
      content: 'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"...',
      actions: [
        {
          icon: 'icon-star-o',
          num: '4000',
        },
        {
          icon: 'icon-fork',
          num: '4000',
        },
      ],
    },
    {
      name: 'Vue',
      title: 'Vue',
      imgSrc: 'https://vuejs.org/images/logo.png',
      content:
        'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计blablabla....',
      actions: [
        {
          icon: 'icon-star-o',
          num: '5000',
        },
        {
          icon: 'icon-fork',
          num: '5000',
        },
      ],
    },
    {
      name: 'Webpack',
      title: 'Webpack',
      imgSrc: 'https://webpack.js.org/icon-square-small.85ba630cf0c5f29ae3e3.svg',
      content:
        'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计lalalalala....',
      actions: [
        {
          icon: 'icon-star-o',
          num: '6000',
        },
        {
          icon: 'icon-fork',
          num: '6000',
        },
      ],
    },
    {
      name: 'DevUI13',
      title: 'DevUI13',
      content:
        'DevUI是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计...',
      actions: [
        {
          icon: 'icon-star-o',
          num: '7000',
        },
        {
          icon: 'icon-fork',
          num: '7000',
        },
      ],
    },
    {
      name: 'BootStrap22',
      title: 'BootStrap22',
      content:
        'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计....',
      actions: [
        {
          icon: 'icon-star-o',
          num: '8000',
        },
        {
          icon: 'icon-fork',
          num: '8000',
        },
      ],
    },
    {
      name: 'React11',
      title: 'React11',
      imgSrc: 'https://codingthesmartway.com/wp-content/uploads/2019/12/logo_react.png',
      content:
        'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计....',
      actions: [
        {
          icon: 'icon-star-o',
          num: '9000',
        },
        {
          icon: 'icon-fork',
          num: '9000',
        },
      ],
    },
    {
      name: 'Vue11',
      title: 'Vue22',
      imgSrc: 'https://vuejs.org/images/logo.png',
      content:
        'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计....',
      actions: [
        {
          icon: 'icon-star-o',
          num: '1234',
        },
        {
          icon: 'icon-fork',
          num: '1234',
        },
      ],
    },
    {
      name: 'Webpack33',
      title: 'Webpack33',
      imgSrc: 'https://webpack.js.org/icon-square-small.85ba630cf0c5f29ae3e3.svg',
      content:
        'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计....',
      actions: [
        {
          icon: 'icon-star-o',
          num: '2345',
        },
        {
          icon: 'icon-fork',
          num: '2345',
        },
      ],
    },
    {
      name: 'DevUI12',
      title: 'DevUI12',
      content:
        'DevUI是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计...',
      actions: [
        {
          icon: 'icon-star-o',
          num: '3456',
        },
        {
          icon: 'icon-fork',
          num: '3456',
        },
      ],
    },
    {
      name: 'BootStrap44',
      title: 'BootStrap44',
      content:
        'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计....',
      actions: [
        {
          icon: 'icon-star-o',
          num: '4567',
        },
        {
          icon: 'icon-fork',
          num: '4567',
        },
      ],
    },
    {
      name: 'React55',
      title: 'React55',
      imgSrc: 'https://codingthesmartway.com/wp-content/uploads/2019/12/logo_react.png',
      content:
        'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计....',
      actions: [
        {
          icon: 'icon-star-o',
          num: '5678',
        },
        {
          icon: 'icon-fork',
          num: '5678',
        },
      ],
    },
    {
      name: 'Vue123',
      title: 'Vue123',
      imgSrc: 'https://vuejs.org/images/logo.png',
      content:
        'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计....',
      actions: [
        {
          icon: 'icon-star-o',
          num: '7890',
        },
        {
          icon: 'icon-fork',
          num: '7890',
        },
      ],
    },
    {
      name: 'DevUI Admin',
      title: 'DevUI Admin',
      imgSrc: 'https://webpack.js.org/icon-square-small.85ba630cf0c5f29ae3e3.svg',
      content:
        'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计....',
      actions: [
        {
          icon: 'icon-star-o',
          num: '10000',
        },
        {
          icon: 'icon-fork',
          num: '10000',
        },
      ],
    },
  ];

  private munData: MunicipalityRow[] = [

    {
      idMun: "string",
      maitre: "string",
      president: "string",
      secritaire: "string"
    },
    {
      idMun: "string",
      maitre: "string",
      president: "string",
      secritaire: "string"
    },
    {
      idMun: "string",
      maitre: "string",
      president: "string",
      secritaire: "string"
    },
    {
      idMun: "string",
      maitre: "string",
      president: "string",
      secritaire: "string"
    },
    {
      idMun: "string",
      maitre: "string",
      president: "string",
      secritaire: "string"
    },


  ];

  private userData:UserRow[]=[
    {
      cin: "string",
  firstname: "string",
  lastname: "str",
  gender: "string",
  role: "string",
  valid: "false",
  date_of_birth:new Date("02/03/2000"),
  code_mun:100
    },
    {
      cin: "string",
  firstname: "string",
  lastname: "str",
  gender: "string",
  role: "string",
  valid: "true",
  date_of_birth:new Date("02/03/2000"),
  code_mun:100
    }
  ];
   private demandData : DemandRow[] = [
   {
    idDemande: 20,
    file: "string",
    state: "PENDING",
    type: "string",
    title: "string",
   },
   {
    idDemande: 204,
    file: "string",
    state: "PENDING",
    type: "COPIECONFORME",
    title: "string",
   }
   ]


  constructor(private http: HttpClient) {
    super();

  }
 
  private pagerList(data: Item[] | Card[] | MunicipalityRow[] | UserRow[], pager: ListPager) {
    return data.slice(pager.pageSize! * (pager.pageIndex! - 1), pager.pageSize! * pager.pageIndex!);
  }


  fetchApi1(){
    let url = environment.API_URL + "/municipality/";
    return this.http.get<MunicipalityRow[]>(url).subscribe({
      next: res => {
        res.forEach(element => {
          this.munData.push({
            idMun: element.idMun,
            maitre: element.maitre,
            president: element.president,
            secritaire: element.secritaire,
          })
        }
        );
        console.log("Mun data fetched");
      },
      error: err => {
        throwError(() => new Error(err))
      }
    }
    
    )
  }
 

  updateMun(editedRow:MunicipalityRow){
    let url = environment.API_URL+"/municipality/update/"+editedRow.idMun
    this.http.put(url,editedRow).subscribe({
      next:data=>{
        console.log(data)
      },
      error:err=>{
        throwError(()=>new Error(err))
      }
    })
    

  }

  getMunData(pager: ListPager): Observable<any> {
    return observableOf({
      pageList: this.pagerList(this.munData, pager),
      total: this.munData.length,
    }).pipe(delay(500));
  }

  getUserData(pager: ListPager): Observable<any> {
    return observableOf({
      pageList: this.pagerList(this.userData, pager),
      total: this.userData.length,
    }).pipe(delay(500));
  }
  getDemandData(pager: ListPager): Observable<any> {
    return observableOf({
      pageList: this.pagerList(this.demandData, pager),
      total: this.demandData.length,
    }).pipe(delay(500));
  }



  getListData(pager: ListPager): Observable<any> {
    return observableOf({
      pageList: this.pagerList(this.basicData, pager),
      total: this.basicData.length,
    }).pipe(delay(800));
  }
  getOriginSource(pager: ListPager): Observable<any> {
    return observableOf({
      pageList: this.pagerList(this.munData, pager),
      total: this.munData.length,
    }).pipe(delay(1000));
  }

  getTreeSource(pager: ListPager): Observable<any> {
    return observableOf({
      pageList: this.pagerList(this.basicData, pager),
      total: this.basicData.length,
    }).pipe(delay(1000));
  }

  getCardSource(pager: ListPager): Observable<any> {
    return observableOf({
      pageList: this.pagerList(this.cardSource, pager),
      total: this.cardSource.length,
    }).pipe(delay(1000));
  }
}
