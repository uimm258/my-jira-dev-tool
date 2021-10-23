export const taskTypes = [
  {
    name: "task",
  },
  {
    name: "bug",
  },
];

export const tags = [
  {
    name: "Init",
  },
  {
    name: "Mid",
  },
  {
    name: "End",
  },
];

export const epics = [
  {
    name: "Task1",
    start: new Date("2020-12-10").getTime(),
    end: new Date("2021-01-11").getTime()
  }, 
  {
    name: "Task2",
    start: new Date("2021-01-12").getTime(),
    end: new Date("2021-02-14").getTime()
  }, 
  {
    name: "Task3",
    start: new Date("2021-01-12").getTime(),
    end: new Date("2021-02-14").getTime()
  }
];

export const kanbans = [
  {
    name: "To Do"
  }, 
  {
    name: "In Progress"
  }, 
  {
    name: "Done"
  }
];

export const users = [
  {
    name: "Patrick",
    organization: "HR/Acc"
  }, 
  {
    name: "Adam",
    organization: "HR/Acc"
  }, 
  {
    name: "JR",
    organization: "CS"
  }, 
  {
    name: "David",
    organization: "IT"
  }
];

export const projects = [
  {
    name: "HR",
    personId: 1,
    organization: "HR/Acc Team",
    created: 1604989757139
  }
];

export const tasks = [
  {
    name: "Task1",
    tags: [1, 2],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    note: "This is the first important note"
  }, 
  {
    name: "Task2",
    tags: [2],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    note: "This is the second important note"
  }, 
  {
    name: "Task3",
    tags: [1],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    note: ""
  }, 
  {
    name: "Task4",
    tags: [1],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    note: ""
  }, 
  {
    name: "Task5",
    tags: [1],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    note: ""
  }, 
  {
    name: "Task5",
    tags: [1],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    note: ""
  }, 
  {
    name: "Task6",
    tags: [1],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    note: ""
  }
];
