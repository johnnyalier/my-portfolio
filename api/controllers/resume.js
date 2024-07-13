const path = require('path')
const formidable = require('formidable')
const fs = require('fs');

const getRresume = async (req, res, next) => {
    try {
        console.log(req.params.filename);
        const filePath = path.join(__dirname, '..', 'uploads', `${req.params.filename}`);

        console.log(filePath);

        if (!fs.existsSync(filePath)) 
            return res.status(404).json({ msg: 'File not found' });
        
        res.sendFile(filePath);
    } catch (error) {
        next(error);
    }
}

const uploadResume = async (req, res, next) => {
    try {
        const form = new formidable.IncomingForm();

        form.parse(req, (err, fields, files) => {
            if (err) {
                return res.status(500).json({ msg: 'Error parsing files' });
            }
            
            if (!files.resume || !files.resume.length === 0) 
                return res.status(400).json({ msg: 'No resume provided' });
            
            if (files.resume.length > 1)
                return res.status(400).json({ msg: 'Only one resume allowed' });

            const uploadedResume = files.resume[0]

            if (uploadedResume.mimetype !== 'application/pdf' || path.extname(uploadedResume.originalFilename).toLowerCase() !== '.pdf')
                return res.status(400).json({ msg: 'Only PDF files are allowed' });

            const oldPath = uploadedResume.filepath;
            const newPath = path.join(__dirname, '..', 'uploads', uploadedResume.originalFilename);
            const rawData = fs.readFileSync(oldPath)

            fs.writeFile(newPath, rawData, (err) => {
                if (err) {
                    return res.status(500).json({ msg: 'Error saving file' });
                }

                fs.unlinkSync(oldPath);
                res.json({ msg: 'Resume uploaded successfully', filename: uploadedResume.name });
            });
        })
    } catch (error) {
        next(error);
    }
}

const downloadResume = async (req, res, next) => {
    try {
        const filename = req.params.filename;
        const filePath = path.join(__dirname, "..", 'uploads', filename);

        fs.access(filePath, fs.constants.F_OK, (err) => {
            if (err) {
                console.error('File does not exist', err);
                return res.status(404).json({ error: 'File not found' });
            }

            res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
            res.setHeader('Content-Type', 'application/pdf');
            return res.download(filePath, filename, (err) => {
                if (err) {
                    console.error('Error downloading the file', err);
                    return res.status(500).json({ error: 'Error downloading the file' });
                }
                console.log('File downloaded successfully');
            });
        });

    } catch (error) {
        next(error);
    }
};

module.exports = {
    getRresume,
    uploadResume,
    downloadResume,
}