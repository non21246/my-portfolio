module.exports = (app) => {
    const experience = require('../controllers/port.controllers')

    var router = require('express').Router()

    router.post('/create-experience', experience.create)
    router.put('/update-experience/:id', experience.update)
    router.get('/', experience.findAll) 
    router.get('/edit-experience/:id', experience.findOne)
    router.delete('/delete-experience/:id', experience.delete)
    
    app.use('/information', router)
}