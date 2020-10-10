import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LivevehiclesService } from 'src/app/services/livevehicles.service'
import * as $ from 'jquery'
import { FormGroup, FormControl, Validators, FormBuilder,AbstractControl} from '@angular/forms';

@Component({
  selector: "app-search", 
  templateUrl: "search.component.html"
})
export class searchComponent implements OnInit {
  displayresult=true;
  
  FORMSEARCH: FormGroup;
  submitted = false;


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


  constructor(private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private livelist:LivevehiclesService) {}


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
        this.vehiclecolordisplay= this.vehiclecolor[this.imageposition]
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
      this.vehiclecolordisplay= this.vehiclecolor[this.imageposition]
      this.vehicledatedisplay=this.vehicledate[this.imageposition]
      }
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
		
	
 alert("inside slider")

// image gallary over
}

  ngOnInit() {
   
    this.FORMSEARCH = this.fb.group({

      plate: ['', [Validators.required]],
      fromdate: ['null', ],
      todate: ['null', ],
      
  });

  this.displayresult=false;

  }

  get f() { return this.FORMSEARCH.controls; }


  changestate(){
  
  this.submitted = true;


  if(this.FORMSEARCH.valid){
    console.log(this.FORMSEARCH);
    this.k=0
    var from;
    var to;
    from=this.FORMSEARCH.value.fromdate+":00",
    to=this.FORMSEARCH.value.todate+":00"
    // this.displaydeatils()
    this.livelist.get_livevehicle_(
      this.FORMSEARCH.value.plate,
      from,
      to

     
    ).subscribe(
      data => {
        if(data["result"]!="No data Found"){
     this.k=0
     this.displayresult=true;


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
        this.displayresult=false
      }
       
      },
      err => {
        console.log(err)
      },
      () => {
      }
      

    )
    
   
   
  }
  else{
    return this.FORMSEARCH.invalid;
   
  }
  
}
 
}
