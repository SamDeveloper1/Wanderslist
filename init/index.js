const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderslist";
main()
.then(()=>{
   console.log("connected to db");
}).catch((err)=>{
    console.log(err);
})
async function main(){
   await mongoose.connect(MONGO_URL);
};
const initDB =  ()=>{
     Listing.deleteMany({}).then(()=>{console.log("initial data deleted")});
     initData.data = initData.data.map((obj)=>({...obj, owner: "68935ac1f6c911bc573b59e2"}));
     Listing.insertMany(initData.data)
     .then(()=>{
        console.log("data was initialized");
     }).catch((err)=>{
        console.log(err);
     })

    
}
initDB();