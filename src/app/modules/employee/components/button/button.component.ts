import { Component, EventEmitter, OnInit,Output,Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
@Input() styleClass!:string;
@Input() text!:string;
@Input() disabled!:boolean;

@Output() btnClick= new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
onClick(){
  this.btnClick.emit()
}

}
