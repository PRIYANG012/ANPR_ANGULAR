import { Component, OnInit } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LivevehiclesService } from 'src/app/services/livevehicles.service'
import * as $ from 'jquery'
import { FormGroup, FormControl, Validators, FormBuilder,AbstractControl} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: "app-filter",
  templateUrl: "filter.component.html"
})
export class FilterComponent implements OnInit {
  FORMFILTER: FormGroup;
  submitted=false;
  visible=false;
  fromdate;
  todate;
  // display details
  k=0;

  vehicleNumberplate=[];
  vehicledatetime=[];
  vehiclelocation=[];
  vehiclecity=[];
  vehicletype=[]
  vehiclecolor=[]
  vehicledate=[]
  vehicletime=[]
  imagelength;
  images=[];
  times=[];
  imageposition=0;
  lengthogslider:number=1;


  // displaying details 

  vehicleimagesdisplay;
  vehicleNumberplatedisplay;
  vehiclelocationdisplay;
  vehiclecitydisplay;
  vehicletypedisplay
  vehiclecolordisplay
  vehicledatedisplay
  vehicletimedisplay



  // list
  Result;
  datetime=[]
  Vehicle=[]
  Color=[]
  Numberplate=[]
  Object_id=[]
  State_Union_Territory=[]
  City=[]
  Flag=[]


  constructor(  private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private filter: LivevehiclesService) {}

    formcreate(){

      this.FORMFILTER = this.fb.group({

        Color: [null],
        Typeofvehicle: ['null'],
        fromdate: ['null'],
        todate: ['null'],
       
    });

    }

  ngOnInit() {
    this.formcreate()
  }


  get f() { return this.FORMFILTER.controls; }

  onSubmit(){
    
   
    this.submitted = true;
  
   

    if(this.FORMFILTER.valid){
      this.Result=null;
      this.datetime=[]
      this.Vehicle=[]
      this.Color=[]
      this.Numberplate=[]
      this.Object_id=[]
      this.State_Union_Territory=[]
      this.City=[]
      this.Flag=[]
      console.log(this.FORMFILTER);
      var color= this.FORMFILTER.value.Color
      var type=this.FORMFILTER.value.Typeofvehicle
      var from;
      var to;
      if(type=="ALL")
      {
        type="null"
      }
      if(color==null || color=='')
      {
        color="null"
      }
      from=this.FORMFILTER.value.fromdate+":00",
      this.fromdate=from;
      to=this.FORMFILTER.value.todate+":00"
      this.todate=to;
      this.filter.Filtering( 
       type,
       color,
       from,
       to
        

        ).subscribe(data =>{
         this.Result=data["result"]
        alert(data["result"])
        if(data["result"]!="No data Found"){
          alert("in")
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
      
        this.visible=true
        } 
        else{
          this.visible=false
        }
     },
     err => {
       console.log(err['status'])
       if(err['status'] == '400'){
       }
       else if(err['status'] == '500'){
       }
     }
     
     )
   
     
    }
    else{
      return this.FORMFILTER.invalid;
    }
    
  }



changetimeright(){
      this.imageposition++;
      if(this.imageposition<this.times.length)
      {this.vehicletimedisplay=this.times[this.imageposition]
      this.vehicleimagesdisplay=this.images[this.imageposition]
      this.vehicleNumberplatedisplay=this.vehicleNumberplate[this.imageposition];
      this.vehiclelocationdisplay=this.vehiclelocation[this.imageposition];
      this.vehiclecitydisplay=this.vehiclecity[this.imageposition];
      this.vehicletypedisplay=this.vehicletype[this.imageposition]
      this.vehiclecolordisplay= this.vehiclecolor[this.imageposition]
      this.vehicledatedisplay=this.vehicledate[this.imageposition]
        }
      else{
      this.imageposition=0;
      this.vehicletimedisplay=this.times[this.imageposition]
      this.vehicleimagesdisplay=this.images[this.imageposition]
      this.vehicleNumberplatedisplay=this.vehicleNumberplate[this.imageposition];
      this.vehiclelocationdisplay=this.vehiclelocation[this.imageposition];
      this.vehiclecitydisplay=this.vehiclecity[this.imageposition];
      this.vehicletypedisplay=this.vehicletype[this.imageposition]
      this.vehiclecolordisplay= this.vehiclecolor[this.imageposition]
      this.vehicledatedisplay=this.vehicledate[this.imageposition]
      }
    }
    changetimeleft(){
      this.imageposition--;

      if(this.imageposition>0)
      {this.vehicletimedisplay=this.times[this.imageposition]
      this.vehicleimagesdisplay=this.images[this.imageposition]
        this.vehicleNumberplatedisplay=this.vehicleNumberplate[this.imageposition];
        this.vehiclelocationdisplay=this.vehiclelocation[this.imageposition];
        this.vehiclecitydisplay=this.vehiclecity[this.imageposition];
        this.vehicletypedisplay=this.vehicletype[this.imageposition]
        this.vehiclecolordisplay= this.vehiclecolor[0]
        this.vehicledatedisplay=this.vehicledate[this.imageposition]
      }
      else{
        
      this.imageposition=this.times.length-1;
    
      this.vehicletimedisplay=this.times[this.imageposition]
      this.vehicleimagesdisplay=this.images[this.imageposition]
      this.vehicleNumberplatedisplay=this.vehicleNumberplate[this.imageposition];
      this.vehiclelocationdisplay=this.vehiclelocation[this.imageposition];
      this.vehiclecitydisplay=this.vehiclecity[this.imageposition];
      this.vehicletypedisplay=this.vehicletype[this.imageposition]
      this.vehiclecolordisplay= this.vehiclecolor[0]
      this.vehicledatedisplay=this.vehicledate[this.imageposition]
      }
    }
4






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
		
	
 alert("inside slider")

// image gallary over
}














