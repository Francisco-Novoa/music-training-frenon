const mongoose = require('mongoose');
const env = require('node-env-file');
env(__dirname + '/.env');

(async () => {

    try {
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            connectTimeoutMS: 10000,
        };
        
        const url = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOSTNAME}/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
        
        console.log('--URL--', url)
        
        const connect = await mongoose.connect(url, options);
        
        console.log( connect ? 'Connected to Database Mongo Atlas':'');
        

    } catch (error) {
        console.log(error);
        // handleError(error);
    }

})();