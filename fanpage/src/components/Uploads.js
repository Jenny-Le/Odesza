import React from "react";


class Uploads extends Component {
    constuctor(props) {
        super(props)
        this.state = {
            image_url: '',
            location: '',
            venue: '',
            song: ''
        }
    }

    uploadSubmit(event) {
        event.preventDefault();
        API.createListing(this.state, this.redirectHome.bind(this))
    }

    renderUploadButton() {
        if (!this.state.image_url) {
            return (
                <div className="col s12 right-align">
                    <ReactFilestack
                        apikey="A191qbrAQNOWujKcfjlh2z"
                        buttonText="Upload an image"
                        buttonClass="btn waves-effect waves-light btn-small"
                        onSuccess={response => this.setState({ image_url: response.filesUploaded[0].url }, () => console.log(this.state))}
                    />
                </div>
            )
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col s12 center">
                    <h5 className="form-title">Share your memory</h5>
                </div>
                <form className="col s12" id="new-listing">
                    <div className="input-field col s12">
                        <input id="name" type="text" onChange={this.handleChange.bind(this)} value={this.state.location} />
                        <label htmlFor="location">Location</label>
                    </div>
                    <div className="input-field col s12">
                        <select id="gender" onChange={this.handleChange.bind(this)} value={this.state.venue}>
                            <option value="" disabled selected>Venue</option>
                        </select>
                    </div>
                    <div className="input-field col s12">
                        <select id="category" onChange={this.handleChange.bind(this)} value={this.state.song}>
                            <option value="" disabled selected>Song</option>
                        </select>
                    </div>


                    {this.renderUploadButton()}

                    <div className="col s12">
                        <button disabled={this.requiredFields()} onClick={this.formSubmit.bind(this)} className="right btn waves-effect waves-light">Create Listing
                <i className="material-icons right">send</i>
                        </button>
                    </div>
                </form>
            </div>


        )}
    }
                
                export default Uploads;
