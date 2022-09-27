import React, { Component } from 'react';

export default class EditSongModal extends Component {
    constructor(props) {
        super(props);
        const emptySong = {title: " ", artist: " ", youTubeId: " "};
        this.state = {editSong: emptySong, loadSong: emptySong};
    };
    handleOnChange = (e) => {
        this.setState((prevState) => ({
            ...prevState,
            editSong: {
                ...prevState.editSong,
                [e.target.name]: e.target.value,
            },
        }));
    };
    render() {
        const { editSongCallback, hideEditSongModalCallback } = this.props;
        if (this.props.editSong != null && this.props.editSong !== this.state.loadSong) {
            this.setState({ 
                editSong: this.props.editSong, 
                loadSong: this.props.editSong });
          };
        return (
            <div 
                id="edit-song-modal" 
                class="modal" 
                data-animation="slideInOutLeft">
                    <div id='edit-song-root' class="modal-root">
                        <div id="edit-song-modal-header" class="modal-north">
                            Edit Song
                        </div>
                        <div id="edit-song-modal-content" class="modal-center">
                            <div id="title-prompt" class="modal-prompt">
                                Title:
                            </div>
                            <input id="title-textfield" class='modal-textfield' type="text" name="title" 
                                value={this.state.editSong.title}
                                onChange={this.handleOnChange}/>
                            <div id="artist-prompt" class="modal-prompt">
                                Artist:
                            </div>
                            <input id="artist-textfield" class='modal-textfield' type="text" name="artist" 
                                value={this.state.editSong.artist}
                                onChange={this.handleOnChange}/>
                            <div id="you-tube-id-prompt" class="modal-prompt">
                                You Tube Id:
                            </div>
                            <input id="youTubeId-textfield" class='modal-textfield' type="text" name="youTubeId" 
                                value={this.state.editSong.youTubeId}
                                onChange={this.handleOnChange}/>
                        </div>
                        <div class="modal-south">
                            <input type="button" 
                                id="edit-song-confirm-button" 
                                class="modal-button" 
                                onClick={() => editSongCallback(this.state.editSong)}
                                value='Confirm' />
                            <input type="button" 
                                id="edit-song-cancel-button" 
                                class="modal-button" 
                                onClick={hideEditSongModalCallback}
                                value='Cancel' />
                        </div>
                    </div>
            </div>
        );
    }
}