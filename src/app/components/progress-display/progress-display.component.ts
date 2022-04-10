import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-progress-display',
  templateUrl: './progress-display.component.html',
  styleUrls: ['./progress-display.component.scss']
})
export class ProgressDisplayComponent implements OnInit {
  @Input() color: ThemePalette = 'warn'
  @Input() progressValue: number = 0
  @Input() label: string = ''
  @Input() accountValue: number = 30000

  mode: ProgressSpinnerMode = 'determinate'
  postProgress: number = 0

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < this.progressValue; i++) {
      setTimeout(() => {this.postProgress++}, 500)
    }
  }

}
