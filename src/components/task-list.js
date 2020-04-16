import {createElement} from "../utils.js";

const createBoardTaskListTemplate = () => `<div class="board__tasks"></div>`;

export default class TaskList {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createBoardTaskListTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
