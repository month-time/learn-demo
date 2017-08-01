(function($) {
  "use strict";
  function InputNumber(element) {
    this.$el = $(element);
    this.$input = this.$el.find("[type=text]");
    this.$inc = this.$el.find("[data-increment]");
    this.$dec = this.$el.find("[data-decrement]");
    this.min = this.$el.attr("min") || false;
    this.max = this.$el.attr("max") || false;
    this.step=0.01;
    this.current="$";  //在这里改前戳
    this.init();
  }
  InputNumber.prototype = {
    init: function() {
      this.$dec.on("click", $.proxy(this.decrement, this));
      this.$inc.on("click", $.proxy(this.increment, this));
    },      
    increment: function(e) {
      var value = this.$input[0].value;
        if(value.substr(0,1)==this.current){
            value=Number(value.substr(1,value.length));
        }      
      value=Number(value)+this.step;
      value = Math.round(value * 100) / 100;
      console.log(value, this.max);
      if (!this.max || value <= this.max) {
        this.$input[0].value =this.current+(value++);
      }
    },
    decrement: function(e) {
      var value = this.$input[0].value;
        if(value.substr(0,1)==this.current){
            value=Number(value.substr(1,value.length));
        }      
      value=Number(value)-this.step;
      value = Math.round(value * 100) / 100;
      if (!this.min || value >= this.min) {
        this.$input[0].value =this.current+value;
      }
    }
  };
  $.fn.inputNumber = function(option) {
    return this.each(function() {
      var $this = $(this),
        data = $this.data("inputNumber");
      if (!data) {
        $this.data("inputNumber", (data = new InputNumber(this)));
      }
    });
  };
  $.fn.inputNumber.Constructor = InputNumber;
})(jQuery);
$(".input-number").inputNumber();