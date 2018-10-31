import React, { Component } from 'react';
import axios from 'axios';
import 'jodit';
import 'jodit/build/jodit.min.css';
import JoditEditor from "jodit-react";

//import api from 'wordpress-rest-api-oauth-1';

class InsertPostWp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            formState: true,
            user: '',
            password: '',
            content: '',
            title: ''
        }
    }

    getInsertPost(user, password, content, title) {
        axios.post('https://headless.borseperdonna.it/wp-json/wp/v2/posts/',
            {
                title: title,
                content: content,
                status: "publish"

            },
            {
                auth: {
                    username: user,
                    password: password
                }
            }
        )
            .then(response => {
                this.setState({ formState: false })
            })
            .catch(error => {
                this.setState({ error: error.response.data.code });
            })
    }

    validateForm() {
        return this.state.user.length > 0 && this.state.password.length > 0 && this.state.content.length;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
            //mail: event.target.value,
            //pass:event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.getInsertPost(this.state.user, this.state.password, this.state.content, this.state.title)
    }

    redirect() {
        this.props.history.push('/news/');
    }
    /*************************************************** */
    updateContent = (value) => {
        this.setState({ content: value })
    }
    /**
     * @property Jodit jodit instance of native Jodit
     */
    jodit;
    setRef = jodit => this.jodit = jodit;

    config = {
        readonly: false // all options from https://xdsoft.net/jodit/doc/
    }
    /***********************insert editor***************************** */
    render() {

        const { error, formState, user, title } = this.state;

        if (formState) {
            return <div>
                {error &&
                    <div> {error} </div>
                }
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label htmlFor="user" className="col-sm-2 col-form-label">User</label>
                        <div className="col-sm-10">
                            <input className="form-control" id="user" value={user} onChange={this.handleChange}
                                placeholder="User" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">password</label>
                        <div className="col-sm-10">
                            <input className="form-control" type="password" id="password" onChange={this.handleChange}
                                placeholder="password"
                                autoComplete="off" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Titolo</label>
                        <div className="col-sm-10">
                            <input className="form-control" id="title" type="text" value={title} onChange={this.handleChange}
                                placeholder="Inserisci titolo"
                                required />
                        </div>
                    </div>
                    <JoditEditor
                        editorRef={this.setRef}
                        value={this.state.content}
                        config={this.config}
                        onChange={this.updateContent}
                        required
                    />

                    <input type="submit" className="btn btn-primary" value="Invia" disabled={!this.validateForm()} />

                </form>
            </div >
        }
        return <div> Articolo aggiunto </div>
    }
}
export default InsertPostWp;