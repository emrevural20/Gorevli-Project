/**
 * AdminLTE Demo Menu
 * ------------------
 * You should not use this file in production.
 * This file is for demo purposes only.
 */
(function ($) {

  /**
   * List of all the available skins
   * 
   * @type Array
   */
  var my_skins = [
    "skin-blue",
    "skin-black",
    "skin-red",
    "skin-yellow",
    "skin-purple",
    "skin-green",
    "skin-blue-light",
    "skin-black-light",
    "skin-red-light",
    "skin-yellow-light",
    "skin-purple-light",
    "skin-green-light"
  ];

  /**
   * CSS rules for the menu
   * 
   * @type Object
   */
  var menu_css = {
    "padding": "10px",
    "position": "fixed",
    "top": "70px",
    "right": "-250px",
    "background": "#fff",
    "border": "0px solid #ddd",
    "width": "250px",
    "z-index": "99999",
    "box-shadow": "0 1px 3px rgba(0,0,0,0.1)"
  };

  /**
   * CSS rules for the demo handle button
   * 
   * @type Object
   */
  var handle_css = {
    "position": "fixed",
    "top": "70px",
    "right": "0",
    "background": "#fff",
    "border-radius": "5px 0px 0px 5px",
    "padding": "10px 15px",
    "font-size": "16px",
    "z-index": "99999",
    "cursor": "pointer",
    "color": "#3c8dbc",
    "box-shadow": "0 1px 3px rgba(0,0,0,0.1)"
  };

  //Create the handle
  var demo = $("<div />")
          .css(handle_css)
          .html("<i class='fa fa-gear'></i>")
          .addClass("no-print");

  //Create the menu
  var demo_settings = $("<div />")
          .css(menu_css)
          .addClass("no-print");


  var skins_list = $("<ul />", {"class": 'list-unstyled clearfix'});

  //Dark sidebar skins
  var skin_blue =
          $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-blue' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
                  + "<div><span style='display:block; width: 20%; float: left; height: 7px; background: #367fa9;'></span><span class='bg-light-blue' style='display:block; width: 80%; float: left; height: 7px;'></span></div>"
                  + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #222d32;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
                  + "</a>"
                  + "<p class='text-center no-margin'>Mavi</p>");
  skins_list.append(skin_blue);
  var skin_black =
          $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-black' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
                  + "<div style='box-shadow: 0 0 2px rgba(0,0,0,0.1)' class='clearfix'><span style='display:block; width: 20%; float: left; height: 7px; background: #fefefe;'></span><span style='display:block; width: 80%; float: left; height: 7px; background: #fefefe;'></span></div>"
                  + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #222;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
                  + "</a>"
                  + "<p class='text-center no-margin'>Siyah</p>");
  skins_list.append(skin_black);
  var skin_purple =
          $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-purple' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
                  + "<div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-purple-active'></span><span class='bg-purple' style='display:block; width: 80%; float: left; height: 7px;'></span></div>"
                  + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #222d32;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
                  + "</a>"
                  + "<p class='text-center no-margin'>Mor</p>");
  skins_list.append(skin_purple);
  var skin_green =
          $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-green' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
                  + "<div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-green-active'></span><span class='bg-green' style='display:block; width: 80%; float: left; height: 7px;'></span></div>"
                  + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #222d32;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
                  + "</a>"
                  + "<p class='text-center no-margin'>Yeşil</p>");
  skins_list.append(skin_green);
  var skin_red =
          $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-red' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
                  + "<div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-red-active'></span><span class='bg-red' style='display:block; width: 80%; float: left; height: 7px;'></span></div>"
                  + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #222d32;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
                  + "</a>"
                  + "<p class='text-center no-margin'>Kırmızı</p>");
  skins_list.append(skin_red);
  var skin_yellow =
          $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-yellow' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
                  + "<div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-yellow-active'></span><span class='bg-yellow' style='display:block; width: 80%; float: left; height: 7px;'></span></div>"
                  + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #222d32;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
                  + "</a>"
                  + "<p class='text-center no-margin'>Sarı</p>");
  skins_list.append(skin_yellow);

  //Light sidebar skins
  var skin_blue_light =
          $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-blue-light' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
                  + "<div><span style='display:block; width: 20%; float: left; height: 7px; background: #367fa9;'></span><span class='bg-light-blue' style='display:block; width: 80%; float: left; height: 7px;'></span></div>"
                  + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #f9fafc;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
                  + "</a>"
                  + "<p class='text-center no-margin' style='font-size: 12px'>Işıklı Mavi</p>");
  skins_list.append(skin_blue_light);
  var skin_black_light =
          $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-black-light' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
                  + "<div style='box-shadow: 0 0 2px rgba(0,0,0,0.1)' class='clearfix'><span style='display:block; width: 20%; float: left; height: 7px; background: #fefefe;'></span><span style='display:block; width: 80%; float: left; height: 7px; background: #fefefe;'></span></div>"
                  + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #f9fafc;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
                  + "</a>"
                  + "<p class='text-center no-margin' style='font-size: 12px'>Işıklı Siyah</p>");
  skins_list.append(skin_black_light);
  var skin_purple_light =
          $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-purple-light' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
                  + "<div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-purple-active'></span><span class='bg-purple' style='display:block; width: 80%; float: left; height: 7px;'></span></div>"
                  + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #f9fafc;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
                  + "</a>"
                  + "<p class='text-center no-margin' style='font-size: 12px'>Işıklı Mor</p>");
  skins_list.append(skin_purple_light);
  var skin_green_light =
          $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-green-light' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
                  + "<div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-green-active'></span><span class='bg-green' style='display:block; width: 80%; float: left; height: 7px;'></span></div>"
                  + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #f9fafc;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
                  + "</a>"
                  + "<p class='text-center no-margin' style='font-size: 12px'>Işıklı Yeşil</p>");
  skins_list.append(skin_green_light);
  var skin_red_light =
          $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-red-light' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
                  + "<div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-red-active'></span><span class='bg-red' style='display:block; width: 80%; float: left; height: 7px;'></span></div>"
                  + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #f9fafc;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
                  + "</a>"
                  + "<p class='text-center no-margin' style='font-size: 12px'>Işıklı Kırmızı</p>");
  skins_list.append(skin_red_light);
  var skin_yellow_light =
          $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-yellow-light' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
                  + "<div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-yellow-active'></span><span class='bg-yellow' style='display:block; width: 80%; float: left; height: 7px;'></span></div>"
                  + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #f9fafc;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
                  + "</a>"
                  + "<p class='text-center no-margin' style='font-size: 12px;'>Işıklı Sarı</p>");
  skins_list.append(skin_yellow_light);

  demo_settings.append("<h4 class='text-light-blue' style='margin: 0 0 5px 0; border-bottom: 1px solid #ddd; padding-bottom: 15px;'>Arayüzler</h4>");
  demo_settings.append(skins_list);

  demo.click(function () {
    if (!$(this).hasClass("open")) {
      $(this).animate({"right": "250px"});
      demo_settings.animate({"right": "0"});
      $(this).addClass("open");
    } else {
      $(this).animate({"right": "0"});
      demo_settings.animate({"right": "-250px"});
      $(this).removeClass("open");
    }
  });

  $("body").append(demo);
  $("body").append(demo_settings);

  setup();

  /**
   * Toggles layout classes
   * 
   * @param String cls the layout class to toggle
   * @returns void
   */
  function change_layout(cls) {
    $("body").toggleClass(cls);
    $.AdminLTE.layout.fixSidebar();
  }

  /**
   * Replaces the old skin with the new skin
   * @param String cls the new skin class
   * @returns Boolean false to prevent link's default action
   */
  function change_skin(cls) {
    $.each(my_skins, function (i) {
      $("body").removeClass(my_skins[i]);
    });

    $("body").addClass(cls);
    store('skin', cls);
    return false;
  }

  /**
   * Store a new settings in the browser
   * 
   * @param String name Name of the setting
   * @param String val Value of the setting
   * @returns void
   */
  function store(name, val) {
    if (typeof (Storage) !== "undefined") {
      localStorage.setItem(name, val);
    } else {
      alert('Please use a modern browser to properly view this template!');
    }
  }

  /**
   * Get a prestored setting
   * 
   * @param String name Name of of the setting
   * @returns String The value of the setting | null
   */
  function get(name) {
    if (typeof (Storage) !== "undefined") {
      return localStorage.getItem(name);
    } else {
      alert('Please use a modern browser to properly view this template!');
    }
  }

  /**
   * Retrieve default settings and apply them to the template
   * 
   * @returns void
   */
  function setup() {
    var tmp = get('skin');
    if (tmp && $.inArray(tmp, my_skins))
      change_skin(tmp);

    //Add the change skin listener
    $("[data-skin]").on('click', function (e) {
      e.preventDefault();
      change_skin($(this).data('skin'));
    });

    //Add the layout manager
    $("[data-layout]").on('click', function () {
      change_layout($(this).data('layout'));
    });
    
    $("[data-controlsidebar]").on('click', function () {
      change_layout($(this).data('controlsidebar'));
      var slide = !$.AdminLTE.options.controlSidebarOptions.slide;
      $.AdminLTE.options.controlSidebarOptions.slide = slide;
      if(!slide)
        $('.control-sidebar').removeClass('control-sidebar-open');
    });
  }
})(jQuery);