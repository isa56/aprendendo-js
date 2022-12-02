import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-output-counter',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'],
})
export class OutputPropertyComponent implements OnInit {
  @Input() value: number = 0;

  @Output() changedValue = new EventEmitter();

  @ViewChild('inputField', { static: true }) inputFieldValue!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  decrementValue() {
    this.inputFieldValue.nativeElement.value--;
    // this.value--; // mesma coisa que a linha acima
    this.changedValue.emit({ newValue: this.value });
  }

  incrementValue() {
    this.value++;
    this.changedValue.emit({ newValue: this.value });
  }
}
