const router = require('express').Router();

const {
    getRresume,
    uploadResume,
    downloadResume,
} = require('../controllers/resume');

router.get('/:filename', getRresume);
router.post('/', uploadResume);
router.get('/download/:filename', downloadResume);

module.exports = router;