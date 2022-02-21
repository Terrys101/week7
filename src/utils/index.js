const { title, listenerCount } = require("process");

const movieArr =[];

class Movie {
    constructor (title, actor = "you dont know who's in this"){
    this.title = title;
    this.actor = actor;

}

add(){
    movieArr.push(this);
}

list(){
    return movieArr;
}

}

module.exports = Movie;