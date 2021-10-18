const postNotification  = require('./utils');
function notificationHandler (req, res) {
    const data = req.body;
    postNotification(data);
    return res.status(200).json({ success: true, message: 'Notification Sent'});
}

module.exports = notificationHandler;
