const router = require("express").Router();
const {
    login,
    createAccount,
    getUser,
} = require("../controllers/about");

const {
    createExperienceSummary,
    updateExperienceSummary,
    deleteExperienceSummary,
    getAllExperienceSummaries,
} = require("../controllers/experienceSummary");

router.post('/login', login)
router.post('/register', createAccount)
router.get('/', getUser)

router.post('/experienceSummary', createExperienceSummary)
router.put('/experienceSummary/:id', updateExperienceSummary)
router.delete('/experienceSummary/:id', deleteExperienceSummary)
router.get('/experienceSummary', getAllExperienceSummaries)

module.exports = router;