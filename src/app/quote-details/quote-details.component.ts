import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import {Quote} from '../quote'
import { isListLikeIterable } from '@angular/core/src/change_detection/change_detection_util';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote:Quote;

  @Output() isComplete= new EventEmitter<boolean>();
  @Output() toDelete = new EventEmitter<boolean>(); 
