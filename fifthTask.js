class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    static getPG(movies) {
      return movies.filter(movie => movie.rating === "PG");
    }
  }
  
  // Creating an instance of Movie
  const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
  
  // Example array of Movie instances
  const moviesArray = [
    new Movie("Movie 1", "Studio 1", "PG"),
    new Movie("Movie 2", "Studio 2", "R"),
    new Movie("Movie 3", "Studio 3", "PG-13"),
    new Movie("Movie 4", "Studio 4", "PG"),
  ];
  
  // Using the getPG method to filter movies with a rating of "PG"
  const pgMoviesArray = Movie.getPG(moviesArray);
  
  console.log("Instance of Casino Royale:", casinoRoyale);
  console.log("Movies with a rating of 'PG':", pgMoviesArray);
  
  //Write a “person” class to hold all the details.
  class Person {
  constructor(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }
  
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  
  increaseAge() {
    this.age++;
  }
  
  toString() {
    return `${this.getFullName()}, ${this.age} years old, ${this.gender}`;
  }
  }
  
  // Example usage:
  const johnDoe = new Person('John', 'Doe', 25, 'Male');
  console.log(johnDoe.toString()); // John Doe, 25 years old, Male
  
  johnDoe.increaseAge();
  console.log(johnDoe.toString()); // John Doe, 26 years old, Male
  
  //write a class to calculate the uber price.
  class TaxiCalculator {
  constructor(baseFare, costPerKm, costPerMinute) {
    this.baseFare = baseFare;
    this.costPerKm = costPerKm;
    this.costPerMinute = costPerMinute;
  }
  
  calculateFare(distance, duration) {
    const distanceCost = distance * this.costPerKm;
    const timeCost = duration * this.costPerMinute;
    const totalFare = this.baseFare + distanceCost + timeCost;
  
    return totalFare;
  }
  }
  
  // Example usage
  const myTaxiCalculator = new TaxiCalculator(5, 2, 0.5); // Base fare: $5, $2 per km, $0.5 per minute
  
  const distance = 10; // in kilometers
  const duration = 15; // in minutes
  
  const fare = myTaxiCalculator.calculateFare(distance, duration);
  console.log(`The taxi fare is $${fare}`);
  