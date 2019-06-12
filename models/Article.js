// Require mongoose
var mongoose = require("mongoose");

// Create a Schema class with mongoose
var Schema = mongoose.Schema;

// Create a NoteSchema with the Schema class
var ArticleSchema = new Schema({
    // title: a string
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    notes: [{
        type: Schema.Types.ObjectId,
        ref: "Note"
    }]
});

// Make a Note model with the NoteSchema
var Article = mongoose.model("Article", ArticleSchema);

// Export the Note model
module.exports = Article;