"use strict";
/* global describe, it */

const assert = require("assert");
const pensador = require("../lib/index");

describe("pensador", () => {
  describe("#collection", () => {
    it("should return object", async () => {
      let result = await pensador.getFromCollection("test");
      assert.ok(result.message && result.author, "Not valid object");
    });
  });

  describe("#amor", () => {
    it("should return object", async () => {
      let result = await pensador.getFromAmor();
      assert.ok(result.message && result.author, "Not valid object");
    });
  });

  describe("#motivacionais", () => {
    it("should return object", async () => {
      let result = await pensador.getFromMotivacionais();
      assert.ok(result.message && result.author, "Not valid object");
    });
  });

  describe("#soltas", () => {
    it("should return object", async () => {
      let result = await pensador.getFromSoltas();
      assert.ok(result.message && result.author, "Not valid object");
    });
  });
});
