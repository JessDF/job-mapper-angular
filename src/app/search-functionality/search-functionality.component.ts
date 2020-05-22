import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';

@Component({
  selector: 'app-search-functionality',
  templateUrl: './search-functionality.component.html',
  styleUrls: ['./search-functionality.component.css']
})

export class SearchFunctionalityComponent implements OnInit {

  JobLocation = "UnKnown";
  JobTitle = "UnDefined";
  
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.JobLocation = params['location'];
      this.JobTitle = params['title'];
    });
  }

  ngOnInit() {
  }

}