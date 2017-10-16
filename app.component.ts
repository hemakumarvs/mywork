import { Component ,ViewChild} from '@angular/core';
import { EmployeesService} from './Services/DataSourceService';
import{DataDisplayComponent} from './ChildComponents/DataDisplayComponent';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(DataDisplayComponent)
  private childData: DataDisplayComponent;

  empRecords: any;
  title = 'Component Interaction App';
  name: string = 'Hemakumar';
  constructor(public empService: EmployeesService){
    //this.empService = empService;
  };
  ngOnInit(): void{
    this.empRecords = this.empService.getEmployees();
    //console.log(this.empRecords);
  }
  public childRecord:any={
    selectedename:'initial',
    selecteddept:'initial',
    selectedjob:'initial',
    selectedsal:'initial'
  };
  public getChildRecord(record:any){
  this.childRecord = record;
  }

  public sendMsgToChild(){
this.childData.childTitle = 'Messege to Krithika From Dad';
this.childData.childMsg = 'Hello, Krithika';
  }
}
