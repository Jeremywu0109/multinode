module.exports = function(RED){
    function test(config){
        RED.nodes.createNode(this, config);
            var content = this.context();
            var text = config.text;
            var node = this;
            this.on('input', function(msg){
                var outMsg = {payload: "test!!"};
                node.send(outMsg);
            });
    }
    RED.nodes.registerType("test Node",test);
};