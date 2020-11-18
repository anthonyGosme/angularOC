import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../service/appareilService';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: string = '';
  @Input() appareilStatus: string = '';
  @Input() appareilId: number = 0;
  getColor(): string {
    if (this.appareilStatus === 'éteint') return 'red';
    return 'green';
  }
  getStatus(): string {
    return this.appareilStatus;
  }
  constructor(private appareilService: AppareilService) {}

  ngOnInit(): void {}

  onSwitchOn() {
    this.appareilService.switchOn(this.appareilId);
  }
  onSwitchOff() {
    this.appareilService.switchOff(this.appareilId);
  }
}
