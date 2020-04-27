import { Component, OnInit, ViewChild } from '@angular/core';
import { MatchService } from './../services/match/match.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-fixtures',
  templateUrl: 'fixtures.page.html',
  styleUrls: ['fixtures.page.scss']
})

export class FixturesPage implements OnInit {
    
@ViewChild('content', {static: false}) private content: any;
    public matches: Array<any>;
    constructor(private matchService: MatchService) {}
        
    ngOnInit(){
        this.matchService.getMatches().get().then(matchSnapshot => {
            this.matches= [];
            matchSnapshot.forEach(snap => {
                this.matches.push ({  
                id: snap.id,
                    date: snap.data().date,
                    team: snap.data().team,
                    home: snap.data().home,
                    away: snap.data().away,
                    homeScore: snap.data().homeScore,
                    awayScore: snap.data().awayScore,
                    competition: snap.data().competition,
                });
                return false;
                });                
      
            var elementID = this.getElementIdOfFixtureClosestToToday(this.matches);
            setTimeout(()=>{this.scrollToYOffsetOfElement(elementID);},400);
           
        });   
    }
  
 /*
 * Loop through all fixtures & return the index of the fixture that is closest to today - this will correspond to the element id in the html
 */
 private getElementIdOfFixtureClosestToToday(fixtures: Array<any>): string
    {   
        var today = Math.floor(Date.now()/1000);
        var fixtureClosestToToday = Math.abs(today - fixtures[0].date.seconds);
        var elementIDofClosestFixtureToToday = 0;
        
        fixtures[0].closestToToday = "Y";
        for (var i = 1; i < fixtures.length; i++)
            {
                 var currentFixtureTimeToToday = Math.abs(today - fixtures[i].date.seconds);
                
                 /* 
                  * If the difference in time between today and the current fixture we are looping on is less than the 
                  * difference in time of the current shortest gap then we have a new fixture closest to Today
                 */
                 if (currentFixtureTimeToToday < fixtureClosestToToday)
                    {
                        fixtureClosestToToday = currentFixtureTimeToToday;
                         elementIDofClosestFixtureToToday = i;                       
                    }
               
            }
             return elementIDofClosestFixtureToToday.toString();
    }

    private scrollToYOffsetOfElement(element: string){
       
        let yOffset = document.getElementById(element).offsetTop;       
        this.content.scrollToPoint(0,yOffset);
        }

    
}