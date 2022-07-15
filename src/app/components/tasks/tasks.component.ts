import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/db-interface';
import { TASKS } from 'src/app/mock-db';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = TASKS;

  constructor() { }

  ngOnInit(): void {
  }

}