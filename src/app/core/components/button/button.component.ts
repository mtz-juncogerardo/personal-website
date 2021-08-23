import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  get buttonStyle() : string{
    return `color_${this.color} type_${this.type} size_${this.size}`
  };

  @Input() color : 'primary' | 'secondary' | 'tertiary' | 'dark';
  @Input() type : 'outline' | 'solid';
  @Input() size: 'lg' | 'sm' | 'block';
  @Input() btnText: string;

  constructor() {
    this.color = 'primary';
    this.type = 'solid';
    this.size = 'lg';
    this.btnText = 'click me!'
  }

  ngOnInit(): void {
  }

}
