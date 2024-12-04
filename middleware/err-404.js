module.exports = (req, res) => {
  res.status(404)
  res.json('404 | книга или страница не найдена')
}

module.exports = ((req, res) => {
  res.render('errors/404', {
      title: '404'
  })
});