const yargs = require("yargs");

const app= (yargsObj) =>{
    if (yargsObj.add){
     const Movie = new Movie(yargsObj.title, yargsObj.actor);
     Movie.add();
     console.log(movie.list());
    }else{
        console.log("incorrect command")
    }
};

app(yargs.argv);