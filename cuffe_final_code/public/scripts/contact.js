'use strict';
var PatientBox = React.createClass({
    getInitialState: function() {
        return {data: []};
      },
    handleRequestSubmit: function(request) {
        $.ajax({
          url: this.props.url,
          dataType: 'json',
          type: 'POST',
          data: request,
          success: function(data) {
            //We set the state again after submission, to update with the submitted data
            this.setState({data: data});
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
          }.bind(this)
        });
      },
    render: function () {
        return (
        <div className="PatientBox">
            <h1>Contact Us</h1>
            <Patientform2 onRequestSubmit={this.handleRequestSubmit}/>
        </div>
        );
    }
});

var Patientform2 = React.createClass({
    getInitialState: function () {
        return {
            fName: "",
            lName: "",
            dob: '',
            address: "",
            city: "",
            state: "",
            zip: "",
            phone: "",
            email: "",
            contact: "",
            newsletter: "",
            insure: "",
            insureOther: "",
            issue: "",
            symptoms: "",
            location: "",
            learn: "",
        };
    },
    validateEmail: function (value) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(value);
    },
    commonValidate: function() {
        return true;
    },
    setValue: function (field, event) {
        var object = {};
        object[field] = event.target.value;
        this.setState(object);
    },

    handleSubmit: function (e) {
        e.preventDefault();
        window.confirm("Your request has been successfully submitted. A representative will get in touch with you as soon as possible.")
        var fName = this.state.fName.trim();
        var lName = this.state.lName.trim();
        var address = this.state.address.trim();
        var dob = this.state.dob.trim();
        var city = this.state.city.trim();
        var state = this.state.state.trim();
        var zip = this.state.zip.trim();
        var phone = this.state.phone.trim();
        var email = this.state.email.trim();
        var contact = this.state.contact.trim();
        var newsletter = this.state.newsletter.trim();
        var insure = this.state.insure.trim();
        var insureOther = this.state.insureOther.trim();
        var issue = this.state.issue.trim();
        var symptoms = this.state.symptoms.trim();
        var location = this.state.location.trim();
        var learn = this.state.learn.trim()
        this.props.onRequestSubmit({
            fName: fName,
            lName: lName,  
            dob: dob, 
            address: address,
            city: city,
            state: state,
            zip: zip,
            phone: phone,
            email: email,
            contact: contact,
            newsletter: newsletter,
            insure: insure,
            insureOther: insureOther,
            issue: issue,
            symptoms: symptoms,
            location: location,
            learn: learn,
        });
        this.setState({
            fName: '',
            lName: '',
            dob: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            phone: '',
            email: "",
            newsletter: "",
            insure: "",
            insureOther: "",
            issue: "",
            symptoms: "",
            location: "",
            learn: ""
    })
    },
    render: function () {
        return (
            <form className="patientForm" onSubmit={this.handleSubmit}>
                <fieldset>
                <table>
                    <tbody>
                        <tr>
                            <td>First Name</td>
                            <td>
                                <input 
                                    type="text"
                                    value={this.state.fName}
                                    uniqueName="fName"
                                    textArea={false}
                                    required={true}
                                    minCharacters={1}
                                    validate={this.commonValidate}
                                    onChange={this.setValue.bind(this, "fName")}
                                    errorMessage="First Name is invalid"
                                    emptyMessage="First Name is required" />
                            </td>
                        </tr>
                        <tr>
                            <td>Last Name</td>
                            <td><input 
                                    type="text"
                                    value={this.state.lName}
                                    uniqueName="lName"
                                    textArea={false}
                                    required={true}
                                    minCharacters={1}
                                    validate={this.commonValidate}
                                    onChange={this.setValue.bind(this, "lName")}
                                    errorMessage="Last Name is invalid"
                                    emptyMessage="Last Name is required" /></td>
                        </tr>
                        <tr>
			                <td> Date of Birth </td>
			                <td> <input 
                                type="date" 
                                value={this.state.dob}
                                uniqueName="dob"
                                textArea={false}
                                required={true}
                                minCharacters={1}
                                validate={this.commonValidate}
                                onChange={this.setValue.bind(this, "dob")}
                                errorMessage="Date of Birth is invalid"
                                emptyMessage="Date of Birth is required"/> </td>
		                </tr>
		                <tr>
			                <td> Address </td>
			                <td> <input 
                                type="text"
                                value={this.state.address}
                                uniqueName="address"
                                textArea={false}
                                required={true}
                                minCharacters={1}
                                validate={this.commonValidate}
                                onChange={this.setValue.bind(this, "address")}
                                errorMessage="Address is invalid"
                                emptyMessage="Address is required" /> </td>
		                    </tr>
		                <tr>
			                <td> City </td>
			                <td> <input
                                    type="text"
                                    value={this.state.city}
                                    uniqueName="city"
                                    textArea={false}
                                    required={true}
                                    minCharacters={1}
                                    validate={this.commonValidate}
                                    onChange={this.setValue.bind(this, "city")}
                                    errorMessage="City is invalid"
                                    emptyMessage="City is required" /> </td>
		                </tr>
		                <tr>
			                <td> State </td>
			                <td>
                            <select 
                            value={this.state.state}
                            uniqueName="state"
                            textArea={false}
                            required={true}
                            minCharacters={1}
                            onChange={this.setValue.bind(this, "state")}>
                                <option value="null"></option>
                                <option value="AL">AL</option>
                                <option value="AK">AK</option>
                                <option value="AR">AR</option>
                                <option value="AZ">AZ</option>
                                <option value="CA">CA</option>
                                <option value="CO">CO</option>
                                <option value="CT">CT</option>
                                <option value="DC">DC</option>
                                <option value="DE">DE</option>
                                <option value="FL">FL</option>
                                <option value="GA">GA</option>
                                <option value="HI">HI</option>
                                <option value="IA">IA</option>
                                <option value="ID">ID</option>
                                <option value="IL">IL</option>
                                <option value="IN">IN</option>
                                <option value="KS">KS</option>
                                <option value="KY">KY</option>
                                <option value="LA">LA</option>
                                <option value="MA">MA</option>
                                <option value="MD">MD</option>
                                <option value="ME">ME</option>
                                <option value="MI">MI</option>
                                <option value="MN">MN</option>
                                <option value="MO">MO</option>
                                <option value="MS">MS</option>
                                <option value="MT">MT</option>
                                <option value="NC">NC</option>
                                <option value="ND">ND</option>
                                <option value="NE">NE</option>
                                <option value="NH">NH</option>
                                <option value="NJ">NJ</option>
                                <option value="NM">NM</option>
                                <option value="NV">NV</option>
                                <option value="NY">NY</option>
                                <option value="OH">OH</option>
                                <option value="OK">OK</option>
                                <option value="OR">OR</option>
                                <option value="PA">PA</option>
                                <option value="RI">RI</option>
                                <option value="SC">SC</option>
                                <option value="SD">SD</option>
                                <option value="TN">TN</option>
                                <option value="TX">TX</option>
                                <option value="UT">UT</option>
                                <option value="VA">VA</option>
                                <option value="VT">VT</option>
                                <option value="WA">WA</option>
                                <option value="WI">WI</option>
                                <option value="WV">WV</option>
                                <option value="WY">WY</option>
                            </select>
			                </td>
		                </tr>
		                <tr>
			                <td> ZIP Code </td>
			                <td> <input type="text"
                            uniqueName="zip"
                            textArea={false}
                            required={true}
                            minCharacters={1}
                            validate={this.commonValidate}
                            onChange={this.setValue.bind(this, 'zip')}
                            errorMessage="ZIP is invalid"
                            emptyMessage="ZIP is required" /> </td>
		                </tr>
		                <tr>
			                <td> Phone Number </td>
			                <td> <input type="tel"
                            value={this.state.phone}
                            uniqueName="phone"
                            textArea={false}
                            required={true}
                            minCharacters={1}
                            validate={this.commonValidate}
                            onChange={this.setValue.bind(this, "phone")}
                            errorMessage="Phone Number is invalid"
                            emptyMessage="Phone Number is required" /> </td>
		                </tr>
		                <tr>
			                <td> Email Address </td>
			                <td> <input type="email"
                            value={this.state.email}
                            uniqueName="email"
                            textArea={false}
                            required={false}
                            minCharacters={1}
                            onChange={this.setValue.bind(this, "email")}/> </td>
		                </tr>
                        <tr>
                            <td> Preferred Contact Method </td>
                            <td> <select name="contact" id="contact"
                                value={this.state.contact}
                                uniqueName="contact"
                                textArea={false}
                                required={true}
                                minCharacters={1}
                                validate={this.commonValidate}
                                onChange={this.setValue.bind(this, "contact")}>
                                    <option> </option>
                                    <option value="email"> Email </option>
                                    <option value="phone"> Phone</option> </select>
                            </td>
                        </tr>
		                <tr>
			                <td> Include on Mailing List </td>
			                <td> <select
                                    value={this.state.newsletter}
                                    uniqueName="newsletter"
                                    textArea={false}
                                    required={true}
                                    onChange={this.setValue.bind(this, "newsletter")}> 
                                    <option></option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                    </select></td>
		                </tr>
		                <tr>
			                <td> Current Insurance Provider </td>
		                    <td> <select 
                                    value={this.state.insure}
                                    uniqueName="insure"
                                    textArea={false}
                                    required={false}
                                    onChange={this.setValue.bind(this, "insure")}> 
					                <option value="null"></option>
					                <option value="aetna">Aetna</option>
					                <option value="blue">Blue Cross Blue Shield</option>
					                <option value="careiq">Care IQ</option>
					                <option value="champva">ChampVA</option>
					                <option value="cigna">Cigna</option>
					                <option value="corvel">Corvel Workers' Compensation</option>
					                <option value = "dol">Department of Labor</option>
					                <option value ="dmerc">DMERC</option>
				                	<option value ="first">First Health WPS</option>
				                	<option value="humana">Humana</option>
				                	<option value="medcost">Medcost</option>
				                	<option value="medicare">Medicare</option>
			                		<option value="merrick">Merrick MVA Insurance</option>
					                <option value="mlhmva">MLH MVA Insurance</option>
		                			<option value="molina">Molina Medicade</option>
					                <option value="multiplan">Multiplan/PHCS</option>
		                			<option value="onecall">One Call</option>
		                			<option value="pai">Planned Administrators</option>
		                			<option value="railroad">Railroad Medicare</option>
			                		<option value="rpn">RPN - Cigna for Therapy</option>
		                			<option value="tricare">TRICARE</option>
			                		<option value="united">UnitedHealthcare</option>
			                		<option value="scmedicaid">SC Medicaid</option>
			                		<option value="scwork">SC Workers' Compensation Claims</option>
			                		<option value="select">Select Health Medicaid</option>
                                 </select> </td>
		                </tr>
		                <tr>
			                <td> Other: </td>
			                <td> <input type="text"
                            value={this.state.insureOther}
                            uniqueName="insureOther"
                            textArea={false}
                            required={false}
                            onChange={this.setValue.bind(this, "insureOther")}/></td>
		                </tr>
                 </tbody>
		         </table>
		        </fieldset>
                <br></br>
                <fieldset>
                    <table>
                        <tbody>
                            <tr>
                                <td>Select Predominant Issue</td>
                                <td><select
                                value={this.state.issue}
                                uniqueName="issue"
                                textArea={false}
                                required={true}
                                minCharacters={1}
                                onChange={this.setValue.bind(this, "issue")}>
                                    <option></option>
                                    <option value="lumbar">Lumbar (Neck/Spine)</option>
                                    <option value="podiatry">Podiatry (Ankle/Foot)</option>
                                    <option value="joint">Joint (Knee/Hip/Elbow)</option>
                                    <option value="upper body">Upper Body (Back/Shoulder)</option>
                                    <option value="tactile">Tactile (Hand/Wrist)</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Additional Symptoms:
                                </td>
                                <td>
                                    <textarea
                                    value={this.state.symptoms}
                                    uniqueName="symptoms"
                                    required={false}
                                    onChange={this.setValue.bind(this, "symptoms")}/>
                                </td>
                            </tr>
                            <tr>
                                <td>Select Your Preferred Location</td>
                                <td><select
                                value={this.state.location}
                                uniqueName="location"
                                required={false}
                                minCharacters={1}
                                onChange={this.setValue.bind(this, "location")}>
                                    <option></option>
                                    <option value="conway">Conway</option>
                                    <option value="murrels">Murrels Inlet</option>
                                    <option value="myrtle beach">Myrtle Beach</option>
                                    <option value="carolina forest">Myrtle Beach - Carolina Forest</option>
                                    <option value="market common">Myrtle Beach - Market Common</option>
                                    <option value="north myrtle">North Myrtle Beach</option>
                                    </select></td>
                            </tr>
                        </tbody>
                    </table>
                </fieldset>
                <br/>
                <fieldset>
                    <table>
                        <tbody>
                            <tr>
                                <td>How did you learn about OrthoSC?</td>
                                <td><select
                                value={this.state.learn}
                                uniqueName="learn"
                                required={false}
                                minCharacters={1}
                                onChange={this.setValue.bind(this, "learn")}>
                                    <option></option>
                                    <option value="doctor">Doctor Referral</option>
                                    <option value="interet">Internet Search</option>
                                    <option value="radio">Radio Ad</option>
                                    <option value="television">Television Ad</option>
                                    <option value="friend/family">Friend/Family Memeber</option>
                                    <option value="returning">Returning Patient</option>
                                    <option value="other">Other</option>
                                    </select></td>
                            </tr>
                        </tbody>
                    </table>
                </fieldset>
                <br/>
                <div id="bottom">
                <input type="submit" id="submit" value="Submit"/>
                </div>
            </form>
        );
    }
});

ReactDOM.render(
    <PatientBox url="/api/requests" pollInterval={2000}/>,
    document.getElementById('content')
);
