import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {

  queryName: string | null = '';

  constructor(private route: ActivatedRoute, router: Router) { 
  }

  ngOnInit() {
    this.queryName = this.route.snapshot.paramMap.get('queryName');
  }

}
