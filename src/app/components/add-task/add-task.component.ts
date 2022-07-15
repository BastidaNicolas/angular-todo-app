import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/db-interface';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  title: string = "";
  time: string = "";
  reminder: boolean = false;
  showAddTask:boolean = false;
  subscription?:Subscription;

  constructor(private uiService:UiService) { 
    this.subscription =  this.uiService.onToggle()
    .subscribe(value => {
      this.showAddTask = value
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {
    const { title, time, reminder } = this;
    if(!title || !time){
      alert("Fill the inputs!!!")
      return
    }
    const newTask = { title, time, reminder }
    this.onAddTask.emit(newTask)
  }

}
