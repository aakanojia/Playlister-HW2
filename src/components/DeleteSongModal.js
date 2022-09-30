import React, { Component } from 'react';

export default class DeleteSongModal extends Component {
    render() {
        const { deleteSong, deleteSongCallback, hideDeleteSongModalCallback } = this.props;
        let title = "";
        if (deleteSong) {
            title = deleteSong.title;
        };
        return (
            <div class="modal" id="remove-song-modal" data-animation="slideInOutLeft">
                <div class="modal-root" id='verify-remove-song-root'>
                    <div class="modal-north">
                        Remove song?
                    </div>                            
                    <div class="modal-center">
                        <div class="modal-center-content">
                            Are you sure you wish to permanently remove <span id="remove-song-span">{title} </span> from the playlist?
                        </div>
                    </div>
                    <div class="modal-south">
                        <input type="button" id="remove-song-confirm-button" class="modal-button" value='Confirm' onClick={deleteSongCallback}/>
                        <input type="button" id="remove-song-cancel-button" class="modal-button" value='Cancel' onClick={hideDeleteSongModalCallback}/>
                    </div>
                </div>
            </div>
        );
    }
}