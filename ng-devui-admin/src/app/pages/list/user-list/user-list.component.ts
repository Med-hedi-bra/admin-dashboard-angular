
import { ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DialogService, FormLayout, TableWidthConfig } from 'ng-devui';
import { Subscription } from 'rxjs';
import { Item, UserRow } from 'src/app/@core/data/listData';
import { ListDataService } from 'src/app/@core/mock/list-data.service';
import { FormConfig } from 'src/app/@shared/components/admin-form';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit{
  
 
    filterAreaShow = false;
  
    options = ['normal', 'borderless', 'bordered'];
  
    sizeOptions = ['sm', 'md', 'lg'];
  
    layoutOptions = ['auto', 'fixed'];
  
    searchForm: {
      borderType: '' | 'borderless' | 'bordered';
      size: 'sm' | 'md' | 'lg';
      layout: 'auto' | 'fixed';
    } = {
      borderType: '',
      size: 'md',
      layout: 'auto',
    };
  
    tableWidthConfig: TableWidthConfig[] = [
      {
        field: 'id',
        width: '150px',
      },
      {
        field: 'title',
        width: '150px',
      },
      {
        field: 'priority',
        width: '100px',
      },
      {
        field: 'iteration',
        width: '100px',
      },
      {
        field: 'assignee',
        width: '100px',
      },
      {
        field: 'status',
        width: '100px',
      },
      {
        field: 'timeline',
        width: '100px',
      },
      {
        field: 'Actions',
        width: '100px',
      },
    ];
  
    basicDataSource: UserRow[] = [];
  
    formConfig: FormConfig = {
      layout: FormLayout.Horizontal,
      items: [
        {
          label: 'CIN',
          prop: 'cin',
          type: 'input',
          rule: {
            validators: [{ required: true }],
          },
        },
        {
          label: 'Id_Mun',
          prop: 'code_mun',
          type: 'input',
          rule: {
            validators: [{ required: true }],
          },
         
        },
        {
          label: 'First Name',
          prop: 'firstname',
          type: 'input',
          required: true,
          
        },
        {
          label: 'Last Name',
          prop: 'lastname',
          type: 'input',
         
        },
        {
          label: 'Gender',
          prop: 'gender',
          type: 'select',
          options:["Homme" , "Femme",'']
        },
        {
          label: 'Status',
          prop: 'valid',
          type: 'select',
          options: ['Valid', 'Unvalid', ''],
          required: true,
         
        },
        {
          label: 'Date Of Birth',
          prop: 'date_of_birth',
          type: 'datePicker',
          required: true,
          
        },
        
        {
          label: 'Role',
          prop: 'role',
          type: 'select',
          options:["ADMIN" ,"SUBADMIN" , "USER",""]
        },
      ],
      labelSize: '',
    };
  
    formData = {};
  
    editForm: any = null;
  
    editRowIndex = -1;
  
    pager = {
      total: 0,
      pageIndex: 1,
      pageSize: 10,
    };
  
    busy: Subscription;
  
    @ViewChild('EditorTemplate', { static: true })
    EditorTemplate: TemplateRef<any>;
  
    constructor(private listDataService: ListDataService, private dialogService: DialogService, private cdr: ChangeDetectorRef) {}
  
    ngOnInit() {
      this.getList();
    }
  
    search() {
      this.getList();
    }
  
    getList() {
      this.busy = this.listDataService.getUserData(this.pager).subscribe((res) => {
        const data = JSON.parse(JSON.stringify(res.pageList));
        this.basicDataSource = data;
        this.pager.total = res.total;
      });
    }
  
    editRow(row: any, index: number) {
      this.editRowIndex = index;
      this.formData = row;
      this.editForm = this.dialogService.open({
        id: 'edit-dialog',
        width: '600px',
        maxHeight: '600px',
        title: 'Editor',
        showAnimate: false,
        contentTemplate: this.EditorTemplate,
        backdropCloseable: true,
        onClose: () => {},
        buttons: [],
      });
    }
  
    deleteRow(index: number) {
      const results = this.dialogService.open({
        id: 'delete-dialog',
        width: '346px',
        maxHeight: '600px',
        title: 'Delete',
        showAnimate: false,
        content: 'Are you sure you want to delete it?',
        backdropCloseable: true,
        onClose: () => {},
        buttons: [
          {
            cssClass: 'primary',
            text: 'Ok',
            disabled: false,
            handler: ($event: Event) => {
              this.basicDataSource.splice(index, 1);
              results.modalInstance.hide();
            },
          },
          {
            id: 'btn-cancel',
            cssClass: 'common',
            text: 'Cancel',
            handler: ($event: Event) => {
              results.modalInstance.hide();
            },
          },
        ],
      });
    }
  
    onPageChange(e: number) {
      this.pager.pageIndex = e;
      this.getList();
    }
  
    onSizeChange(e: number) {
      this.pager.pageSize = e;
      this.getList();
    }
  
    reset() {
      this.searchForm = {
        borderType: '',
        size: 'md',
        layout: 'auto',
      };
      this.pager.pageIndex = 1;
      this.getList();
    }
  
    onSubmitted(e: any) {
      this.editForm!.modalInstance.hide();
      this.basicDataSource.splice(this.editRowIndex, 1, e);
      // this.listDataService.updateMun
    }
  
    onCanceled() {
      this.editForm!.modalInstance.hide();
      this.editRowIndex = -1;
    }
  


}
