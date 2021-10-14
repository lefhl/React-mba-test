import { makeAutoObservable } from "mobx";

class Store {
  constructor() {
    this._courses = [];
    makeAutoObservable(this);
  }

  setCourses(courses) {
    this._courses = courses;
  }

  get courses() {
    return this._courses;
  }
}

export default new Store();