changestate(Numberplate){
  
   
    this.k=0
    var from=this.fromdate;
    var to=this.todate;
    // from=this.FORMSEARCH.value.fromdate+":00",
    // to=this.FORMSEARCH.value.todate+":00"
    // this.displaydeatils()
    this.filter.get_livevehicle_(
      Numberplate,
      from,
      to

     
    ).subscribe(
      data => {
        if(data["result"]!="No data Found"){
     this.k=0
    


     this.vehicleNumberplate=[];
     this.vehicledatetime=[];
     this.vehiclelocation=[];
     this.vehiclecity=[];
     this.vehicletype=[]
     this.vehiclecolor=[]
     this.vehicledate=[]
     this.vehicletime=[]
     this.imagelength;
     this.images=[];
     this.times=[];

     var f=0;

     alert("inside data")
     for(let i=0;i<data["result"].length;i++){

        this.imagelength=data["result"][i]["images"]
      
        // all generals informations
          


          

          for(let j=0;j< this.imagelength.length;j++)
          {
          this.vehicledatetime[f]=data["result"][i]["general"][0]["datetime"]
          this.vehicleNumberplate[f]=data["result"][i]["general"][0]["Numberplate"]
          this.vehiclecolor[f]=data["result"][i]["general"][0]["Color"]
          this.vehicletype[f]=data["result"][i]["general"][0]["Vehicle"]
          this.vehiclelocation[f]=data["result"][i]["general"][0]["State/Union-Territory"]
          this.vehiclecity[f]=data["result"][i]["general"][0]["City"]

          var arrayoftimedate=this.vehicledatetime[f].split(',')
          this.vehicledate[f]=arrayoftimedate[0]
          this.vehicletime[f]=arrayoftimedate[1]
           this.images[f]="data:image/jpg;base64,"+this.imagelength[j]["img"]
           this.times[f]=data["result"][i]["details"][j]["time"]
            f++;
          }
         
         
          this.k++;
        
        
      
      }
     
      this.lengthogslider=this.images.length;

      // alert(  this.vehicledatetime.length)
      
    
      this.imageslider()
       
      this.vehicletimedisplay=this.times[0]    
      this.vehicleimagesdisplay=this.images[0]      
      this.vehicleNumberplatedisplay=this.vehicleNumberplate[0];
      this.vehiclelocationdisplay=this.vehiclelocation[0];
      this.vehiclecitydisplay=this.vehiclecity[0];
      this.vehicletypedisplay=this.vehicletype[0]
      this.vehiclecolordisplay= this.vehiclecolor[0]
      this.vehicledatedisplay=this.vehicledate[0]
     
      this.imageslider()
        
      
      }
      else
      {
        
      }
       
      },
      err => {
        console.log(err)
      },
      () => {
      }
      

    )
    
   
   
  
  
}

}
