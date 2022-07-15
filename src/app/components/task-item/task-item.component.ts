import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/db-interface';
import { TASKS } from 'src/app/mock-db';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input() task:Task = TASKS[0];

  constructor() { }

  ngOnInit(): void {
  }

}
