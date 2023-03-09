const {Schema, model} = require('mongoose');

const barcodeSchema = new Schema(
    {
       barcode: {
        type: String,
        required: true,
        unique: true
       } 
    }
);

const Barcode = model('Barcode', barcodeSchema);

module.exports = Barcode;