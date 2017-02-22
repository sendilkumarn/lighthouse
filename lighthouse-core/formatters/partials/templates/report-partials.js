this["report"] = this["report"] || {};
this["report"]["partials"] = this["report"]["partials"] || {};
this["report"]["partials"]["accessibility"] = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.nodes : depth0)) != null ? stack1.length : stack1), depth0))
    + " elements fail this test";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.nodes : depth0)) != null ? stack1.length : stack1), depth0))
    + " element failed this test";
},"5":function(container,depth0,helpers,partials,data) {
    return "    <li class=\"subitem__detail\"><code>"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.target : depth0), depth0))
    + "</code></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<details class=\"subitem__details\">\n  <summary class=\"subitem__detail\">"
    + ((stack1 = helpers["if"].call(alias1,(helpers.gt || (depth0 && depth0.gt) || helpers.helperMissing).call(alias1,((stack1 = (depth0 != null ? depth0.nodes : depth0)) != null ? stack1.length : stack1),1,{"name":"gt","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</summary>\n  <ul class=\"subitem__details\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.nodes : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </ul>\n</details>\n";
},"useData":true};
this["report"]["partials"]["cards"] = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <div class=\"subitem__detail scorecard\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.snippet : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n      <div class=\"scorecard-title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</div>\n      <div class=\"scorecard-value\">"
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "</div>\n    </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "title=\""
    + container.escapeExpression(((helper = (helper = helpers.snippet || (depth0 != null ? depth0.snippet : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"snippet","hash":{},"data":data}) : helper)))
    + "\"";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul class=\"subitem__details cards__container\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n";
},"useData":true};
this["report"]["partials"]["critical-request-chains"] = {"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=helpers.blockHelperMissing, buffer = 
  "  <div class=\"cnc-node\" title=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.node : depth0)) != null ? stack1.request : stack1)) != null ? stack1.url : stack1), depth0))
    + "\">\n    <span class=\"cnc-node__tree-marker\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.treeMarkers : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 1, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "");
  stack1 = ((helper = (helper = helpers.isLastChild || (depth0 != null ? depth0.isLastChild : depth0)) != null ? helper : alias2),(options={"name":"isLastChild","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.program(9, data, 0, blockParams, depths),"data":data,"blockParams":blockParams}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.isLastChild) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = ((helper = (helper = helpers.hasChildren || (depth0 != null ? depth0.hasChildren : depth0)) != null ? helper : alias2),(options={"name":"hasChildren","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.program(13, data, 0, blockParams, depths),"data":data,"blockParams":blockParams}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.hasChildren) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </span>\n    <span class=\"cnc-node__tree-value\">\n"
    + ((stack1 = (helpers.parseURL || (depth0 && depth0.parseURL) || alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.node : depth0)) != null ? stack1.request : stack1)) != null ? stack1.url : stack1),{"name":"parseURL","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.hasChildren : depth0),{"name":"unless","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "    </span>\n  </div>\n\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.node : depth0)) != null ? stack1.children : stack1),{"name":"each","hash":{},"fn":container.program(19, data, 1, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1;

  return ((stack1 = helpers.blockHelperMissing.call(depth0,container.lambda(blockParams[0][0], depth0),{"name":"separator","hash":{},"fn":container.program(3, data, 0, blockParams),"inverse":container.program(5, data, 0, blockParams),"data":data,"blockParams":blockParams})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    return "      <span class=\"tree-marker vert\"></span>\n      <span class=\"tree-marker space\"></span>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "      <span class=\"tree-marker space\"></span>\n      <span class=\"tree-marker space\"></span>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "      <span class=\"tree-marker up-right\"></span>\n      <span class=\"tree-marker right\"></span>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "      <span class=\"tree-marker vert-right\"></span>\n      <span class=\"tree-marker right\"></span>\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "      <span class=\"tree-marker horiz-down\"></span>\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "      <span class=\"tree-marker right\"></span>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "        <span class=\"cnc-node__tree-file\">"
    + alias2(alias1((depth0 != null ? depth0.file : depth0), depth0))
    + "</span>\n        <span class=\"cnc-node__tree-hostname\">("
    + alias2(alias1((depth0 != null ? depth0.hostname : depth0), depth0))
    + ")</span>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "        - <span class=\"cnc-node__chain-duration\">"
    + alias3((helpers.chainDuration || (depth0 && depth0.chainDuration) || alias2).call(alias1,(depth0 != null ? depth0.startTime : depth0),((stack1 = ((stack1 = (depth0 != null ? depth0.node : depth0)) != null ? stack1.request : stack1)) != null ? stack1.endTime : stack1),{"name":"chainDuration","hash":{},"data":data}))
    + "ms</span>,\n          <span class=\"cnc-node__chain-duration\">"
    + alias3((helpers.formatTransferSize || (depth0 && depth0.formatTransferSize) || alias2).call(alias1,(depth0 != null ? depth0.transferSize : depth0),{"name":"formatTransferSize","hash":{},"data":data}))
    + "KB</span>\n";
},"19":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.createContextFor || (depth0 && depth0.createContextFor) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (depths[1] != null ? depths[1].node : depths[1])) != null ? stack1.children : stack1),(data && data.key),(depths[1] != null ? depths[1].treeMarkers : depths[1]),(depths[1] != null ? depths[1].isLastChild : depths[1]),(depths[1] != null ? depths[1].startTime : depths[1]),(depths[1] != null ? depths[1].transferSize : depths[1]),{"name":"createContextFor","hash":{},"fn":container.program(20, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"20":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.writeNode,depth0,{"name":"writeNode","data":data,"indent":"      ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"22":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.tree : depth0),{"name":"each","hash":{},"fn":container.program(23, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"23":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.createContextFor || (depth0 && depth0.createContextFor) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depths[1] != null ? depths[1].tree : depths[1]),(data && data.key),undefined,undefined,(depths[1] != null ? depths[1].startTime : depths[1]),(depths[1] != null ? depths[1].transferSize : depths[1]),{"name":"createContextFor","hash":{},"fn":container.program(24, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"24":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.writeNode,depth0,{"name":"writeNode","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "\n<ul class=\"subitem__details\">\n  <li class=\"subitem__detail\">Longest chain: <strong>"
    + alias3((helpers.formatNumber || (depth0 && depth0.formatNumber) || alias2).call(alias1,(helpers.longestDuration || (depth0 && depth0.longestDuration) || alias2).call(alias1,depth0,{"name":"longestDuration","hash":{},"data":data,"blockParams":blockParams}),{"name":"formatNumber","hash":{},"data":data,"blockParams":blockParams}))
    + "ms</strong>\n   over <strong>"
    + alias3((helpers.longestChain || (depth0 && depth0.longestChain) || alias2).call(alias1,depth0,{"name":"longestChain","hash":{},"data":data,"blockParams":blockParams}))
    + "</strong> requests, totalling <strong>"
    + alias3((helpers.formatTransferSize || (depth0 && depth0.formatTransferSize) || alias2).call(alias1,(helpers.longestChainTransferSize || (depth0 && depth0.longestChainTransferSize) || alias2).call(alias1,depth0,{"name":"longestChainTransferSize","hash":{},"data":data,"blockParams":blockParams}),{"name":"formatTransferSize","hash":{},"data":data,"blockParams":blockParams}))
    + "KB</strong></li>\n  <li class=\"subitem__detail\">\n    <details>\n      <summary>View critical network waterfall</summary>\n      <div class=\"initial-nav\">Initial navigation</div>\n"
    + ((stack1 = (helpers.createTreeRenderContext || (depth0 && depth0.createTreeRenderContext) || alias2).call(alias1,depth0,{"name":"createTreeRenderContext","hash":{},"fn":container.program(22, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "    </details>\n  </li>\n</ul>\n";
},"main_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators;

  fn = decorators.inline(fn,props,container,{"name":"inline","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"args":["writeNode"],"data":data,"blockParams":blockParams}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true,"useBlockParams":true};
this["report"]["partials"]["empty-formatter"] = {"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true};
this["report"]["partials"]["speedline"] = {"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<ul class=\"subitem__details\">\n  <li class=\"subitem__detail\">First Visual Change: <strong>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.timings : depth0)) != null ? stack1.firstVisualChange : stack1), depth0))
    + "ms</strong></li>\n  <li class=\"subitem__detail\">Last Visual Change: <strong>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.timings : depth0)) != null ? stack1.visuallyComplete : stack1), depth0))
    + "ms</strong></li>\n</ul>\n";
},"useData":true};
this["report"]["partials"]["table"] = {"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.rows : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<details class=\"subitem__details\">\n  <summary class=\"subitem__detail\">More information</summary>\n  <table class=\"table_list "
    + ((stack1 = (helpers.ifNotEq || (depth0 && depth0.ifNotEq) || helpers.helperMissing).call(alias1,((stack1 = (depth0 != null ? depth0.headings : depth0)) != null ? stack1.length : stack1),2,{"name":"ifNotEq","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n    <thead>\n      <tr>\n"
    + ((stack1 = helpers.each.call(alias1,(depths[1] != null ? depths[1].tableHeadings : depths[1]),{"name":"each","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.rows : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n  </table>\n</details>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "multicolumn";
},"5":function(container,depth0,helpers,partials,data) {
    var alias1=container.escapeExpression;

  return "          <th class=\"table-column table-column-"
    + alias1((helpers.kebabCase || (depth0 && depth0.kebabCase) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(data && data.key),{"name":"kebabCase","hash":{},"data":data}))
    + "\">"
    + alias1(container.lambda(depth0, depth0))
    + "</th>\n";
},"7":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "        <tr>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.cols : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </tr>\n";
},"8":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "            <td class=\"table-column table-column-"
    + alias3((helpers.kebabCase || (depth0 && depth0.kebabCase) || alias2).call(alias1,helpers.lookup.call(alias1,(depths[2] != null ? depths[2].headingKeys : depths[2]),(data && data.index),{"name":"lookup","hash":{},"data":data}),{"name":"kebabCase","hash":{},"data":data}))
    + "\">"
    + alias3((helpers.sanitize || (depth0 && depth0.sanitize) || alias2).call(alias1,depth0,{"name":"sanitize","hash":{},"data":data}))
    + "</td>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.createTable || (depth0 && depth0.createTable) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.tableHeadings : depth0),(depth0 != null ? depth0.results : depth0),{"name":"createTable","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true,"useDepths":true};
this["report"]["partials"]["url-list"] = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "    <li class=\"subitem__detail http-resource\">\n      <span class=\"http-resource__url\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.url : depth0), depth0))
    + "</span>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.label : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.code : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "        <span class=\"http-resource__protocol\">("
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.label : depth0), depth0))
    + ")</span>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "        <pre class=\"http-resource__code\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.code : depth0), depth0))
    + "</pre>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<details class=\"subitem__details\">\n  <summary class=\"subitem__detail\">URLs</summary>\n  <ul class=\"subitem__details\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </ul>\n</details>\n";
},"useData":true};
this["report"]["partials"]["user-timings"] = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <li class=\"subitem__detail\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.isMark : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "    </li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var alias1=container.escapeExpression;

  return "        <strong class=\"ut-measure_listing-duration\">Mark: "
    + alias1((helpers.decimal || (depth0 && depth0.decimal) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.startTime : depth0),{"name":"decimal","hash":{},"data":data}))
    + "ms</strong> - "
    + alias1(container.lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "\n";
},"4":function(container,depth0,helpers,partials,data) {
    var alias1=container.escapeExpression;

  return "        <strong class=\"ut-measure_listing-duration\">Measure "
    + alias1((helpers.decimal || (depth0 && depth0.decimal) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.duration : depth0),{"name":"decimal","hash":{},"data":data}))
    + "ms</strong> - "
    + alias1(container.lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul class=\"subitem__details\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n";
},"useData":true};