this["report"] = this["report"] || {};
this["report"]["template"] = this["report"]["template"] || {};
this["report"]["template"]["exception"] = {"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return "<!--\n\nCopyright 2016 Google Inc. All rights reserved.\n\nLicensed under the Apache License, Version 2.0 (the \"License\");\nyou may not use this file except in compliance with the License.\nYou may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\nUnless required by applicable law or agreed to in writing, software\ndistributed under the License is distributed on an \"AS IS\" BASIS,\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\nSee the License for the specific language governing permissions and\nlimitations under the License.\n\n-->\n<!doctype html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width\">\n  <title>Lighthouse report - error</title>\n  <style>"
    + ((stack1 = ((helper = (helper = helpers.css || (depth0 != null ? depth0.css : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"css","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</style>\n</head>\n<body>\n\n  <div class=\"js-report report\">\n    <section class=\"report-body\">\n      <div class=\"report-body__header\"></div>\n\n      <div class=\"report-body__content\">\n\n        <div class=\"report-error\">\n          <h1 class=\"error-message\">⚠️ Error: "
    + ((stack1 = ((helper = (helper = helpers.errMessage || (depth0 != null ? depth0.errMessage : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"errMessage","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h1>\n          <p class=\"error-stack\"> "
    + ((stack1 = ((helper = (helper = helpers.errStack || (depth0 != null ? depth0.errStack : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"errStack","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n          <big>\n            ➡ <a href=\"https://github.com/GoogleChrome/lighthouse/issues\" target=\"_blank\" rel=\"noopener\">Please report this bug</a>\n          </big>\n          <div class=\"error-results\"><pre>"
    + ((stack1 = ((helper = (helper = helpers.results || (depth0 != null ? depth0.results : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"results","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</pre></div>\n        </div>\n\n      </div>\n\n    </section>\n    <footer class=\"footer\">\n      Generated by <b>Lighthouse</b> on "
    + container.escapeExpression(((helper = (helper = helpers.generatedTime || (depth0 != null ? depth0.generatedTime : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"generatedTime","hash":{},"data":data}) : helper)))
    + " | <a href=\"https://github.com/GoogleChrome/Lighthouse/issues\" target=\"_blank\" rel=\"noopener\">File an issue</a>\n    </footer>\n  </div>\n\n</body>\n</html>\n";
},"useData":true};
this["report"]["template"]["report-template"] = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul class=\"menu__nav\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},depth0,{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </ul>";
},"2":function(container,depth0,helpers,partials,data) {
    var alias1=container.escapeExpression;

  return "    <li class=\"menu__nav-item\">\n     <a class=\"menu__link\" href=\"#"
    + alias1((helpers.nameToLink || (depth0 && depth0.nameToLink) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.name : depth0),{"name":"nameToLink","hash":{},"data":data}))
    + "\">\n       "
    + alias1(container.lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "\n     </a>\n    </li>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      "
    + ((stack1 = container.lambda(depth0, depth0)) != null ? stack1 : "")
    + "\n";
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.reportsCatalog : depth0)) != null ? stack1.reportsMetadata : stack1),{"name":"each","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "              <a class=\"menu__report-tab\" href=\""
    + alias4(((helper = (helper = helpers.reportHref || (depth0 != null ? depth0.reportHref : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"reportHref","hash":{},"data":data}) : helper)))
    + "\">\n                <p class=\"menu__report-tab__url\" title=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\">Report for: "
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "</p>\n                <p class=\"menu__report-tab__time\">Generated on: "
    + alias4((helpers.formatDateTime || (depth0 && depth0.formatDateTime) || alias2).call(alias1,(depth0 != null ? depth0.generatedTime : depth0),{"name":"formatDateTime","hash":{},"data":data}))
    + "</p>\n              </a>\n"
    + ((stack1 = (helpers.ifEq || (depth0 && depth0.ifEq) || alias2).call(alias1,(depth0 != null ? depth0.reportHref : depth0),((stack1 = (depths[1] != null ? depths[1].reportsCatalog : depths[1])) != null ? stack1.selectedReportHref : stack1),{"name":"ifEq","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.createNav,(depths[1] != null ? depths[1].aggregations : depths[1]),{"name":"createNav","data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.createNav,(depth0 != null ? depth0.aggregations : depth0),{"name":"createNav","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                  <li><a href=\"#\" class=\"report__icon open\" data-action=\"open-viewer\" data-context=\""
    + container.escapeExpression(((helper = (helper = helpers.reportContext || (depth0 != null ? depth0.reportContext : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"reportContext","hash":{},"data":data}) : helper)))
    + "\">Open in Viewer</a></li>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                <li class=\"config-section__item\">\n                  <p class=\"config-section__desc\">\n                    "
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + " ("
    + alias2(alias1((depth0 != null ? depth0.description : depth0), depth0))
    + "):\n                    <strong> "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.enabled : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(17, data, 0),"data":data})) != null ? stack1 : "")
    + "</strong>\n                  </p>\n                </li>\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "Enabled";
},"17":function(container,depth0,helpers,partials,data) {
    return "Disabled";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <section class=\"config-section\">\n              <h2 class=\"config-section__title\">Blocked URL Patterns</h2>\n              <ul class=\"config-section__items\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.runtimeConfig : depth0)) != null ? stack1.blockedUrlPatterns : stack1),{"name":"each","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "              </ul>\n            </section>\n";
},"20":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                <li class=\"config-section__item js-currently-blocked-url\" data-url-pattern=\""
    + alias2(alias1(depth0, depth0))
    + "\">\n                  <p class=\"config-section__desc\">"
    + alias2(alias1(depth0, depth0))
    + "</p>\n                </li>\n";
},"22":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "      <section class=\"js-breakdown aggregations\" id=\""
    + alias3((helpers.nameToLink || (depth0 && depth0.nameToLink) || alias2).call(alias1,(depth0 != null ? depth0.name : depth0),{"name":"nameToLink","hash":{},"data":data,"blockParams":blockParams}))
    + "\">\n        <header class=\"aggregations__header\">\n          <h2>"
    + alias3(container.lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "</h2>\n          <p class=\"aggregations__desc\">"
    + alias3((helpers.sanitize || (depth0 && depth0.sanitize) || alias2).call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"sanitize","hash":{},"data":data,"blockParams":blockParams}))
    + "</p>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.scored : depth0),{"name":"if","hash":{},"fn":container.program(23, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "        </header>\n\n        <div class=\"js-report-by-user-feature\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.score : depth0),{"name":"each","hash":{},"fn":container.program(25, data, 1, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "        </div>\n      </section>\n";
},"23":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "          <div class=\"section-result\">\n            <span class=\"section-result__score score-"
    + alias3((helpers.getTotalScoreRating || (depth0 && depth0.getTotalScoreRating) || alias2).call(alias1,depth0,{"name":"getTotalScoreRating","hash":{},"data":data}))
    + "-bg\">\n              <span class=\"section-result__points\">"
    + alias3((helpers.getTotalScore || (depth0 && depth0.getTotalScore) || alias2).call(alias1,depth0,{"name":"getTotalScore","hash":{},"data":data}))
    + "</span>\n              <span class=\"section-result__divider\">/</span>\n              <span class=\"section-result__total\">100</span>\n            </span>\n          </div>\n";
},"25":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "            <section class=\"aggregation\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = blockParams[0][0]) != null ? stack1.name : stack1),{"name":"if","hash":{},"fn":container.program(26, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "\n            <ul class=\"subitems\">\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = blockParams[0][0]) != null ? stack1.subItems : stack1),{"name":"each","hash":{},"fn":container.program(29, data, 1, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "            </ul>\n          </section>\n";
},"26":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1;

  return "            <header class=\"aggregation__header\">\n              <h2>"
    + container.escapeExpression(container.lambda(((stack1 = blockParams[1][0]) != null ? stack1.name : stack1), depth0))
    + "</h2>\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = blockParams[1][0]) != null ? stack1.description : stack1),{"name":"if","hash":{},"fn":container.program(27, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "            </header>\n";
},"27":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1;

  return "                <p class=\"aggregation__desc\">"
    + container.escapeExpression((helpers.sanitize || (depth0 && depth0.sanitize) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = blockParams[2][0]) != null ? stack1.description : stack1),{"name":"sanitize","hash":{},"data":data,"blockParams":blockParams}))
    + "</p>\n";
},"29":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "                <li class=\"subitem "
    + ((stack1 = helpers["if"].call(alias1,(helpers.shouldShowHelpText || (depth0 && depth0.shouldShowHelpText) || alias2).call(alias1,((stack1 = blockParams[0][0]) != null ? stack1.score : stack1),{"name":"shouldShowHelpText","hash":{},"data":data,"blockParams":blockParams}),{"name":"if","hash":{},"fn":container.program(30, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "\">\n\n                  <p class=\"subitem__desc\">\n\n                    "
    + container.escapeExpression((helpers.sanitize || (depth0 && depth0.sanitize) || alias2).call(alias1,((stack1 = blockParams[0][0]) != null ? stack1.description : stack1),{"name":"sanitize","hash":{},"data":data,"blockParams":blockParams}))
    + ((stack1 = helpers["if"].call(alias1,(helpers.and || (depth0 && depth0.and) || alias2).call(alias1,((stack1 = blockParams[0][0]) != null ? stack1.displayValue : stack1),(helpers.not || (depth0 && depth0.not) || alias2).call(alias1,(helpers.isBool || (depth0 && depth0.isBool) || alias2).call(alias1,((stack1 = blockParams[0][0]) != null ? stack1.displayValue : stack1),{"name":"isBool","hash":{},"data":data,"blockParams":blockParams}),{"name":"not","hash":{},"data":data,"blockParams":blockParams}),{"name":"and","hash":{},"data":data,"blockParams":blockParams}),{"name":"if","hash":{},"fn":container.program(32, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = blockParams[0][0]) != null ? stack1.optimalValue : stack1),{"name":"if","hash":{},"fn":container.program(34, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = blockParams[0][0]) != null ? stack1.helpText : stack1),{"name":"if","hash":{},"fn":container.program(36, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "                  </p>\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = blockParams[0][0]) != null ? stack1.debugString : stack1),{"name":"if","hash":{},"fn":container.program(38, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "\n                  <div class=\"subitem-result\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = blockParams[0][0]) != null ? stack1.error : stack1),{"name":"if","hash":{},"fn":container.program(40, data, 0, blockParams),"inverse":container.program(42, data, 0, blockParams),"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "                  </div>"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = blockParams[0][0]) != null ? stack1.extendedInfo : stack1)) != null ? stack1.value : stack1),{"name":"if","hash":{},"fn":container.program(50, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "                </li>\n";
},"30":function(container,depth0,helpers,partials,data) {
    return "--show-help";
},"32":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1;

  return "<strong class=\"subitem__raw-value\">: "
    + container.escapeExpression(container.lambda(((stack1 = blockParams[1][0]) != null ? stack1.displayValue : stack1), depth0))
    + "</strong>\n";
},"34":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1;

  return "                      <small>(target: "
    + container.escapeExpression(container.lambda(((stack1 = blockParams[1][0]) != null ? stack1.optimalValue : stack1), depth0))
    + ")</small>\n";
},"36":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1;

  return "                      <input type=\"checkbox\" class=\"subitem__help-toggle\" title=\"Toggle help text\">\n                      <label class=\"subitem__help-toggle-label\"></label>\n                      <span class=\"subitem__help\">\n                        "
    + container.escapeExpression((helpers.sanitize || (depth0 && depth0.sanitize) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = blockParams[1][0]) != null ? stack1.helpText : stack1),{"name":"sanitize","hash":{},"data":data,"blockParams":blockParams}))
    + "\n                      </span>\n";
},"38":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1;

  return "                    <div class=\"subitem__debug\">\n                      "
    + container.escapeExpression(container.lambda(((stack1 = blockParams[1][0]) != null ? stack1.debugString : stack1), depth0))
    + "\n                    </div>\n";
},"40":function(container,depth0,helpers,partials,data) {
    return "                      <span class=\"subitem-result__unknown score-warning-bg\">N/A</span>\n";
},"42":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return ((stack1 = helpers["if"].call(alias1,(helpers.isBool || (depth0 && depth0.isBool) || helpers.helperMissing).call(alias1,((stack1 = blockParams[1][0]) != null ? stack1.score : stack1),{"name":"isBool","hash":{},"data":data,"blockParams":blockParams}),{"name":"if","hash":{},"fn":container.program(43, data, 0, blockParams),"inverse":container.program(48, data, 0, blockParams),"data":data,"blockParams":blockParams})) != null ? stack1 : "");
},"43":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = blockParams[2][0]) != null ? stack1.score : stack1),{"name":"if","hash":{},"fn":container.program(44, data, 0, blockParams),"inverse":container.program(46, data, 0, blockParams),"data":data,"blockParams":blockParams})) != null ? stack1 : "");
},"44":function(container,depth0,helpers,partials,data) {
    return "                          <span class=\"subitem-result__good score-good-bg\">Pass</span>\n";
},"46":function(container,depth0,helpers,partials,data) {
    return "                          <span class=\"subitem-result__poor score-poor-bg\">Fail</span>\n";
},"48":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=container.escapeExpression;

  return "                        <span class=\"subitem-result__points score-"
    + alias1((helpers.getItemRating || (depth0 && depth0.getItemRating) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = blockParams[2][0]) != null ? stack1.score : stack1),{"name":"getItemRating","hash":{},"data":data,"blockParams":blockParams}))
    + "-bg\">\n                          "
    + alias1(container.lambda(((stack1 = blockParams[2][0]) != null ? stack1.score : stack1), depth0))
    + "\n                        </span>\n";
},"50":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1;

  return ((stack1 = container.invokePartial(helpers.lookup.call(depth0 != null ? depth0 : {},depth0,"name",{"name":"lookup","hash":{},"data":data}),((stack1 = ((stack1 = blockParams[1][0]) != null ? stack1.extendedInfo : stack1)) != null ? stack1.value : stack1),{"data":data,"blockParams":blockParams,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"52":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <div class=\"report-body__fixed-footer-container\">\n"
    + ((stack1 = container.invokePartial(partials["config-panel"],depth0,{"name":"config-panel","data":data,"indent":"      ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    </div>\n";
},"54":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div id=\"lhresults-dump\">\n  "
    + container.escapeExpression(((helper = (helper = helpers.lhresults || (depth0 != null ? depth0.lhresults : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"lhresults","hash":{},"data":data}) : helper)))
    + "\n</div>\n<script>\n  window.lhresults = JSON.parse(document.querySelector('#lhresults-dump').textContent);\n</script>\n";
},"56":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<script>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.scripts : depth0),{"name":"each","hash":{},"fn":container.program(57, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</script>\n<script>\n// Init report.\nwindow.addEventListener('DOMContentLoaded', _ => {\n  window.logger = new Logger('#log');\n  new LighthouseReport(window.lhresults);\n});\n</script>";
},"57":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.lambda(depth0, depth0)) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!--\nCopyright 2016 Google Inc. All rights reserved.\n\nLicensed under the Apache License, Version 2.0 (the \"License\");\nyou may not use this file except in compliance with the License.\nYou may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\nUnless required by applicable law or agreed to in writing, software\ndistributed under the License is distributed on an \"AS IS\" BASIS,\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\nSee the License for the specific language governing permissions and\nlimitations under the License.\n--><!doctype html>\n<html lang=\"en\" data-report-context=\""
    + alias4(((helper = (helper = helpers.reportContext || (depth0 != null ? depth0.reportContext : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"reportContext","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, minimum-scale=1\">\n  <link rel=\"shortcut icon\" href=\"https://raw.githubusercontent.com/GoogleChrome/lighthouse/master/assets/lh_logo_icon.png\">\n  <title>Lighthouse report: "
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "</title>\n  <style>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.stylesheets : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "    /*# sourceURL=inline-styles.css */\n  </style>\n</head>\n<body>\n\n<div class=\"js-report report\">\n  <section class=\"report-body\">\n    <div class=\"report-body__content\">\n      <div class=\"report-body__menu-container\">\n        <div class=\"menu\">\n          <div class=\"menu__header\">\n            <h1 class=\"menu__header-title\">Lighthouse</h1>\n            <div class=\"menu__header-version\">Version: "
    + alias4(((helper = (helper = helpers.lighthouseVersion || (depth0 != null ? depth0.lighthouseVersion : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lighthouseVersion","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "</div>\n          </div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.reportsCatalog : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.program(10, data, 0, blockParams, depths),"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "        </div>\n      </div>\n      <div class=\"report-body__header-container js-header-container\">\n        <div class=\"report-body__header\">\n          <button class=\"report-body__header-toggle js-header-toggle\" title=\"See report's runtime settings\"></button>\n          <div class=\"report-body__metadata\">\n            <div class=\"report-body__url\">Results for: <a href=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "\" target=\"_blank\" rel=\"noopener\">"
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "</a></div>\n            <div class=\"report-body__url\">Generated on: "
    + alias4((helpers.formatDateTime || (depth0 && depth0.formatDateTime) || alias2).call(alias1,(depth0 != null ? depth0.generatedTime : depth0),{"name":"formatDateTime","hash":{},"data":data,"blockParams":blockParams}))
    + "</div>\n          </div>\n          <div class=\"report-body__buttons\">\n            <div class=\"export-section\">\n              <button class=\"export-button js-export\" title=\"Export report in different formats\">Export...</button>\n              <ul class=\"export-dropdown\">\n                <li><a href=\"#\" class=\"report__icon print\" data-action=\"print\">Print...</a></li>\n                <li><a href=\"#\" class=\"report__icon copy\" data-action=\"copy\">Copy JSON</a></li>\n                <li><a href=\"#\" class=\"report__icon download\" data-action=\"save-html\" data-context=\""
    + alias4(((helper = (helper = helpers.reportContext || (depth0 != null ? depth0.reportContext : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"reportContext","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "\">Save as HTML</a></li>\n                <li><a href=\"#\" class=\"report__icon download\" data-action=\"save-json\" data-context=\""
    + alias4(((helper = (helper = helpers.reportContext || (depth0 != null ? depth0.reportContext : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"reportContext","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "\">Save as JSON</a></li>\n"
    + ((stack1 = (helpers.ifNotEq || (depth0 && depth0.ifNotEq) || alias2).call(alias1,(depth0 != null ? depth0.reportContext : depth0),"viewer",{"name":"ifNotEq","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "              </ul>\n            </div>\n            <button class=\"report__icon report-body__icon share js-share\" title=\"Share report on GitHub\"></button>\n          </div>\n          <div class=\"report-body__header-content\">\n            <section class=\"config-section\">\n              <h2 class=\"config-section__title\">Runtime Environment</h2>\n              <ul class=\"config-section__items\">\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.runtimeConfig : depth0)) != null ? stack1.environment : stack1),{"name":"each","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "              </ul>\n            </section>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.runtimeConfig : depth0)) != null ? stack1.blockedUrlPatterns : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "          </div>\n        </div>\n      </div>\n      <div class=\"report-body__aggregations-container\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.aggregations : depth0),{"name":"each","hash":{},"fn":container.program(22, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "      </div>\n    </div>\n\n    <footer class=\"footer\">\n      Generated by <b>Lighthouse</b> "
    + alias4(((helper = (helper = helpers.lighthouseVersion || (depth0 != null ? depth0.lighthouseVersion : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lighthouseVersion","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + " on "
    + alias4((helpers.formatDateTime || (depth0 && depth0.formatDateTime) || alias2).call(alias1,(depth0 != null ? depth0.generatedTime : depth0),{"name":"formatDateTime","hash":{},"data":data,"blockParams":blockParams}))
    + " | <a href=\"https://github.com/GoogleChrome/Lighthouse/issues\" target=\"_blank\" rel=\"noopener\">File an issue</a>\n    </footer>\n"
    + ((stack1 = (helpers.ifEq || (depth0 && depth0.ifEq) || alias2).call(alias1,(depth0 != null ? depth0.reportContext : depth0),"perf-x",{"name":"ifEq","hash":{},"fn":container.program(52, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "  </section>\n</div>\n\n<div class=\"log-wrapper\">\n  <div id=\"log\"></div>\n</div>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(helpers.and || (depth0 && depth0.and) || alias2).call(alias1,(depth0 != null ? depth0.lhresults : depth0),(depth0 != null ? depth0.scripts : depth0),{"name":"and","hash":{},"data":data,"blockParams":blockParams}),{"name":"if","hash":{},"fn":container.program(54, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.scripts : depth0),{"name":"if","hash":{},"fn":container.program(56, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "");
},"main_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators;

  fn = decorators.inline(fn,props,container,{"name":"inline","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"args":["createNav"],"data":data,"blockParams":blockParams}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true,"useBlockParams":true};