const mongoose = require('mongoose');
const URI = 'mongodb+srv://deepFSD:Ronaldo%402002@cluster0.9bgfcuv.mongodb.net/KumarTiffin?retryWrites=true&w=majority';

const mongoDB = async () => {
    try {
        await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

        console.log('Connected to MongoDB');

        fetchData();
    } catch (error) {
        console.error('Error connecting to MongoDB: ', error);
    }
};

async function fetchData() {
    try {
        const fetched_data = mongoose.connection.db.collection("food_items");
        const data = await fetched_data.find({}).toArray();
        // console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

module.exports = mongoDB;