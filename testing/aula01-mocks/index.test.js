const { error } = require("./src/constants");
const File = require("./src/file");
const { rejects, deepStrictEqual } = require("assert");

(async () => {
  {
    const filePath = "./mocks/invalidHeader-invalid.csv";
    const rejection = new Error(error.FILE_FIELDS_ERROR_MESSAGE);
    const result = File.csvToJson(filePath);
    await rejects(result, rejection);
  }

  {
    const filePath = "./mocks/emptyFile-invalid.csv";
    const rejection = new Error(error.FILE_LENGHT_ERROR_MESSAGE);
    const result = File.csvToJson(filePath);
    await rejects(result, rejection);
  }

  {
    const filePath = "./mocks/fourItems-invalid.csv";
    const rejection = new Error(error.FILE_LENGHT_ERROR_MESSAGE);
    const result = File.csvToJson(filePath);
    await rejects(result, rejection);
  }

  {
    const filePath = "./mocks/threeItems-valid.csv";
    const result = await File.csvToJson(filePath);
    const expected = [
      {
        name: "Felipe",
        id: 1,
        profession: "Dev",
        birthday: 1998,
      },
      {
        name: "Godoi",
        id: 2,
        profession: "Developer",
        birthday: 1999,
      },
      {
        name: "carvalho",
        id: 3,
        profession: "front Dev",
        birthday: 2000,
      },
    ];
    deepStrictEqual(JSON.stringify(result), JSON.stringify(expected));
  }
})();
