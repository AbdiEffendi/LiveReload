// Generated by IcedCoffeeScript 1.3.1c
(function() {
  var Compiler, MessageParser;

  MessageParser = require('./tool-output').MessageParser;

  Compiler = (function() {

    function Compiler(plugin, manifest) {
      this.plugin = plugin;
      this.manifest = manifest;
      this.name = this.manifest.Name;
      this.parser = new MessageParser(this.manifest);
    }

    return Compiler;

  })();

  exports.Compiler = Compiler;

}).call(this);
