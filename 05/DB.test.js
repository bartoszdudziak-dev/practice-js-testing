import DB from "./DB";

describe("Database", () => {
  describe("Insert", () => {
    it("resolves and creates new record when data is valid", async () => {
      const database = new DB();
      const data = { id: 1, a: 10 };

      await expect(database.insert(data)).resolves.toStrictEqual(data);
      expect(database._rows).toContainEqual(data);
    });

    it("resolves and creates new record when id is not provided", async () => {
      const database = new DB();
      database._rows = [{ id: 1, a: 10 }];

      const data = { a: 20 };
      await expect(database.insert(data)).resolves.toStrictEqual({
        id: 2,
        a: 20,
      });
      expect(database._rows).toContainEqual({
        id: 2,
        a: 20,
      });
    });

    it("rejects when given id is not a number", async () => {
      const database = new DB();
      const data = { id: "ID", a: 10 };

      await expect(database.insert(data)).rejects.toEqual(
        "ID can be only number!"
      );
      expect(database._rows).not.toContainEqual(data);
    });

    it("rejects when given id is not unique", async () => {
      const database = new DB();
      database._rows = [{ id: 1, a: 10 }];
      const data = { id: 1, a: 20 };

      await expect(database.insert(data)).rejects.toEqual(
        "ID can't be duplicated!"
      );
      expect(database._rows).toEqual([{ id: 1, a: 10 }]);
    });
  });

  describe("Remove", () => {
    it("resolves and removes item", async () => {
      const database = new DB();
      database._rows = [
        { id: 1, a: 10 },
        { id: 2, a: 20 },
      ];

      await expect(database.remove(1)).resolves.toEqual("Item was remove!");
      expect(database._rows).toEqual([{ id: 2, a: 20 }]);
    });

    it("rejects when id doesn't exist", async () => {
      const database = new DB();
      database._rows = [
        { id: 1, a: 10 },
        { id: 2, a: 20 },
      ];

      await expect(database.remove(3)).rejects.toEqual("Item not exist!");
      expect(database._rows).toEqual([
        { id: 1, a: 10 },
        { id: 2, a: 20 },
      ]);
    });
  });
});
