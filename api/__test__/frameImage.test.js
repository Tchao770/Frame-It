const request = require("supertest");
const app = require("../src/index");
const img = require("./imgBase");

describe("Unit testing /upload route", () => {
  it("should return success", async () => {
    const res = await request(app).post("/upload").send({
      title: "test-title",
      uri: img.getImageBase(),
    });
    res.then(() => expect(res.status).toEqual(200));
  });
});
