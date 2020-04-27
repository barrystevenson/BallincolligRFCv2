import { Component, OnInit } from '@angular/core';
import { MatchService } from './../../services/match/match.service';
import { HelperService } from './../../services/helper/helper.service';
import { PlayersService } from './../../services/players/players.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.page.html',
  styleUrls: ['./match-details.page.scss'],
})
export class MatchDetailsPage implements OnInit {

  public currentMatchDetails: any = {};
  public lineup: Array<any>;
  public tryScorers: Array<any>;
  public penaltyScorers: Array<any>;
  public conversionScorers: Array<any>;
  public dropGoalScorers: Array<any>;
  public allPlayers: Array<any>;
  public matchReportParagraphs: Array<any>;
    
    constructor(private matchService: MatchService, 
                private playersService: PlayersService, 
                private helperService: HelperService, 
                private route: ActivatedRoute, 
                private router: Router) { }

  ngOnInit() {
    
    console.log("XXXXXXX");  
    const matchId: string = this.route.snapshot.paramMap.get('id');
    
    this.returnMatchDetails(matchId);
    this.returnMatchLineup(matchId);
    this.returnTryScorers(matchId);
    this.returnPenaltyScorers(matchId);
    this.returnConversionScorers(matchId);
    this.returnDropGoalScorers(matchId);
    this.returnAllPlayers();
    this.returnAllParagraphs(matchId);
     }
    
    /*
     * Return Match Details
     */
    
    private async returnMatchDetails(matchId: string){     
        const matchDetailsSnapshot = await this.matchService.getMatch(matchId).get();
        this.currentMatchDetails = matchDetailsSnapshot.data();
        this.currentMatchDetails.id = matchDetailsSnapshot.id; 
    }
    
    /*
     * Return the Match Lineup 
     */ 
    private async returnMatchLineup(matchId: string){
        const matchLineupSnapshot = await this.matchService.getMatchLineup(matchId).get();
        this.lineup = [];
         matchLineupSnapshot.forEach(snap => {
                this.lineup.push({
                    id: snap.id,
                    number: snap.data().number,
                    firstName: snap.data().firstName,
                    surname: snap.data().surname,
                });
                return false;
            });
        }
        
     /*
     * Return the Try scorers 
     */
    
    private async returnTryScorers(matchId: string){   
        const tryScorersSnapshot = await this.matchService.getTryScorers(matchId).get();
        this.tryScorers = [];
            tryScorersSnapshot.forEach(snap => {
                this.tryScorers.push({
                    id: snap.id,
                    name: snap.data().name,
                });
                return false;
            });
            
        /*
        * Sort the scorers into a more readable format
        */
        this.helperService.getSortedScorers(this.tryScorers);
        this.helperService.addCommasToArray(this.tryScorers);
        }
      
     /*
     * Return the Penalty scorers 
     */

    private async returnPenaltyScorers(matchId: string){ 
        const penaltyScorersSnapshot = await this.matchService.getPenaltyScorers(matchId).get();
        this.penaltyScorers = [];
            penaltyScorersSnapshot.forEach(snap => {
                this.penaltyScorers.push({
                    id: snap.id,
                    name: snap.data().name,
                });
                return false;
            });
            
        /*
        * Sort the scorers into a more readable format
        */
        this.helperService.getSortedScorers(this.penaltyScorers);
        this.helperService.addCommasToArray(this.penaltyScorers);
        } 
      
     /*
     * Return the Conversion scorers 
     */
     private async returnConversionScorers(matchId: string){
        const conversionScorersSnapshot = await this.matchService.getConversionScorers(matchId).get();
        this.conversionScorers = [];
            conversionScorersSnapshot.forEach(snap => {
                this.conversionScorers.push({
                    id: snap.id,
                    name: snap.data().name,
                    
                });
                return false;
            });
            
        /*
        * Sort the scorers into a more readable format
        */
        this.helperService.getSortedScorers(this.conversionScorers);
        this.helperService.addCommasToArray(this.conversionScorers); 
        }
      
     /*
     * Return the dropGoal scorers 
     */
     private async returnDropGoalScorers(matchId: string){
        const dropGoalScorersSnapshot = await this.matchService.getDropGoalScorers(matchId).get();
        this.dropGoalScorers = [];
            dropGoalScorersSnapshot.forEach(snap => {
                this.dropGoalScorers.push({
                    id: snap.id,
                    name: snap.data().name,
                });
                return false;
            });
            
        /*
        * Sort the scorers into a more readable format
        */
        this.helperService.getSortedScorers(this.dropGoalScorers);
        this.helperService.addCommasToArray(this.dropGoalScorers); 
        } 
      
     
      /*
      * Get All Players
      */
      private async returnAllPlayers(){
        const playersSnapshot = await this.playersService.getPlayersList().get();      
        this.allPlayers = [];
            playersSnapshot.forEach(snap => {
                this.allPlayers.push({
                    id: snap.id,
                    firstName: snap.data().firstName,
                    surname: snap.data().surname,
                 });
                return false;
                });
       
        }

 /*
 * Navigate to the details page of the specific player in the lineup clicked
 */
    
 navigateToPlayerDetails(firstName: String, surname: String, players: Array<any>)
    {   
        var playerId = this.getPlayerId(firstName, surname, players);
        if (playerId)
            {
            this.router.navigateByUrl('player-details/'+ playerId);
            }
    }
    
 /*
 * Get the Id of the player clicked on from their Name
 */
    
 getPlayerId(firstName: String, surname: String, players: Array<any>) : String {
        
        for (var i = 0; i < players.length; i++ ){
            if(players[i].surname == surname) {
                if(players[i].firstName == firstName)
                    {
                        return players[i].id                 
                    }
            }
        }    
    }
    
  private async returnAllParagraphs(matchId: string){
        const matchReportParagraphSnapshot = await this.matchService.getAllParagaraphs(matchId).get();
        this.matchReportParagraphs = [];
         matchReportParagraphSnapshot.forEach(snap => {
                this.matchReportParagraphs.push({
                    id: snap.id,
                    paragraph: snap.data().paragraph,
                });
                return false;
            });
    }

}


