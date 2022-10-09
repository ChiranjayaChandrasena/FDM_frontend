import React,{useState} from "react";
//import axios from "axios";





export default function AddDetails(){

    const [age, setAge] = useState('');
    const [sex, setSex] = useState("");
    const [bloodpressure, setbloodpressure] = useState("");
    const [cholesterol, setCholesterol] = useState("");
    const [diabetes, setDiabetes] = useState("");
    const [smoking, setSmoking] = useState("");
    const [output, setOutput] = useState("");

    function sendData(e) {
        e.preventDefault();

        // const jsonObj = {
        // age : 58.0,
        // sex : 1,
        // bloodpressure : 229.0,
        // cholesterol : 159,
        // diabetes : 2,
        // smoking : 4}

    const jsonObj = {
        age : age,
        sex : sex,
        bloodpressure : bloodpressure,
        cholesterol : cholesterol,
        diabetes : diabetes,
        smoking : smoking
    }

    // {
    //     age: 58.0,
    //     sex: 1,
    //     bloodpressure: 229.0,
    //     cholesterol: 159,
    //     diabetes: 2,
    //     smoking: 4,
    //   }

    //const encodedData = encodeURIComponent(JSON.stringify(jsonObj))
    
    //const encodedData = encodeURIComponent(JSON.stringify(jsonObj))

    // const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(jsonObj)
    // };
    // fetch('https://test-restapi-1.herokuapp.com/cardiac_prediction', requestOptions)
    //     .then(response => console.log(response.data.message))
        //.then(data => this.setState({ postId: data.id }));


    // axios.post('https://test-restapi-1.herokuapp.com/cardiac_prediction', jsonObj)
    //     .then(response => console.log(response.data.message));

    // axios.post("https://test-restapi-1.herokuapp.com/cardiac_prediction", jsonObj).then((response =>{
    //     //callback(response.data.message);
    //     console.log(response.data.message);
    // })).catch((err) => {
    //     alert("Unable to add" + err);
    // })


    
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(jsonObj),
        };
        fetch(
          'https://test-restapi-1.herokuapp.com/cardiac_prediction',
          requestOptions
        )
          .then((response) => response.json())
          .then((data) => setOutput(data));
    }





    return(
        <div style={{paddingLeft:552, paddingTop:100}}>
            <div>
            <h1 class="display-5">Cardiac Risk Calculator</h1><br/> 
            </div>

            <form onSubmit={sendData}>
                <div class="form-group row">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Age</label>
                    <div class="col-sm-3 text-center" style={{paddingLeft:50}}>
                    <input type="number" class="form-control" id="age" placeholder="Age"
                        onChange={(e) => {
                            setAge(e.target.value);
                        }}
                    required />
                    </div>
                </div>

                <div class="form-group row">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Gender</label>
                    <div class="form-check form-check-inline" style={{paddingLeft:50}}>
                        <input class="form-check-input" type="radio" name="male" id="male" value="1"
                        onChange={(e) => {
                            setSex(e.target.value);
                        }}
                     />
                        <label class="form-check-label">Male</label>
                    </div>

                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="female" id="female" value="2" 
                        onChange={(e) => {
                            setSex(e.target.value);
                        }}
                        
                        />
                        <label class="form-check-label">Female</label>
                    </div>
                </div>
                
                <div class="form-group row">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Blood pressure</label>
                    <div class="col-sm-3" style={{paddingLeft:50}}>
                    <input type="number" class="form-control" id="bloodPressure" placeholder="mmHG" 
                    onChange={(e) => {
                        setbloodpressure(e.target.value);
                    }}
                    required
                    />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Cholesterol level</label>
                    <div class="col-sm-3" style={{paddingLeft:50}}>
                    <input type="number" class="form-control" id="cholesterolLevel" placeholder="mg/dL"
                    onChange={(e) => {
                        setCholesterol(e.target.value);
                    }}
                    required/>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Diabetes patient</label>
                    <div class="form-check form-check-inline" style={{paddingLeft:50}}>
                        <input class="form-check-input" type="radio" name="diabetesYes" id="diabetesYes" value="1"
                        onChange={(e) => {
                            setDiabetes(e.target.value);
                        }}
                        />
                        <label class="form-check-label">Yes</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="diabetesNo" id="diabetesNo" value="2"
                        onChange={(e) => {
                            setDiabetes(e.target.value);
                        }}
                        />
                        <label class="form-check-label">No</label>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Smoker</label>
                    <div class="form-check form-check-inline" style={{paddingLeft:50}}>
                        <input class="form-check-input" type="radio" name="smoker1" id="smoker1" value="1"
                        onChange={(e) => {
                            setSmoking(e.target.value);
                        }}
                        />
                        <label class="form-check-label">1</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="smoker2" id="smoker2" value="2"
                        onChange={(e) => {
                            setSmoking(e.target.value);
                        }}
                        />
                        <label class="form-check-label">2</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="smoker3" id="smoker3" value="3"
                        onChange={(e) => {
                            setSmoking(e.target.value);
                        }}
                        />
                        <label class="form-check-label">3</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="smoker4" id="smoker4" value="4"
                        onChange={(e) => {
                            setSmoking(e.target.value);
                        }}
                        />
                        <label class="form-check-label">4</label>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            
            </form>
            <div className="card text-center m-3">
        <h5 className="card-header">Result</h5>
        <div className="card-body"> {output} </div>
      </div>     
        </div>
        
    )
}