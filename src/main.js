import {createSiteMenuTemplate} from "./components/site-menu.js";
import {createFilterTemplate} from "./components/filter.js";
import {createBoardTemplate} from "./components/board.js";
import {createBoardSortingTemplate} from "./components/sorting.js";
import {createBoardTaskListTemplate} from "./components/task-list.js";
import {createTaskEditTemplate} from "./components/task-edit.js";
import {createTaskTemplate} from "./components/task.js";
import {createLoadMoreButtonTemplate} from "./components/load-more-button.js";

const TASK_COUNT = 3;

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const main = document.querySelector(`.main`);
const mainControl = main.querySelector(`.main__control`);

render(mainControl, createSiteMenuTemplate());
render(main, createFilterTemplate());
render(main, createBoardTemplate());

const mainBoard = main.querySelector(`.board`);

render(mainBoard, createBoardSortingTemplate());
render(mainBoard, createBoardTaskListTemplate());

const boardTaskList = mainBoard.querySelector(`.board__tasks`);

render(boardTaskList, createTaskEditTemplate());

for (let i = 0; i < TASK_COUNT; i++) {
  render(boardTaskList, createTaskTemplate());
}

render(mainBoard, createLoadMoreButtonTemplate());
