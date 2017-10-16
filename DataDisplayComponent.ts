import {Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
    selector:'emp-list',
    templateUrl: './DataDisplayComponent.html'
})
export class DataDisplayComponent{
     childTitle: string = "Mr Child!!";
     childMsg: String= "Hello,Mr Child";
     
    @Input('ename') empname: String;
    @Input('dept') empdept: String;
    @Input('job') empjob: String;
    @Input('sal') empsal: Number;
    @Output() sendChildRecord: EventEmitter<any> = new EventEmitter();

    public emitChildComponentRecord(){
        let selectedRecordObj:any={
            selectedename:this.empname,
            selecteddept:this.empdept,
            selectedjob:this.empjob,
            selectedsal:this.empsal
        }

        this.sendChildRecord.emit(selectedRecordObj);
    }
}