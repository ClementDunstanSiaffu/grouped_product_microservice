

import mongoose from 'mongoose';

const groupedProductSchema = new mongoose.Schema({
    title:{type:String},
    fixedId:{type:String},
    products:[
        {
            id:{type:String},
            productImage:{type:String},
            productName:{type:String},
            productDescription:{type:String},
            productPrice:{type:String}
        }
    ]
});

mongoose.model("GROUPED_PRODUCTS",groupedProductSchema);