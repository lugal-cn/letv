/**
 * Implements hook_block_view().
 * @param {String} delta
 * @param {Object} region
 * @return {String}
 */
function menu_block_view(delta, region) {
  // NOTE: When rendering a jQM data-role="navbar" you can't place an
  // empty list (<ul></ul>) in it, this will cause an error:
  // https://github.com/jquery/jquery-mobile/issues/5141
  // So we must check to make sure we have any items before rendering the
  // menu since our theme_item_list implementation returns empty lists
  // for jQM pageshow async list item data retrieval and display.
  try {
    // Load the menu.
    var menu = drupalgap.menus[delta];
    // Since menu link paths may have an 'access_callback' handler that needs
    // to make an async call to the server (e.g. local tasks), we'll utilize a
    // pageshow handler to render the menu, so for now just render an empty
    // placeholder and pageshow handler.
    var container_id = menu_container_id(delta);
    var data_role = null;
    if (region.attributes && region.attributes['data-role']) {
      data_role = region.attributes['data-role'];
    }
    // If the menu is wrapped, check to see if any wrap_options attributes were
    // attached. If any were provided use them to build the div container
    // attributes. We will always overwrite the container id though, since it is
    // generated by the system (and used to dynamically inject the menu html).
    var container_attributes = {};
    if (
      typeof menu.options !== 'undefined' &&
      typeof menu.options.wrap !== 'undefined' &&
      menu.options.wrap && menu.options.wrap_options &&
      menu.options.wrap_options.attributes
    ) { container_attributes = menu.options.wrap_options.attributes; }
    container_attributes.id = container_id;
    return '<div ' + drupalgap_attributes(container_attributes) + '></div>' +
      drupalgap_jqm_page_event_script_code({
          page_id: drupalgap_get_page_id(),
          jqm_page_event: 'pageshow',
          jqm_page_event_callback: 'menu_block_view_pageshow',
          jqm_page_event_args: JSON.stringify({
              menu_name: delta,
              container_id: container_id,
              'data-role': data_role
          })
      }, delta);
  }
  catch (error) { console.log('menu_block_view - ' + error); }
}

/**
 * The pageshow handler for menu blocks.
 * @param {Object} options
 */
