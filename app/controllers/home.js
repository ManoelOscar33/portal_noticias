module.exports.index = (application, req, res) => {

    let connection = application.config.dbConnection();
    let noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.get5UltimasNoticias((error, result) => {
        res.render("home/index", {noticias : result});
    });
}