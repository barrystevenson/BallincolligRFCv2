import { Component, OnInit } from '@angular/core';
import { PlayersService } from './../services/players/players.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-players',
  templateUrl: 'players.page.html',
  styleUrls: ['players.page.scss']
})

export class PlayersPage implements OnInit {
    
    public players: Array<any>;
    
    constructor(private playersService: PlayersService) {}
        
    ngOnInit(){
        this.playersService.getPlayersList().get().then(playersSnapshot => {
            this.players = [];
            playersSnapshot.forEach(snap => {
                this.players.push({
                    id: snap.id,
                    firstName: snap.data().firstName,
                    surname: snap.data().surname,
                    photoLocation: snap.data().photoLocation,
                });
                return false;
                });
        });
    }
}
