function Pet(name) {
    this.name = name;
    this.age = 0
    this.hunger = 0
    this.fitness = 10
    this.growUp = function() {
        this.age +=1;
        this.hunger +=5;
        this.fitness -=3;
        }
        Pet.prototype.walk = function() {
                this.fitness +=4;
        }
        Pet.prototype.walk = function() {
            if ((this.fitness + 4) <= 10 ) {
                this.fitness += 4;
            } else {
                this.fitness = 10;
            }
        }
        Pet.prototype.feed = function() {
            this.hunger -= 3;
        }
        Pet.prototype.feed = function() {
            if((this.hunger) >=3) {
                this.hunger -=3 
            
            } else {
                this.hunger = 0;
            }
        }
        Pet.prototype.checkUp = function() {
            if (!this.isAlive) {
                throw new Error('Your pet is no longer alive :(');
            }
       if (this.fitness <=3 && this.hunger >= 5) {
        return 'I am hungry AND I need a walk';
       } else if (this.hunger >= 5) {
        return 'I am hungry';
       } else if(this.fitness <=3) {
        return 'I need a walk';
       } else {
        return 'I feel great!'
       }
       };
      
       }
         Pet.prototype = {
            get isAlive () {
                return this.age <30 && this.hunger <10
                && this.fitness >0 
            }
         }
    
    


   
module.exports = Pet;
