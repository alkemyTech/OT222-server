const app = require("../app");
const request = require("supertest")(app);
const { sequelize, activities } = require("../models");
const { describe, it } = require("@jest/globals");
let token;

beforeAll(async () => {
  token = await request.post("/auth/login").send({
    email: "test@test.com",
    password: "123456",
  });
  token = token.body.user;
});

describe("activities", () => {
  describe("GET", () => {
    it("should return an array", async () => {
      const response = await request
        .get("/activities")
        .set("Authorization", `Bearer ${token}`);
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });

    it("should return an array with activities", async () => {
      const response = await request
        .get("/activities")
        .set("Authorization", `Bearer ${token}`);
      expect(response.status).toBe(200);
      response.body.forEach((e) => {
        expect(typeof e.id).toBe("number");
        expect(typeof e.name).toBe("string");
        expect(typeof e.image).toBe("string");
        expect(typeof e.content).toBe("string");
        expect(new Date(e.createdAt) instanceof Date).toBeTruthy();
        expect(new Date(e.updatedAt) instanceof Date).toBeTruthy();
      });
    });
    it("should return a 401 error if token is invalid", async () => {
      request
        .get("/activities")
        .then((response) => expect(response.status).toBe(401));

      request
        .get("/activities")
        .set("Authorization", "Bearer 123")
        .then((response) => expect(response.status).toBe(401));

      request
        .post("/auth/login")
        .send({
          email: "test5@test.com",
          password: "123456",
        })
        .then((res) => {
          request
            .get("/activities")
            .set("Authorization", `Bearer ${res.body.user}`)
            .send()
            .then((response) => expect(response.status).toBe(401));
        });
    });
  });
  describe("POST", () => {
    it("should create a activity", async () => {
      const response = await request
        .post("/activities")
        .set("Authorization", `Bearer ${token}`)
        .send({
          name: "Teste",
          image: "awdawdwawad",
          content: "awlñdkñawkdñlawkdñlawd",
        });

      expect(response.status).toBe(201);
      const activity = await activities.findByPk(response.body.id);
      expect(activity.name).toBe("Teste");
      expect(activity.image).toBe("awdawdwawad");
      expect(activity.content).toBe("awlñdkñawkdñlawkdñlawd");
    });
  });
  describe("PUT /activities/:id", () => {
    it("should update a activity", async () => {
      const response = await request
        .put("/activities/1")
        .set("Authorization", `Bearer ${token}`)
        .send({
          name: "Testing",
          image: "http://teste.com.ar",
          content: "aiwjdlawijdliawawd",
        });
      expect(response.status).toBe(200);
      const activity = await activities.findByPk(1);
      expect(activity.name).toBe("Testing");
      expect(activity.image).toBe("http://teste.com.ar");
      expect(activity.content).toBe("aiwjdlawijdliawawd");
    });

    it("should return a 400 error", async () => {
      const response = await request
        .put("/activities/1")
        .set("Authorization", `Bearer ${token}`)
        .send({});
      expect(response.status).toBe(400);
    });

    it("should return a 401 error if token is invalid", async () => {
      request
        .put("/activities/1")
        .send({
          name: "Teste",
          image: "http://teste.com",
        })
        .then((response) => expect(response.status).toBe(401));

      request
        .put("/activities/1")
        .set("Authorization", "Bearer 123")
        .send({
          name: "Teste",
          image: "http://teste.com",
        })
        .then((response) => expect(response.status).toBe(401));

      const token = await request
        .post("/auth/login")
        .send({
          email: "test5@test.com",
          password: "123456",
        })
        .then((res) => {
          request
            .put("/activities/1")
            .set("Authorization", `Bearer ${res.body.user}`)
            .then((response) => expect(response.status).toBe(401));
        });
    });
  });
  describe("DELETE /activities/:id", () => {
    it("should delete an activity", async () => {
      const response = await request
        .delete("/activities/1")
        .set("Authorization", `Bearer ${token}`);
      expect(response.status).toBe(200);
      const activity = await activities.findByPk(1);
      expect(activity).toBeNull();
    });

    it("should return a 401 error if token is invalid", async () => {
      request
        .delete("/activities/1")
        .send({
          name: "Teste",
          image: "http://teste.com",
        })
        .then((response) => expect(response.status).toBe(401));

      request
        .delete("/activities/1")
        .set("Authorization", "Bearer 123")
        .send({
          name: "Teste",
          image: "http://teste.com",
        })
        .then((response) => expect(response.status).toBe(401));

      request
        .post("/auth/login")
        .send({
          email: "test5@test.com",
          password: "123456",
        })
        .then((res) => {
          request
            .delete("/activities/1")
            .set("Authorization", `Bearer ${res.body.user}`)
            .then((response) => expect(response.status).toBe(401));
        });
    });
  });
});

afterAll(() => {
  sequelize.close();
});
