const mongoose = require('mongoose');
// require('dotenv').config();

const ConnectDb = async () => {
    try {
        // const con = await mongoose.connect('mongodb://localhost:27017/test_db');
        const con = await mongoose.connect('mongodb+srv://taskadmin:6x8fQJ3GSQrupw2M@cluster0.ocfollq.mongodb.net/ServiceDb?retryWrites=true&w=majority&appName=Cluster0');
        console.log(`mongo : ${con.connection.host}`.cyan.underline); // Access host through connection object
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

module.exports = ConnectDb;