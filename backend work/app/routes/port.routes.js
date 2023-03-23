module.exports = (app) => {
    const experience = require('../controllers/port.controllers')

    var router = require('express').Router()

    router.post('/create-work', experience.create)
    router.put('/update-work/:id', experience.update)
    router.get('/', experience.findAll) 
    router.get('/edit-work/:id', experience.findOne)
    router.delete('/delete-work/:id', experience.delete)
    
    app.use('/work', router)
}