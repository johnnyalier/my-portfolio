const router = require("express").Router();
const {
    sendEmail,
    getMailList,
    updateMailList,
    deleteMailList,
    purgeMailList,
} = require("../controllers/mailList")

router.post('/', sendEmail)
router.get('/', getMailList)
router.put('/:id', updateMailList)
router.delete('/:id', deleteMailList)
router.delete('/', purgeMailList)

module.exports = router;