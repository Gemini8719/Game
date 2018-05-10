'use strict';

class Vector {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

plus(vector) {
    if (!(vector instanceof Vector)) {
    	throw new Error('Можно прибавлять к вектору только вектор типа Vector!');
    } 
    return new Vector(vector.x + this.x, vector.y + this.y);
}

  times(multiplier = 1) {
    return new Vector(this.x * multiplier, this.y * multiplier);
  }
}

class Actor {
  constructor(pos = new Vector(0, 0), size = new Vector(1, 1), speed = new Vector(0, 0)) {
    if (!(pos instanceof Vector)) {
      throw new Error('Ошибка. Неверный тип объекта!');
    }
    if (!(size instanceof Vector)) {
      throw new Error('Ошибка. Неверный тип объекта!');
    }
    if (!(speed instanceof Vector)) {
      throw new Error('Ошибка. Неверный тип объекта!');
    }
    this.pos = pos;
    this.size = size;
    this.speed = speed;
  }
	
act() {
  }
	
get left() {
    return this.pos.x;
  }

get top() {
    return this.pos.y;
  }

get right() {
    return this.pos.x + this.size.x;
  }

get bottom() {
    return this.pos.y + this.size.y;
  }

get type() {
    return 'actor';
  }	
	
  isIntersect(actor) {
    if (!(actor instanceof Actor)) {
      throw new Error('Ошибка. Неверный тип объекта!');
    }
    if (actor === this) {
      return false;
    }
    if (this.left >= actor.right) {
      return false;
    }
    if (this.right <= actor.left) {
      return false;
    }
    if (this.bottom <= actor.top) {
      return false;
    }
    if (this.top >= actor.bottom) {
      return false;
    }
    return true;
  }
}