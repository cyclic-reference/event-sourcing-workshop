"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var ReplaySubject_1 = require("rxjs/ReplaySubject");
var LocalAvatar = /** @class */ (function () {
    function LocalAvatar(id) {
        this.imageBinaryRepeater = new ReplaySubject_1.ReplaySubject(1);
        this.setNewFile(id);
    }
    Object.defineProperty(LocalAvatar.prototype, "selectedFile", {
        /**
         * This is the expected data structure that will
         * be translated as a rest call to the backend.
         * @returns {Observable<File>}
         */
        get: function () {
            return this._selectedFile;
        },
        set: function (value) {
            this._selectedFile = value;
            this.readFileIntoBinary();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets current project file and also
     * reads the file into binary so that it
     * will be displayed.
     * @param {File} file preferably a image file.
     */
    LocalAvatar.prototype.setNewFile = function (file) {
        this.selectedFile = Observable_1.Observable.of(file);
    };
    LocalAvatar.prototype.getIdentifier = function () {
        return this._identifier.id;
    };
    /**
     * This is the raw image data binary that
     * will be rendered by the browser.
     * @returns {Observable<MSBaseReader>}
     */
    LocalAvatar.prototype.imageBinary = function () {
        return this.imageBinaryRepeater;
    };
    LocalAvatar.prototype.readFileIntoBinary = function () {
        var _this = this;
        this._selectedFile
            .subscribe(function (file) {
            var fileReader = new FileReader();
            fileReader.onload = function (event) {
                _this.imageBinaryRepeater.next(fileReader.result);
            };
            fileReader.readAsDataURL(file);
        });
    };
    return LocalAvatar;
}());
exports.LocalAvatar = LocalAvatar;
//# sourceMappingURL=LocalAvatar.js.map