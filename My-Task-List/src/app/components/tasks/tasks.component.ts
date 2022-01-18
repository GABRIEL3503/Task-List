import { Component, OnInit } from '@angular/core';
import {tasks} from  '../Task'
import {TASKS} from '../mock-tasks'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
Tasks: Task[] = TASKS;
  constructor() { }

  ngOnInit(): void {
  }

}
