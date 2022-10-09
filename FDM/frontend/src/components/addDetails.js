import React,{Component} from "react";





export default function AddDetails(){
    return(
        <div style={{paddingLeft:552, paddingTop:100}}>
            <div>
            <h1 class="display-5">Cardiac Risk Calculator</h1><br/> 
            </div>

            <form>
                <div class="form-group row">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Age</label>
                    <div class="col-sm-3 text-center" style={{paddingLeft:50}}>
                    <input type="number" class="form-control" id="age" placeholder="Age"/>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Gender</label>
                    <div class="form-check form-check-inline" style={{paddingLeft:50}}>
                        <input class="form-check-input" type="radio" name="male" id="male" value="1"/>
                        <label class="form-check-label">Male</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="female" id="female" value="2"/>
                        <label class="form-check-label">Female</label>
                    </div>
                </div>
                
                <div class="form-group row">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Blood pressure</label>
                    <div class="col-sm-3" style={{paddingLeft:50}}>
                    <input type="number" class="form-control" id="bloodPressure" placeholder="mmHG"/>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Cholesterol level</label>
                    <div class="col-sm-3" style={{paddingLeft:50}}>
                    <input type="number" class="form-control" id="cholesterolLevel" placeholder="mg/dL"/>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Diabetes patient</label>
                    <div class="form-check form-check-inline" style={{paddingLeft:50}}>
                        <input class="form-check-input" type="radio" name="diabetesYes" id="diabetesYes" value="1"/>
                        <label class="form-check-label">Yes</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="diabetesNo" id="diabetesNo" value="2"/>
                        <label class="form-check-label">No</label>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Smoker</label>
                    <div class="form-check form-check-inline" style={{paddingLeft:50}}>
                        <input class="form-check-input" type="radio" name="smoker1" id="smoker1" value="1"/>
                        <label class="form-check-label">1</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="smoker2" id="smoker2" value="2"/>
                        <label class="form-check-label">2</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="smoker3" id="smoker3" value="3"/>
                        <label class="form-check-label">3</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="smoker4" id="smoker4" value="4"/>
                        <label class="form-check-label">4</label>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            
            </form>
        </div>
        
    )
}