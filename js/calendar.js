$(function () {
  if (typeof CW === "undefined") {
    window.CW = {};
  }

  function AJAX_JSON_Req()  {
    var AJAX_req = new XMLHttpRequest();
    AJAX_req.open("GET", url, true);
    AJAX_req.setRequestHeader("content-type", "application/json");
  }

  function createModels() {

  }

  var Calendar = CW.Calendar = function() {

  };



})();
