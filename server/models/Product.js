const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: String,
    description: String,
    image: String,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    brand: String,
    price: Number,
    salePrice: Number,
    totalStock: Number,
    averageReview: Number,
},
    { timestamps: true }
);

// * populate
productSchema.pre(/^find/, function (next) {
    this.populate({
        path: "category",
        select: 'title'
    });
    next();
});

module.exports = mongoose.model("Product", productSchema);