function menu_block_view_pageshow(options) {
  try {
    var html = '';

    // Grab current path so we can watch out for any menu links that match it.
    var path = drupalgap_path_get();

    // Are we about to view a normal menu, or the local task menu?
    var delta = options.menu_name;
    if (delta == 'primary_local_tasks') {

      // LOCAL TASKS MENU LINKS

      // For the current page's router path, grab any local task menu links add
      // them into the menu. Note, local tasks are located in a menu link item's
      // children, or its parent's children (including itself), if there are
      // any. Local tasks typically have argument wildcards in them, so we'll
      // replace their wildcards with the current args.
      var router_path = drupalgap_router_path_get();
      if (drupalgap.menu_links[router_path]) {
        // Determine the parent path, if any.
        var parent = null;
        if (drupalgap.menu_links[router_path].parent) {
          parent = drupalgap.menu_links[router_path].parent;
        }
        // Then extract the local tasks paths array.
        var local_tasks = null;
        if (drupalgap.menu_links[router_path].children) {
          local_tasks = drupalgap.menu_links[router_path].children;
        }
        else if (
          parent && drupalgap.menu_links[parent] &&
          drupalgap.menu_links[parent].children
        ) { local_tasks = drupalgap.menu_links[parent].children; }

        var args = arg();

        // Define a success callback that will be called later on...
        var _success = function(result) {
          try {
            var menu_items = [];
            var link_path = '';
            if (local_tasks && !empty(local_tasks)) {
              for (var index in local_tasks) {
                  if (!local_tasks.hasOwnProperty(index)) { continue; }
                  var local_task = local_tasks[index];
                  if (drupalgap.menu_links[local_task] && (
                    drupalgap.menu_links[local_task].type ==
                      'MENU_DEFAULT_LOCAL_TASK' ||
                    drupalgap.menu_links[local_task].type ==
                      'MENU_LOCAL_TASK'
                  )) {
                    if (drupalgap_menu_access(local_task, null, result)) {
                      menu_items.push(drupalgap.menu_links[local_task]);
                    }
                  }
              }
            }
            // If there was only one local task menu item, and it is the default
            // local task, don't render the menu, otherwise render the menu as
            // an item list as long as there are items to render.
            if (menu_items.length == 1 &&
              menu_items[0].type == 'MENU_DEFAULT_LOCAL_TASK'
            ) { html = ''; }
            else {
              var items = [];
              for (var index in menu_items) {
                  if (!menu_items.hasOwnProperty(index)) { continue; }
                  var item = menu_items[index];
                  // Make a deep copy of the menu link so we don't modify it.
                  var link = jQuery.extend(true, {}, item);
                  // If there are no link options, set up defaults.
                  if (!link.options) { link.options = { attributes: { } }; }
                  else if (!link.options.attributes) {
                    link.options.attributes = { };
                  }

                  // If the link points to the current path, set it as active.
                  // We first need to figure out which path to check, by default
                  // use the link path, but if its a default local task, use its
                  // parent path.
                  var path_to_check = link.path;
                  if (link.type == 'MENU_DEFAULT_LOCAL_TASK' && link.parent) {
                    path_to_check = link.parent;
                    link.path = arg(null, link.parent).join('/');
                  }
                  if (path_to_check == router_path) {
                    if (!link.options.attributes['class']) {
                      link.options.attributes['class'] = '';
                    }
                    link.options.attributes['class'] +=
                      ' ui-btn ui-btn-active ui-state-persist ';
                  }
                  items.push(
                    l(
                      link.title,
                      drupalgap_place_args_in_path(link.path),
                      link.options
                    )
                  );
              }
              if (items.length > 0) {
                html = theme('item_list', {'items': items});
              }
            }
            // Inject the html.
            $('#' + options.container_id).html(html).trigger('create');
            // If the block's region is a jQM navbar, refresh the navbar.
            if (options['data-role'] && options['data-role'] == 'navbar') {
              $('#' + options.container_id).navbar();
            }
            // Optionally remove the placeholder wrapper.
            var menu = drupalgap.menus[options.menu_name];
            if (
              typeof menu.options !== 'undefined' &&
              (typeof menu.options.wrap === 'undefined' || !menu.options.wrap)
            ) { $('#' + options.container_id).children().unwrap(); }
          }
          catch (error) {
            console.log('menu_block_view_pageshow - success - ' + error);
          }
        };

        // First, determine if any child has an entity arg in the path, and/or
        // an access_callback handler.
        var has_entity_arg = false;
        var has_access_callback = false;
        if (local_tasks) {
          for (var index in local_tasks) {
              if (!local_tasks.hasOwnProperty(index)) { continue; }
              var local_task = local_tasks[index];
              if (drupalgap.menu_links[local_task] &&
                (
                  drupalgap.menu_links[local_task].type ==
                    'MENU_DEFAULT_LOCAL_TASK' ||
                  drupalgap.menu_links[local_task].type ==
                    'MENU_LOCAL_TASK'
                )
              ) {
                if (drupalgap_path_has_entity_arg(arg(null, local_task))) {
                  has_entity_arg = true;
                }
                if (
                  typeof
                    drupalgap.menu_links[local_task].access_callback !==
                    'undefined'
                ) { has_access_callback = true; }
              }
          }
        }

        // If we have an entity arg, and an access_callback, let's load up the
        // entity asynchronously.
        if (has_entity_arg && has_access_callback) {
          var found_int_arg = false;
          var int_arg_index = null;
          for (var i = 0; i < args.length; i++) {
            if (is_int(parseInt(args[i]))) {
              // Save the arg index so we can replace it later.
              int_arg_index = i;
              found_int_arg = true;
              break;
            }
          }
          if (!found_int_arg) { _success(null); return; }

          // Determine the naming convention for the entity load function.
          var load_function_prefix = args[0]; // default
          if (args[0] == 'taxonomy') {
            if (args[1] == 'vocabulary' || args[1] == 'term') {
              load_function_prefix = args[0] + '_' + args[1];
            }
          }
          var load_function = load_function_prefix + '_load';

          // If the load function exists, load the entity.
          if (drupalgap_function_exists(load_function)) {
            var entity_fn = window[load_function];
            // Load the entity. MVC items need to pass along the module name and
            // model type to its load function. All other entity load functions
            // just need the entity id.
            var entity_id = parseInt(args[int_arg_index]);
            if (args[0] == 'item') {
              entity = entity_fn(args[1], args[2], entity_id);
              _success(entity);
            }
            else {
              // Force a reset if we are editing the entity.
              var reset = false;
              if (arg(2) == 'edit') { reset = true; }
              // Load the entity asynchronously.
              entity_fn(entity_id, { reset: reset, success: _success });
            }
          }
          else {
            console.log('menu_block_view_pageshow - load function not ' +
              'implemented! ' + load_function
            );
          }
        }
        else { _success(null); }
      }
    }
    else {

      // ALL OTHER MENU LINKS

      // If the block's corresponding menu exists, and it has links, iterate
      // over each link, add it to an items array, then theme an item list.
      var menu = false;
      if (drupalgap.menus[delta] && drupalgap.menus[delta].links) {
        menu = drupalgap.menus[delta];
        var items = [];
        for (var index in menu.links) {
            if (!menu.links.hasOwnProperty(index)) { continue; }
            var menu_link = menu.links[index];
            // Make a deep copy of the menu link so we don't modify it.
            var link = jQuery.extend(true, {}, menu_link);
            // If there are no link options, set up defaults.
            if (!link.options) { link.options = {attributes: {}}; }
            else if (!link.options.attributes) { link.options.attributes = {}; }
            // If the link points to the current path, set it as active.
            if (link.path == path) {
              if (!link.options.attributes['class']) {
                link.options.attributes['class'] = '';
              }
              link.options.attributes['class'] +=
                ' ui-btn ui-btn-active ui-state-persist ';
            }
            items.push(l(t(link.title), link.path, link.options));
        }
        if (items.length > 0) {
          // Pass along any menu attributes.
          var attributes = null;
          if (menu.options && menu.options.attributes) {
            attributes = drupalgap.menus[delta].options.attributes;
          }
          html = theme('item_list', {'items': items, 'attributes': attributes});
        }
      }
      // Inject the html.
      $('#' + options.container_id).html(html).trigger('create');
      // Remove the placeholder wrapper, unless we were instructed not to.
      var wrap = false;
      if (
        menu && typeof menu.options !== 'undefined' &&
        typeof menu.options.wrap !== 'undefined' && menu.options.wrap
      ) { wrap = true; }
      if (!wrap) { $('#' + options.container_id).children().unwrap(); }
    }
  }
  catch (error) { console.log('menu_block_view_pageshow - ' + error); }
}

