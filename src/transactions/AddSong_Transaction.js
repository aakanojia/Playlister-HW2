import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * AddSong_Transaction
 * 
 * This class represents a transaction that works with drag
 * and drop. It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author ?
 */
export default class AddSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, initSong) {
        super();
        this.app = initApp;
        this.song = initSong;
    }

    doTransaction() {
        this.app.addNewSong(this.song);
    }
    
    undoTransaction() {
        this.app.deleteSong(this.app.getPlaylistSize() - 1);
    }
}