class EventManagerr {
  static #events = [];
  static #perGain = 0.3;
  static #totalGain = 0;
  constructor() {}
  createEvent({ name, place, ...data }) {
    try {
      if (!name || !place) {
        throw new Error("please insert name and place");
        //activa el catch(manejador de errores)
      }
      const event = {
        id:
          EventManagerr.#events.length === 0
            ? 1
            : EventManagerr.#events[EventManagerr.#events.length - 1].id + 1,
        name,
        place,
        price: data.price || 10,
        capacity: data.capacity || 50,
        date: data.date || new Date(),
      };
      EventManagerr.#events.push(event);
      return event.id;
    } catch (error) {
      //new error genera un objeto error con mas propiedades
      //el msj configurado en la linea 9 esta en la propiedad message
      return error.message;
    }
  }
  readEvents() {
    try {
      if (EventManagerr.#events.length === 0) {
        throw new Error("not found events");
      } else {
        return EventManagerr.#events;
      }
    } catch (error) {
      return error.message;
    }
  }
  readOneEvent(id) {
    try {
      let one = EventManagerr.#events.find((each) => each.id === Number(id));
      if (one) {
        return one;
      } else {
        throw new Error("not found event with id=" + id);
      }
    } catch (error) {
      return error.message;
    }
  }
  soldTicket(quantity, id) {
   
    try {
      if (!(quantity>0)) {
      throw new Error("insert valid quantity")
      }else{  const one = this.readOneEvent(id);
        if ((typeof one === "object") && quantity>one.capacity) {
          throw new Error ("no more capacity")  
        }else{one.capacity = one.capacity - quantity;
        EventManagerr.#totalGain =
          EventManagerr.#totalGain + EventManagerr.#perGain * quantity * one.price;
        return one.capacity;
      }
        
      }
     } catch (error) {
        return error.message
    }
  }
}
const events = new EventManagerr();
console.log(events.readEvents());
console.log(events.createEvent({ name: "hp1", place: "showcase" }));
console.log(events.createEvent({ place: "showcase" }));
console.log(events.createEvent({ name: "hp2" }));
console.log(events.createEvent({ name: "hp3", place: "showcase" }));
//console.log(events.readEvents());

console.log(events.readOneEvent(1));
console.log(events.readOneEvent(10));
console.log(events.soldTicket(-2,1));
console.log(events.soldTicket(100,2));
console.log(events.soldTicket(10,20));