/**
 * Implements hook_install().
 */
function menu_install() {
  try {
    // Grab the list of system menus and save each.
    var system_menus = menu_list_system_menus();
    for (var menu_name in system_menus) {
      if (!system_menus.hasOwnProperty(menu_name)) { continue; }
      var menu = system_menus[menu_name];
      menu_save(menu);
    }
  }
  catch (error) { console.log('menu_install - ' + error); }
}

/**
 * Returns a JSON object that can be used as default options for a menu object.
 * @return {Object}
 */
function menu_popup_get_default_options() {
    return {
      attributes: {
        'data-role': 'listview'
      },
      wrap: true,
      wrap_options: {
        attributes: {
          'data-role': 'popup'
        }
      }
    };
}

/**
 * Given a menu region link, this will return its data JSON object, or null if
 * no data exists.
 * @param {Object} region_link
 * @return {*)
 */
function menu_region_link_get_data(region_link) {
  try {
    // Extract the data associated with this link. If it has a 'region'
    // property then it is coming from a hook_menu, if it doesn't then it
    // is coming from settings.js.
    var data = null;
    if (typeof region_link.region === 'undefined') {
      data = region_link; // link defined in settings.js
      // @TODO - we need to warn people that they can't make a custom menu
      // with a machine name of 'regions' now that this machine name is a
      // "system" name for rendering links in regions.
    }
    // link defined via hook_menu()
    else { data = region_link.region; }
    return data;
  }
  catch (error) { console.log('menu_region_link_get_data - ' + error); }
}

/**
 * Given a menu region link's class name, this will return what side of the ui
 * it is on, returns left by default, unless it specifically contains the
 * ui-btn-right class.
 * @param {String} class_name
 * @return {String)
 */
function menu_region_link_get_side(class_name) {
  try {
    var side = 'left';
    if (class_name.indexOf('ui-btn-right') != -1) { side = 'right'; }
    return side;
  }
  catch (error) { console.log('menu_region_link_get_side - ' + error); }
}

/**
 * Given a menu, this adds it to drupalgap.menus. See menu_list_system_menus
 * for examples of a menu JSON object.
 * @param {Object} menu
 */
function menu_save(menu) {
  try {
    drupalgap.menus[menu.menu_name] = menu;
  }
  catch (error) { console.log('menu_save - ' + error); }
}

/**
 * Given a menu name, this will return it from drupalgap.menus, or return null
 * if it doesn't exist.
 * @param {String} name
 * @return {*}
 */
function menu_load(name) {
  try {
    if (typeof drupalgap.menus[name] !== 'undefined') {
      return drupalgap.menus[name];
    }
    return null;
  }
  catch (error) { console.log('menu_load - ' + error); }
}

/**
 * Given a menu name, this will return its container id for that page. You may
 * optionally pass in a page id as the second argument, otherwise it will use
 * the current page id.
 * @param {String} menu_name
 * @return {String}
 */
function menu_container_id(menu_name) {
  try {
    var page_id = null;
    if (arguments[1]) { page_id = arguments[1]; }
    else { page_id = drupalgap_get_page_id(); }
    return page_id + '_menu_' + menu_name;
  }
  catch (error) { console.log('menu_container_id - ' + error); }
}

