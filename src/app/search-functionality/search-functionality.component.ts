import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-functionality',
  templateUrl: './search-functionality.component.html',
  styleUrls: ['./search-functionality.component.css']
})

export class SearchFunctionalityComponent {

  JobLocation = "UnKnown";
  JobTitle = "UnDefined";
  
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.JobLocation = params['location'];
      this.JobTitle = params['title'];
    });
  }
}