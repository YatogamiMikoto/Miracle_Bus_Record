import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Subject } from 'rxjs/Subject';
import { Home } from './home.model';
import { Subscription } from 'rxjs';

@Injectable()
export class HomeService{
    recordSubmitted= new Subject<Home[]>();
    recordChanged = new Subject<Home[]>();
    private records: Home[] = [];
    private fbSubs:Subscription[]=[];
    finishedRecordChanged = new Subject<Home[]>();
    searchFinishedRecordChanged = new Subject<Home[]>();

    constructor(public db: AngularFirestore) {}

    homeServices(bId: string,Time: Date,Status : string) {
        this.addDataToDatabase({
            date:new Date(),
            busid:bId,
            time:Time,
            state:this.getState(Status)
        });     
     this.recordChanged.next(null);
     alert("Data Successfully Inserted !")
    }

    getState(Status:string){
        if(Status=="IN"){
            return 'IN';
        }
        else
            return 'OUT';
    }

    fetchRecords(){
        // this.db.collection('busrecords').valueChanges().subscribe((record:Home[])=>{
        //     this.recordChanged.next(record);
        // });
        this.fbSubs.push(this.db
            .collection('busrecords')
            .valueChanges()
            .subscribe((records: Home[]) => {
              this.finishedRecordChanged.next(records);
            }));
            this.fbSubs.filter
    }

    findGraphRecord(ebusid){
        this.fbSubs.push(this.db
            .collection('busrecords',ref => ref.where('busid', '==', ebusid))
            .valueChanges()
            .subscribe((records: Home[]) => {
              this.searchFinishedRecordChanged.next(records);
            }));
        //    this.fbSubs.filter
        // if(this.db.collection('busrecords',ref => ref.where('busid', '==', ebusid))){
        //     console.log("found");}
    }

    cancelSubscriptions() {
        this.fbSubs.forEach(sub => sub.unsubscribe());
      }

    private addDataToDatabase(record:Home){
        this.db.collection('busrecords').add(record);
    }

    formatDate(date: Date): string{
        const day = date.getDate();
        const month = date.getMonth()+1;
        const year = date.getFullYear();

        let mname:string;

        switch(month){
            case 1:{mname="January";
                    break;
                    }
            case 2:{mname="Febuary";
                    break;
                    }
            case 3:{mname="March";
                    break;
                    }
            case 4:{mname="April";
                    break;
                    }
            case 5:{mname="May";
                    break;
                    }
            case 6:{mname="June";
                    break;
                    }
            case 7:{mname="July";
                    break;
                    }
            case 8:{mname="August";
                    break;
                    }
            case 9:{mname="September";
                    break;
                    }
            case 10:{mname="October";
                    break;
                    }
            case 11:{mname="November";
                    break;
                    }
            case 12:{mname="December";
                    break;
                    }

        }

        return `${day} ${mname} ${year}`;

    }
    
    formatTime(time: Date): string{
        const hour=time.getHours();
        const min=time.getMinutes();
        const sec=time.getSeconds();

        return `${hour}:${min}:${sec}`
    }
}