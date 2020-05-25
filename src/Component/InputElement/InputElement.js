import React from 'react';
import './InputElement.css'

function InputElement(props) {
    return (
        <React.Fragment>
            {/* 
            <div className="row">
                <div className="country">
                    <form>
                        The Country: <input className="country-input"
                            type="text" onChange={props.onchanged} />
                    </form>
                </div>
                <div className="average">
                    The Average: 77
    </div>
                <div className="horiz-bar" ></div>
            </div> */}

            <div className="container">
                <div className="row">
                    <div className="col-sm-12">

                        <div className="radio">
                            <label>
                                <input type="radio" value="test_data" checked={props.selectedOption === "test_data"} onChange={props.optionChange} />


            Test Data
          </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" value="server_data" onChange={props.optionChange} checked={props.selectedOption === "server_data"} />
            Server Data
          </label>
                        </div>

                    </div>

                </div>
                <div className="row">
                    <div className="col-xs-8 col-sm-6 col-md-4 col-sm-offset-1 col-md-offset-2">
                        <form>
                            <div className="form-group">
                                <label>Country Name :</label>
                                <input placeholder="Country" onChange={props.onchanged} type="text" id="country" className="form-control" />
                                <hr></hr>
                                <span>Average : {props.score.average_score}</span>

                                <div className="horiz-bar" style={{ width: 2 * props.score.average_score + "px" }}></div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>



        </React.Fragment >
    );
}

export default InputElement;
