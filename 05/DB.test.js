import DB from "./DB";

describe("Database", () => {
  describe("Insert", () => {
    it("resolves and creates new record when data is valid", async () => {
      const database = new DB();
      const data = { id: 1, a: 3, b: 4 };

      await expect(database.insert(data)).resolves.toStrictEqual(data);
      expect(database._rows).toContainEqual(data);
    });

    it("resolves and creates new record when id is not provided", async () => {
      const database = new DB();
      database._rows = [{ id: 1 }];

      const data = { a: 3, b: 4 };
      await expect(database.insert(data)).resolves.toStrictEqual({
        ...data,
        id: 2,
      });
      expect(database._rows).toContainEqual({
        ...data,
        id: 2,
      });
    });

    it("rejects when given id is not a number", async () => {
      const database = new DB();
      const data = { id: "ID", a: 3, b: 4 };

      await expect(database.insert(data)).rejects.toEqual(
        "ID can be only number!"
      );
      expect(database._rows).not.toContainEqual(data);
    });

    it("rejects when given id is not unique", async () => {
      const database = new DB();
      database._rows = [{ id: 1 }];
      const data = { id: 1, a: 3, b: 4 };

      await expect(database.insert(data)).rejects.toEqual(
        "ID can't be duplicated!"
      );
      expect(database._rows).not.toContainEqual(data);
    });
  });
});
