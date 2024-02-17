const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb+srv://amnay:itshackingtime24!@cluster0.0ifxvmk.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    const database1 = client.db('HealthManagement');
    const database2 = client.db('UserManagement');
    const database3 = client.db('PetManagement');

    const healthData = database1.collection('healthData');
    const userData = database2.collection('userData');
    const petData = database3.collection('petData');

    // Query 
    const healthItem = await healthData.findOne({});
    const userItem = await userData.findOne({});
    const petItem = await petData.findOne({});

    console.log(healthItem);
    console.log(userItem);
    console.log(petItem);

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);