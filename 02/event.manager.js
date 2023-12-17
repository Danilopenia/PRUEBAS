class EventManager {
  //propiedad estatica o de la clase
  static events = [];
  // # para definir propiedades privadas
  static #perGain = 0.3;
  static #totalGain = 0;
  constructor(data) {
    //AUTOINCREMENTAL
    this.id =
      EventManager.events.length === 0
        ? 1
        : EventManager.events[EventManager.events.length - 1].id + 1;
    this.name = data.name;
    this.place = data.place;
    this.price = data.price || 10;
    this.capacity = data.capacity || 50;
    this.date = data.date || new Date();
    EventManager.events.push(this);
  }
}

const harryPotter1 = new EventManager({ name: "harry1", place: "showcase" });
const harryPotter2 = new EventManager({ name: "harry2", place: "showcase" });
const harryPotter3 = new EventManager({ name: "harry3", place: "showcase" });
const harryPotter4 = new EventManager({ name: "harry4", place: "showcase" });

console.log(EventManager.events);
