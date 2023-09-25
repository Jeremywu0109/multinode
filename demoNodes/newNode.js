module.exports = function(RED){
    function test(config){
        RED.nodes.createNode(this, config);

        //start of specific code;
        var node = this;
        //listener on input
        node.on('input', function(msg){
            this.year = config.year;
            this.month = config.month;
            this.date = config.date;
            this.hours = config.hours;
            this.minutes = config.minutes;
            this.seconds = config.seconds;
            this.digits = config.digits;
            var dateStr = "";
            var prefixText = "";
            var selfdefPrefixText = "";
            var maximum = Math.pow(10,this.digits);
            var id = "";
            var random = Math.floor(Math.random() * maximum) + 1 ;
            //combine string text
            if(config.bits[0] == true && config.bits[1] == false){
                dateStr = ""+ this.year + this.month + this.date + this.hours + this.minutes + this.seconds;
            }
            else if(config.bits[0] == true && config.bits[1] == true){
                dateStr = ""+ this.year + this.month + this.date;
            }
            else if(config.bits[0] == false){
                dateStr = "";
            }
    
            if(config.bits[2] == true){
                prefixText = config.selfdefPrefixText;
            }
            id = prefixText + dateStr + random;

            //sending message
            msg.payload = ""+id; //id;
            node.send(msg);
            //end of send
        });
    }
    RED.nodes.registerType("newNode",test);
}