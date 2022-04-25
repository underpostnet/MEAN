import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-disc',
  templateUrl: './disc.component.html',
  styleUrls: ['./disc.component.css']
})
export class DiscComponent implements OnInit {

  @Input() disc : any = {} 

  constructor() {}

  ngOnInit(): void {
  }

}
