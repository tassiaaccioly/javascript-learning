//Meal Maker

//As a frequent diner, you love trying out new restaurants and experimenting with different foods. However, having to figure out what you want to order can be a time-consuming ordeal if the menu is big, and you want an easier way to be able to figure out what you are going to eat.

//In this project, you’ll use JavaScript to randomly create a three-course meal based on what is available on a menu. We’ll keep running it until we’re satisfied with the generated meal!

const menu = {
    _courses: {
      _appetizers: [],
      _mains: [],
      _desserts: [],
      get appetizers() {
        if(this._appetizers) {
          return `${this._appetizers}`;
        }
      },
      set appetizers(appetizerIn) {
        if(typeof appetizerIn === 'string') {
          this._appetizers = appetizerIn;
        } else {
          return `You're missing a appetizer's course`;
        }
      },
      get mains() {
        if(this._mains) {
          return `${this._mains}`;
        } else {
          return `You're missing a main's course`;
        }
      },
      set appetizers(mainIn) {
        if(typeof mainIn === 'string') {
          this._mains = mainIn
        }
      },
      get desserts() {
        if(this._desserts) {
          return `${this._desserts}`;
        }else {
          return `You're missing a dessert`;
        }
      },
      set desserts(dessertIn) {
        if(typeof appetizerIn === 'string') {
          this._desserts = dessertIn
        }
      },
    },
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
      let dish = {
        name: dishName,
        price: dishPrice
      };
        this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
      let dishes = this._courses[courseName];
      let randomIndex = Math.floor(Math.random() * dishes.length);
      return this._courses[courseName][randomIndex];
    },
    generateRandomMeal: function() {
      const appetizers = menu.getRandomDishFromCourse('appetizers');
      const mains = menu.getRandomDishFromCourse('mains');
      const desserts = menu.getRandomDishFromCourse('desserts');
      const totalPrice = appetizers.price + mains.price + desserts.price;

      return `Your meal is: ${appetizer.name} (${appetizer.price}), ${main.name} (${main.price}), ${dessert.name} (${dessert.price}). Your total price is $${totalPrice}`;
}
};


menu.addDishToCourse('_appetizers', 'Ceasar Salad', 4.25);

menu.addDishToCourse('_mains', 'Veal', 25.00);

menu.addDishToCourse('_desserts', 'Lava Cake', 7.00);

menu.addDishToCourse('_appetizers', 'Tomato Soup', 4.00);

menu.addDishToCourse('_mains', 'Cheese Fondue', 15.00);

menu.addDishToCourse('dessert', 'Brownies and Ice Cream', 10.00);


//Team Stats

//We want to create and extract information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. It’s your job to create data using the JavaScript data structures at your disposal: arrays, objects, etc.

//Once created, you can manipulate these data structures as well as gain insights from them. For example, you might want to get the total number of games your team has played, or the average score of all of their games.

const team = {
  _players: [
    {
      firstName: 'Pablo', 
      lastName: 'Sanchez', 
      age: 20
    },
    {
      firstName: 'Romulo',
      lastName: 'Gonzalez',
      age: 21
    },
    {
      firstName: 'Carlos',
      lastName: 'Ibanes',
      age: 23
    }
  ],
  _games: [
    {
      opponent: 'Barcelona',
      teamPoints: 3,
      opponetsPoints: 1
    },
    {
      opponent: 'Real Madrid',
      teamPoints: 2,
      opponetsPoints: 2
    },
    {
      opponent: 'Flamengo',
      teamPoints: 1,
      opponetsPoints: 3
    }
  ],
  get games() {
      return this._games;
  },
  get players() {
    return this._players;
  },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName,
      lastName,
      age
    }
    this.players.push(player);
  },
  addGame(opponentsName, teamPoints, opponentsPoints) {
    let game = {
      opponentsName,
      teamPoints,
      opponentsPoints
    }
    this.games.push(game);
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Botafogo', 2, 2);
team.addGame('Boca', 1, 3);
team.addGame('Juventus', 1, 3);

console.log(team.players);

console.log(team.games);