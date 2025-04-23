const moongose = require('mongoose')

const productSchema = moongose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  price: {
    type: Number,
    required: [true, "price is required"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    name: {
      type: String,
      enum: {
        values: ["benz", "BMW"],
        message: "{VALUE} is not supported",
      },
    },

    // enum: ['benz', 'BMW']
  },
});

module.exports = moongose.model('Product', productSchema)