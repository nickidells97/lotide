const assert = require('chai').assert;
const tail = require('../tail');

describe("#head", () => {
  it("returns Lighthouse, Labs for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs", ]);
  });
  it("returns mad, happy, scared for ['sad', 'mad', 'happy', 'scared']", () => {
    assert.deepEqual(tail(["sad", "mad", "happy", "scared"]), ["mad", "happy", "scared"]);
  });
  it("returns ' ' for ['banana']", () => {
    assert.deepEqual(tail(["banana"]), []);
  });
});
