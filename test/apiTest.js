const apiApp = require("../api");
const assert = require("assert");
const request = require("supertest");
const db = require("./fakeDb");

describe("API Routes", function() {
  describe("GET students", function() {
    db.reset();

    it("should return successfully", function(done) {
      request(apiApp)
        .get("/api/students")
        .expect(200)
        .expect("Content-Type", "application/json; charset=utf-8")
        .expect(function(res) {
          var s = res.body.students;
          assert.equal(s.length, 1);
          assert.equal(s[0].id, 1);
          assert.equal(s[0].name, "test1");
          assert.equal(s[0].course, "js1");
        })
        .end(done);
    });
  });

  describe("POST students", function() {
    db.reset();

    var student = {
      student: { id: 33, name: "newguy", course: "Java" }
    };

    it("should successfully add a student", function(done) {
      request(apiApp)
        .post("/api/students")
        .send(student)
        .expect(201)
        .expect(function(res) {
          var student = res.body.student;
          assert.equal(student.id, 2);
          assert.equal(student.name, "newguy");
          assert.equal(student.course, "Java");
        })
        .end(done);
    });
  });
});
