const MailList = require('../models/mailList')

const sendEmail = async (req, res, next) => {
    try {
        const { email } = req.body;

        if (!email)
            return res.status(400).json({ msg: "Missing required fields" });

        const mailListExist = await MailList.findOne({ email });
        if (mailListExist)
            return res.status(400).json({ msg: "Email already exists in our mailing list" });

        const newEmail = await MailList.create({ email });
        res.status(201).json({ newEmail });

    } catch (error) {
        next(error);
    }
}

const updateMailList = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { email } = req.body;

        if (!email)
            return res.status(400).json({ msg: "Missing required fields" });

        const mailListExist = await MailList.findByIdAndUpdate({_id: id}, { email });

        if (!mailListExist)
            return res.status(404).json({ msg: "Email not found in our mailing list" });

        res.status(200).json({ msg: "Email updated in our mailing list" });

    } catch (error) {
        next(error);
    }
}

const getMailList = async (req, res, next) => {
    try {
        const mailList = await MailList.find({});

        if (mailList.length <= 0 ) 
            return res.status(404).json({ msg: "No emails found in our mailing list" });
        
        res.status(200).json({ mailList });
    } catch (error) {
        next(error);
    }
}

const deleteMailList = async (req, res, next) => {
    try {
        const { id } = req.params;

        const mailListExist = await MailList.findByIdAndDelete({_id: id});

        if (!mailListExist)
            return res.status(404).json({ msg: "Email not found in our mailing list" });

        res.status(200).json({ msg: "Email deleted from our mailing list" });

    } catch (error) {
        next(error);
    }
}

const purgeMailList = async (req, res, next) => {
    try {
        await MailList.deleteMany({});

        res.status(200).json({ msg: "All emails deleted from our mailing list" });

    } catch (error) {
        next(error);
    }
}

module.exports = {
    sendEmail,
    getMailList,
    updateMailList,
    deleteMailList,
    purgeMailList,
}