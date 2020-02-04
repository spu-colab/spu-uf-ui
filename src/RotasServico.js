export default {

    url_base: 'http://localhost:8091',

    get(recurso) {
        return this.url_base + recurso
    }

}