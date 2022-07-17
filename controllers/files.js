const express = require('express');
const multer = require('multer');
const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() })
const { listObjects, getObject, uploadObject, deleteObject } = require('../aws/s3')

router.get('/all', (req, res) => {
    listObjects()
        .then(data => res.send(data))
        .catch(err => res.send(err))
})

router.get('/single', (req, res) => {
    getObject(req.body.key)
        .then(data => res.contentType(data.ContentType).send(data.Body))
        .catch(err => res.send(err))
})

router.post('/', upload.single('file'), (req, res) => {
    const file = req.file
    uploadObject(file.buffer, file.originalname, file.mimetype)
        .then(data => res.send({ msg: 'success', data }))
        .catch(err => res.send(err))
})

router.delete('/single', (req, res) => {
    deleteObject(req.body.key)
        .then(data => res.send(data))
        .catch(err => res.send(err))
})


module.exports = router;