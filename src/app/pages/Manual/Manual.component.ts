import { Component, OnInit } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LivevehiclesService } from 'src/app/services/livevehicles.service'
import * as $ from 'jquery'
import { FormGroup, FormControl, Validators, FormBuilder,AbstractControl} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'


@Component({
  selector: "app-Manual", 
  templateUrl: "Manual.component.html"
})
export class ManualComponent implements OnInit {
 
  FORMManual: FormGroup;
  submitted=false;
  constructor(   private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private manual: LivevehiclesService) {}

    formcreate(){

      this.FORMManual = this.fb.group({

        Numberplate: ['', [Validators.required,Validators.pattern("^[A-Z|a-z]{2}?[0-9]{1,2}?[A-Z|a-z]{0,3}?[0-9]{4}$")]],
       
    });

    }
  ngOnInit() {
    this.formcreate()

  }

  get f() { return this.FORMManual.controls; }

  onSubmit(){
    
   
    this.submitted = true;
  
   

    if(this.FORMManual.valid){
      console.log(this.FORMManual);
      this.manual.Add_Number_plate( 
        this.FORMManual.value.Numberplate,
        

        ).subscribe(data =>{
         
          alert("Added Successfully")
          this.formcreate()
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
      return this.FORMManual.invalid;
    }
    
  }

  
 
}
