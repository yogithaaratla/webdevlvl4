const todoList = require("../todo");
const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();
const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};
let dateToday = new Date();
const today = formattedDate(dateToday);
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
);
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
);
/* eslint-disable no-undef */
describe("To-dolist testing", () => {
  beforeAll(() => {
    add({
      title: "Test todo task0",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });
  test("Should add one to-do", () => {
    const tdCount = all.length;
    add({
      title: "Test todo task1",
      completed: false,
      dueDate: today,
    });
    expect(all.length).toBe(tdCount + 1);
  });
  test("Mark to-do as Complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
  test("Should retrieve overdue items", () => {
    let ovrduetodos = overdue();
    let countvar = ovrduetodos.length;
    add({
      title: "Test todo task2",
      completed: false,
      dueDate: yesterday,
    });
    ovrduetodos = overdue();
    expect(ovrduetodos.length).toBe(countvar + 1);
  });
  test("Retrieves due today items", () => {
    let dTodaytodos = dueToday();
    let countvar = dueToday_todos.length;
    add({
      title: "Test todo task3",
      completed: false,
      dueDate: today,
    });
    dTodaytodos = dueToday();
    expect(dTodaytodos.length).toBe(countvar + 1);
  });
  test("Retrieves due-later items", () => {
    let dLtodos = dueLater();
    let countvar = dueLater_todos.length;
    add({
      title: "Test todo task4",
      completed: false,
      dueDate: tomorrow,
    });
    dLtodos = dueLater();
    expect(dLtodos.length).toBe(countvar + 1);
  });
});
