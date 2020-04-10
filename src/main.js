import {createSiteMenuTemplate} from "./components/site-menu.js";
import {createFilterTemplate} from "./components/filter.js";
import {createBoardTemplate} from "./components/board.js";
import {createBoardSortingTemplate} from "./components/sorting.js";
import {createBoardTaskListTemplate} from "./components/task-list.js";
import {createTaskEditTemplate} from "./components/task-edit.js";
import {createTaskTemplate} from "./components/task.js";
import {createLoadMoreButtonTemplate} from "./components/load-more-button.js";
import {generateTasks} from "./mock/task.js";
import {generateFilters} from "./mock/filter.js";

const TASK_COUNT = 22;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const main = document.querySelector(`.main`);
const mainControl = main.querySelector(`.main__control`);

const filters = generateFilters();
const tasks = generateTasks(TASK_COUNT);


render(mainControl, createSiteMenuTemplate());
render(main, createFilterTemplate(filters));
render(main, createBoardTemplate());

const mainBoard = main.querySelector(`.board`);

render(mainBoard, createBoardSortingTemplate());
render(mainBoard, createBoardTaskListTemplate());

const boardTaskList = mainBoard.querySelector(`.board__tasks`);

render(boardTaskList, createTaskEditTemplate(tasks[0]));

let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;

tasks.slice(1, showingTasksCount)
  .forEach((task) => render(boardTaskList, createTaskTemplate(task)));

render(mainBoard, createLoadMoreButtonTemplate());

const loadMoreButton = mainBoard.querySelector(`.load-more`);

loadMoreButton.addEventListener(`click`, () => {
  const prevTasksCount = showingTasksCount;
  showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;

  tasks.slice(prevTasksCount, showingTasksCount)
    .forEach((task) => render(boardTaskList, createTaskTemplate(task)));

  if (showingTasksCount >= tasks.length) {
    loadMoreButton.remove();
  }

});
