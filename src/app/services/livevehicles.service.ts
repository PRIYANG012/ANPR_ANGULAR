import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LivevehiclesService {

  constructor(private http:HttpClient) { }

  
  get_livevehicle_list(){
    return this.http.get("/api/getVehicleList")
  }

  get_livevehicle_(NumberPlate,from,to){
    var requestbody={
      "NumberPlate":NumberPlate,
      "fromepoch":from,
      "toepoch":to
    }
    return this.http.post("/api/getvehicleinfo",requestbody)
  }

  Add_Number_plate(NumberPlate){
    var requestbody={
      "NumberPlate":NumberPlate
     
    }
    return this.http.post("/api/AddVehicle",requestbody)
  }
}
