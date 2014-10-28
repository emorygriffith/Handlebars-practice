(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['songs'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "    I love the song "
    + escapeExpression(((helper = (helper = helpers.song || (depth0 != null ? depth0.song : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"song","hash":{},"data":data}) : helper)))
    + " by "
    + escapeExpression(((helper = (helper = helpers.band || (depth0 != null ? depth0.band : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"band","hash":{},"data":data}) : helper)))
    + "\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.songs : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
})();
var data = {
  bands: [

  { song: 'My fav song', band: 'cool band name' },
  { song: 'My fav song2', band: 'cool band name2' }
  ]
};

var rendered = Handlebars.templates['songs'];


$('.songs').append(rendered(data));
