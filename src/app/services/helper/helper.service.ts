import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class HelperService {
    
  constructor() { }
    
   /*
   * Add commas to every value in the array except for the last value
   */
    addCommasToArray(array: Array<any>) : Array<any> {
      
        for (let i = 0; i < array.length - 1; i++){
            array[i].name = array[i].name + ", ";
            }
        return array;
        
    }
    
   /*
   * Remove duplicate names from the scorers list. e.g. If John Smith scores 3 tries
   * I don't want to see John Smith, John Smith, John Smith - I want to see John Smith (3)
   */
    getSortedScorers(scorers: Array<any>) : Array<any> {
       
        for (let i = 0; i < scorers.length ; i++){
            var numberScored = 1;
            
             var scorerName = scorers[i].name;
            
            for (let j = i +1 ; scorers.length - j;) {
                
                if(scorers[i].name.includes(scorers[j].name)) {
                 
                    numberScored++;
                    scorers[i].name = scorerName + " (" + numberScored + ")";
                    scorers.splice(j,1);
                    }
                else{
                    //Only incerement the j if we haven't spliced the array
                    j++;
                    }
                }
            }
        return scorers;
        
    }
    
}