import { Component, OnInit } from "@angular/core";
import Chart from 'node_modules/chart.js';
import { LivevehiclesService } from 'src/app/services/livevehicles.service'
import { interval } from 'rxjs';
import * as $ from 'jquery'
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { Color } from 'ng2-charts';

const secondsCounter = interval(60000);
@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html"
})


export class DashboardComponent implements OnInit {
  public canvas : any;
  public ctx;
  public datasets: any;
  public data: any;
  public myChartData;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  public clicked2: boolean = false;



  
// Pie
vissiblegraph=false;

public pieChartOptions: ChartOptions = {
  responsive: true,
};
public pieChartLabels: Label[] = [['car'], ['bike'], 'Bus'];
public pieChartData: SingleDataSet =[];
public pieChartType: ChartType = 'pie';
public pieChartLegend = true;
public pieChartPlugins = [];
public totoalvehicle: number;
  
// bar
public barChartOptions: ChartOptions = {
  responsive: true,
};
public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
public barChartType: ChartType = 'bar';
public barChartLegend = true;
public barChartPlugins = [];

public barChartData: ChartDataSets[] = [
  { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
  { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series C' }
];



public barChartColors: Color[] = [
  { 
    backgroundColor: '#f5365cB3 ',
  borderColor: 'white',
  borderWidth: 2},
  { 
    backgroundColor: '#5e72e4B3',
  borderColor: 'white',
  borderWidth: 2 },
  { 
    backgroundColor: '#2bffc6B3',
  borderColor: 'white',
  borderWidth: 2  },
]

  // display details
  vehicleNumberplate:string
  vehicledatetime:string
  vehicletype:string
  vehicleColor:string
  vehicletimedisplay:string
  vehicledate:string
  vehicletime:string
  imageposition:number
  imagelength;
  images=[];
  times=[]
  lengthogslider:number


  // main list ARRAY
  Result;
  datetime=[]
  Vehicle=[]
  Color=[]
  Numberplate=[]
  Object_id=[]
  State_Union_Territory=[]
  City=[]
  Flag=[]
  


  
  constructor(private livelist:LivevehiclesService,
    ) {
      monkeyPatchChartJsTooltip();
      monkeyPatchChartJsLegend();
    }


  changetimeright(){
    this.imageposition++;
    if(this.imageposition<this.times.length)
    {this.vehicletimedisplay=this.times[this.imageposition]
   
      }
    else{
    this.imageposition=0;
    this.vehicletimedisplay=this.times[this.imageposition]
    
    }
  }
  changetimeleft(){
    this.imageposition--;

    if(this.imageposition>0)
    {this.vehicletimedisplay=this.times[this.imageposition]
      
    }
    else{
      
    this.imageposition=this.times.length-1;
  
    this.vehicletimedisplay=this.times[this.imageposition]
    
    }
  }



  // counting vehicle 

  count_vehcile(fromdate,todate){
   
    this.livelist.counting_vehicles(
      "null:00",
      "null:00"
    ).subscribe(
      data => {
        
        this.pieChartData=<SingleDataSet>[data["result"][0]["cars"],data["result"][0]["bikes"],data["result"][0]["buses"]]
        alert(this.pieChartData)
        this.totoalvehicle=data["result"][0]["cars"]+data["result"][0]["bikes"]+data["result"][0]["buses"]
        this.vissiblegraph=true;
      },
      err => {
        console.log(err)
      },
      () => {
      }

    )

  }








  imageslider()
  {
    

// image gallary portion 
var pos = 0;
//number of slides
var totalSlides = this.lengthogslider;
//get the slide width
var sliderWidth = $('#slider-wrap').width();


$(document).ready(function(){
	
	
	/*****************
	 BUILD THE SLIDER
	*****************/
	//set width to be 'x' times the number of slides
	$('#slider-wrap ul#slider').width(sliderWidth*totalSlides);
	
    //next slide 	
	$('#next').click(function(){
		slideRight();
	});
	
	//previous slide
	$('#previous').click(function(){
		slideLeft();
	});
	
	
	
	/*************************
	 //*> OPTIONAL SETTINGS
	************************/
	//automatic slider
	// var autoSlider = setInterval(slideRight, 8000);
	
	//for each slide 
	$.each($('#slider-wrap ul li'), function() { 
	   //set its color
	   var c = $(this).attr("data-color");
	   $(this).css("background",c);
	   
	   //create a pagination
	   var li = document.createElement('li');
	   $('#pagination-wrap ul').append(li);	   
	});
	
	//counter
	countSlides();
	
	//pagination
	pagination();
	
	//hide/show controls/btns when hover
	//pause automatic slide when hover
	$('#slider-wrap').hover(
	  function(){ $(this).addClass('active');  }, 
	  function(){ $(this).removeClass('active');}
	);
	
	

});//DOCUMENT READY
	


/***********
 SLIDE LEFT
************/
function slideLeft(){
	pos--;
	if(pos==-1){ pos = totalSlides-1; }
	$('#slider-wrap ul#slider').css('left', -(sliderWidth*pos)); 	
	
	//*> optional
	countSlides();
	pagination();
}


/************
 SLIDE RIGHT
*************/
function slideRight(){
	pos++;
	if(pos==totalSlides){ pos = 0; }
	$('#slider-wrap ul#slider').css('left', -(sliderWidth*pos)); 
	
	//*> optional 
	countSlides();
	pagination();
}



	
/************************
 //*> OPTIONAL SETTINGS
************************/
function countSlides(){
	$('#counter').html(pos+1 + ' / ' + totalSlides);
}

function pagination(){
	$('#pagination-wrap ul li').removeClass('active');
	$('#pagination-wrap ul li:eq('+pos+')').addClass('active');
}
		
	


// image gallary over
  }
  
  displaydeatils(plate)
  {

    this.livelist.get_livevehicle_(
      plate,
      "null:00",
      "null:00"
    ).subscribe(
      data => {
        
        this.images=[];
        this.times=[]

        this.vehicleNumberplate=data["result"][0]["general"][0]["Numberplate"]
        this.vehicledatetime=data["result"][0]["general"][0]["datetime"]
        this.vehicletype=data["result"][0]["general"][0]["Vehicle"]
        this.vehicleColor=data["result"][0]["general"][0]["Color"]

        var arrayoftimedate=this.vehicledatetime.split(',')
        
        this.vehicledate=arrayoftimedate[0]
        this.vehicletime=arrayoftimedate[1]
        this.imagelength=data["result"][0]["images"]
        // data:image/jpeg;base64,
        this.lengthogslider=this.imagelength.length;
        this.imageposition=this.imagelength.length

        for(let i=0;i<this.imagelength.length;i++){
          

           this.images[i]="data:image/jpg;base64,"+this.imagelength[i]["img"]
           this.times[i]=data["result"][0]["details"][i]["time"]
          
        }
      this.vehicletimedisplay=this.times[0]      

        
        this.imageslider()
       
       
      },
      err => {
        console.log(err)
      },
      () => {
      }

    )

    
  }
  livedetails(){
    this.livelist.get_livevehicle_list().subscribe(
      data => {

        this.Result=data["result"]
        

        for(let i=0;i<this.Result.length;i++){

          this.datetime[i]=data["result"][i]["general"][0]["datetime"]
          this.Vehicle[i]=data["result"][i]["general"][0]["Vehicle"]
          this.Color[i]=data["result"][i]["general"][0]["Color"]
          this.Numberplate[i]=data["result"][i]["general"][0]["Numberplate"]
          this.Object_id[i]=data["result"][i]["general"][0]["Object_id"]
          this.State_Union_Territory[i]=data["result"][i]["general"][0]["State/Union-Territory"]
          this.City[i]=data["result"][i]["general"][0]["City"]
          this.Flag[i]=data["result"][i]["general"][0]["Flag"]
        }
        
        this.displaydeatils( this.Numberplate[0]);
        
      },
      err => {
        console.log(err)
      },
      () => {
      }

    )

    

  }
  
  ngOnInit() {
    this.count_vehcile("null","null")

    secondsCounter.subscribe(n =>
      this.livedetails()
 
      );

      this.livedetails()
 


  }
 
  
}
