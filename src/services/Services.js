const datasource = require('../models');

class Services {
    constructor(nomeDoModel) {
        this.model = nomeDoModel;
    }

    async pegaTodosOsRegistros() {
        return dataSource[this.model].findAll();
    }

    async atualizaRegistro(dadosAtualizados, id) {
        const listadeRegistrosAtualizados = datasource[this.model].update(dadosAtualizados, {
            where: { id: id }
        });
        if (listadeRegistrosAtualizados[0] === 0) {
            return false
        }
        return true;
    }
}

module.exports = Services;