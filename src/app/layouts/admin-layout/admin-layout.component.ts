import { Component, OnInit,NgZone } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router'
import { timer } from 'rxjs';
import * as $ from 'jquery' 

declare var webkitSpeechRecognition: any;
@Component({
  selector: "app-admin-layout",
  templateUrl: "./admin-layout.component.html",
  styleUrls: ["./admin-layout.component.scss"]
})
export class AdminLayoutComponent implements OnInit {
  public sidebarColor: string = "red";
  hello1;
  msg;
  v
  constructor(
    private route: ActivatedRoute,
  private router: Router,
  private ngZone: NgZone
  
  ) { }
  changeSidebarColor(color){
    var sidebar = document.getElementsByClassName('sidebar')[0];
    var mainPanel = document.getElementsByClassName('main-panel')[0];

    this.sidebarColor = color;

    if(sidebar != undefined){
        sidebar.setAttribute('data',color);
    }
    if(mainPanel != undefined){
        mainPanel.setAttribute('data',color);
    }
  }
  changeDashboardColor(color){
    var body = document.getElementsByTagName('body')[0];
    if (body && color === 'white-content') {
        body.classList.add(color);
    }
    else if(body.classList.contains('white-content')) {
      body.classList.remove('white-content');
    }
  }


  ngOnInit() {
    this.record()
  }


  
  record() {
    
            var routevar;
            var startjarvis;
            var recognition = new webkitSpeechRecognition();
            recognition.lang = "en-US";
            recognition.continuous = true;
            recognition.start(); 

          
            
            recognition.onresult = (event) => {
              console.log('transscript: ', event.results[event.results.length -1][0].transcript);
              routevar=event.results[event.results.length -1][0].transcript
             
             
                if(routevar==' hey Jarvis'||routevar=='hey Jarvis' ||routevar=='hi Jarvis' ||routevar==' hi Jarvis')
                {
                  startjarvis='Jarvis on'
                  alert(startjarvis)
                }
                if(startjarvis=='Jarvis on' || startjarvis==' jarvis on'){
                if(routevar==' open filter'){
                  this.ngZone.run(() => this.router.navigate(['/filter'],{relativeTo :this.route}));

                  }
                else if(routevar==' open dashboard' || routevar==' Open dashboard'){
                    this.ngZone.run(() => this.router.navigate(['/dashboard'],{relativeTo :this.route}));
                    }
                else if(routevar==' open Search' || routevar==' open search'){
                      this.ngZone.run(() => this.router.navigate(['/search'],{relativeTo :this.route}));
                    }
                else if(routevar==' show my profile' || routevar==' see My profile'){
                      this.ngZone.run(() => this.router.navigate(['/user'],{relativeTo :this.route}));
                    }
                else if(routevar==' Export Data' || routevar==' export data'){
                      this.ngZone.run(() => this.router.navigate(['/export'],{relativeTo :this.route}));
                    }
                else if(routevar==' Input Manually' || routevar==' input manually'){
                      this.ngZone.run(() => this.router.navigate(['/manual'],{relativeTo :this.route}));
                    }
                else if(routevar==' open map' ){
                      this.ngZone.run(() => this.router.navigate(['/maps'],{relativeTo :this.route}));
                    }
                else if(routevar==' over and out'){
                  startjarvis='Jarvis of';
                      }
                }
            
               
              

            }

           
            recognition.onspeechend = (event) => { 
             
              recognition.stop();
              console.log("calling 2")
              this.ngZone.run(() =>  this.record2());

             
            }
            
        
      
        }


        record2() {
    
          var routevar;
          var startjarvis;
          var recognition = new webkitSpeechRecognition();
          recognition.lang = "en-US";
          recognition.continuous = true;
          recognition.start(); 

        
          
          recognition.onresult = (event) => {
            console.log('transscript: ', event.results[event.results.length -1][0].transcript);
            routevar=event.results[event.results.length -1][0].transcript
           
           
              if(routevar==' hey Jarvis'||routevar=='hey Jarvis' ||routevar=='hi Jarvis' ||routevar==' hi Jarvis')
              {
                startjarvis='Jarvis on'
                alert(startjarvis)
              }
              if(startjarvis=='Jarvis on' || startjarvis==' jarvis on'){
              if(routevar==' open filter'){
                this.ngZone.run(() => this.router.navigate(['/filter'],{relativeTo :this.route}));

                }
              else if(routevar==' open dashboard' || routevar==' Open dashboard'){
                  this.ngZone.run(() => this.router.navigate(['/dashboard'],{relativeTo :this.route}));
                  }
              else if(routevar==' open Search' || routevar==' open search'){
                    this.ngZone.run(() => this.router.navigate(['/search'],{relativeTo :this.route}));
                  }
              else if(routevar==' show my profile' || routevar==' see My profile'){
                    this.ngZone.run(() => this.router.navigate(['/user'],{relativeTo :this.route}));
                  }
              else if(routevar==' Export Data' || routevar==' export data'){
                    this.ngZone.run(() => this.router.navigate(['/export'],{relativeTo :this.route}));
                  }
              else if(routevar==' Input Manually' || routevar==' input manually'){
                    this.ngZone.run(() => this.router.navigate(['/manual'],{relativeTo :this.route}));
                  }
              else if(routevar==' open map' ){
                    this.ngZone.run(() => this.router.navigate(['/maps'],{relativeTo :this.route}));
                  }
              else if(routevar==' over and out'){
                startjarvis='Jarvis of';
                    }
              }
          
             
            

          }

         
          recognition.onspeechend = (event) => { 
           
            recognition.stop();
            console.log("calling 1")
            this.ngZone.run(() =>  this.record());

           
          }
          
      
    
      }
       




}
