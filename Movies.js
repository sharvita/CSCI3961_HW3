var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

mongoose.connect(process.env.DB, { useNewUrlParser: true } );
mongoose.set('useCreateIndex', true);

// user schema
var movieSchema = new Schema({
    Title : {type: String, required : true},
    Year : {type: Date, required : true},
    Genre: {type:String, required:true, enum:["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Horror", "Mystery", "Thriller", "Western"]},
    Actors: {type:[{ActorName:String, CharacterName:String}], required:true}
});

var Movie = mongoose.model('Movies', movieSchema);
module.exports = Movie;