const {Schema, model} = require('mongoose');

const itemSchema = new Schema(
    {
       item_id: {
        type: String,
        required: 'Item ID required',
        trim: true
       },
       item_desc: {
        type: String,
        required: 'Description is required',
        trim: true,

       },
       location: {
        type: String,
        trim: true,
       },
       quantity1_name: {
        type: String,
        required: true,
        trim: true
       },
       quantity_lvl_1: {
        type: Number,
        required: true

       },
       quantity2_name: {
        type: String,
        required: true,
        trim: true
       },
       quantity_lvl_2: {
        type: Number,
        required: true
       }, 
       quantity3_name: {
        type: String,
        required: true,
        trim: true
       },
       quantity_lvl_3: {
        type: Number,
        required: true
       },
       scans: [{
        type: Schema.Types.ObjectId,
        ref: 'Barcode'
       }]  
    },
);

const Item = model('Item', itemSchema);

module.exports = Item;