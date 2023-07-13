const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    title: String, // String is shorthand for {type: String}
    description: String,
    price: {type:Number,min: [200, 'Too low price'],required:[true,'Price required']},
    discountPercentage:Number,
    rating:Number,
    category:String,
    thumbnail:String,

    date: { type: Date, default: Date.now },
   
  });
  
   exports.Item=mongoose.model('Item',productSchema)