import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-match-details-info',
  templateUrl: './match-details-info.page.html',
  styleUrls: ['./match-details-info.page.scss'],
})
export class MatchDetailsInfoPage implements OnInit {

  constructor(private route: ActivatedRoute ) { }

  ngOnInit() {
       console.log("YYYYY");  
    const matchId: string = this.route.snapshot.paramMap.get('id');
  }

}
