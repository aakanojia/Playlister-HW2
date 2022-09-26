import React, { Component } from 'react';

export default class EditSongModal extends Component {
    render() {
        const { songKeyPair, editSongCallback, hideEditSongModalCallback, editSong } = this.props;
        let name = "";
        if (songKeyPair) {
            name = songKeyPair.name;
        }
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
                            <div id="title-prompt" class="modal-prompt">Title:</div><input id="edit-song-modal-title-textfield" class='modal-textfield' type="text" defaultValue={editSong.title}/>
                            <div id="artist-prompt" class="modal-prompt">Artist:</div><input id="edit-song-modal-artist-textfield" class='modal-textfield' type="text" defaultValue={editSong.artist}/>
                            <div id="you-tube-id-prompt" class="modal-prompt">You Tube Id:</div><input id="edit-song-modal-youTubeId-textfield" class='modal-textfield' type="text" defaultValue={editSong.youTubeId}/>
                        </div>
                        <div class="modal-south">
                            <input type="button" 
                                id="edit-song-confirm-button" 
                                class="modal-button" 
                                onClick={editSongCallback}
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