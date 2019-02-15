import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { Chart } from 'chart.js';
import { HomeService } from '../home.service';
import {Home} from '../home.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-busgraph',
  templateUrl: './busgraph.component.html',
  styleUrls: ['./busgraph.component.css']
})
export class BusgraphComponent implements OnInit,OnDestroy {
  searchedDataSource= new  MatTableDataSource<Home>();
  private exChangedSubscription: Subscription;
  myChart:any;
  
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    var ctx = document.getElementById("myChart");
    this.myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
  }
  
  onSubmit(form: NgForm){
    this.exChangedSubscription =this.homeService.searchFinishedRecordChanged.subscribe((records:Home[])=>{
      this.searchedDataSource.data=records;
    });
    this.homeService.findGraphRecord(form.value.busidgraph);
     
  }
  
  ngOnDestroy() {
    this.exChangedSubscription.unsubscribe();
  }
}
    // for (var _i = 0; _i < this.searchedDataSource.filteredData.length; _i++)
    //  {  
    //    //To retreive Date and put it in X-axis
    //    let date1=new Date(this.searchedDataSource.filteredData[_i].date.toDate());
    //    let date=this.homeService.formatDate(date1)
    //    this.lineChartLabels.push(date);
       
    //    //To retrive time and put it in y-axis
    //    this.time[_i]=this.homeService.formatTime(this.searchedDataSource.filteredData[_i].time.toDate()); 
    //  }
    //  this.time=[]
    //  this.lineChartData=[{data:this.time,label:form.value.busidgraph}]
