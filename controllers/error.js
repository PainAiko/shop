const get404 =(req, res) => {
    /*const url = path.join(rootDir,'views', '404.html');
    res.status(404).sendFile(url);*/
    res.status(404).render('404',{title : 'page not found',path:false});
};

module.exports = get404;

