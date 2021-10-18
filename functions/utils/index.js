let admin = require("firebase-admin");

let serviceAccount = require("../roadry-cloud-firebase-adminsdk-kh4fw-b99c44d020.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://roadry-cloud.firebaseio.com"
});

// ----------------------- DATABASE OPERATIONS -----------------------------------------

/**
 * 
 * @param {Object } data {
 *      address,
 *      accident_id,
 *      read,
 *      victim_phone_number,
 *      warden_user_id
 *  }
 */
const postNotification = (data) => {
    const database = admin.database();
    database.ref()
        .push()
        .set({
            address: data.address,
            accident_id: data.accident_id,
            read: data.read,
            victim_phone_number: data.victim_phone_number,
            warden_user_id: data.warden_user_id,
            description: data.description,
            severity: data.severity,
            place_id: data.place_id
        });
}
module.exports = postNotification;

