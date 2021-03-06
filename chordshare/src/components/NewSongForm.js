import React, { Component } from 'react'

const newSongStyles = {
    padding: '10px'
}

class NewSongForm extends Component {
    constructor(props) {
        super(props);
        this.createSong = this.createSong.bind(this);
    }

    createSong(event) {
        event.preventDefault();
        const title = this.titleInput.value;
        this.props.addSong(title);
        this.songForm.reset();
        this.props.postSubmitHandler();
    }

    render() {
        return (
            <div style={newSongStyles}>
        <form onSubmit={(event) => this.createSong(event)} ref={(form) => this.songForm = form}>
          <label className="bp3-label">
            Song Title
            <input style={{width: "100%"}} className="bp3-input" name="title" type="text" ref={(input) => { this.titleInput = input }} placeholder="Don't Stop Believing"></input>
          </label>
          <input style={{width: "100%", textAlign: "center"}} type="submit" className="bp3-button bp3-intent-primary" value="Create Song"></input>
        </form>
      </div>
        )
    }
}

export default NewSongForm;