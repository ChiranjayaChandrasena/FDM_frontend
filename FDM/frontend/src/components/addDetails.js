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
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="male" value="option1"/>
                        <label class="form-check-label" for="inlineRadio1">Male</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="female" value="option2"/>
                        <label class="form-check-label" for="inlineRadio2">Female</label>
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
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="diabetesYes" value="option1"/>
                        <label class="form-check-label" for="inlineRadio1">Yes</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="diabetesNo" value="option2"/>
                        <label class="form-check-label" for="inlineRadio2">No</label>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Smoker</label>
                    <div class="form-check form-check-inline" style={{paddingLeft:50}}>
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="smokerYes" value="option1"/>
                        <label class="form-check-label" for="inlineRadio1">Yes</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="smokerNo" value="option2"/>
                        <label class="form-check-label" for="inlineRadio2">No</label>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            
            </form>
        </div>
        
    )
}