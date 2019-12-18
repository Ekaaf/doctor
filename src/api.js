export class ApiConfig {
    constructor (basepath = "http://api.mangahot.jp/koreyomo/v1", headers = {}) {
        /**
         * Endpoint
         * @type {string}
         */
        this.basepath = basepath;

        /**
         * Additional header.
         * @type {Object}
         */
        this.headers = headers;
    }
}