const assert = require('assert');
const Command = require('../command.js');

describe("Command class", function() {

  it("throws error if command type is NOT passed into constructor as the first parameter", function() {
    assert.throws(
      function() {
        new Command();
      },
      {
        message: 'Command type required.'
      }
    );
  });

  it('constructor sets command type', function() {    
    class Command {
    constructor(commandType, value) {
      this.commandType = commandType;
      if (!commandType) {
        throw Error("Command type required.");
      }
      this.value = value;
    }

  };

  module.exports = Command;
  


  /*it('constructor sets a value passed in as the second argument', function() {    
    class Command {
    constructor(commandType, value) {
      this.value = value;
      if(!value) {
          throw Error("Value required");
      }
      this.commandType = commandType;

      }    
    }
  */
