import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  historyData = [];
  constructor(private historyService: HistoryService) { }

  ngOnInit() {
    this.historyService.historyData().subscribe(data => {
      this.historyData = data;
    });
  }
}
