/**************|
 * Development |
 **************/

// Uncomment to clear the app's local storage cache each time the app loads.
//window.localStorage.clear();

// Set to true to see console.log() messages. Set to false when publishing app.
Drupal.settings.debug = true;

/****************************************|
 * Drupal Settings (provided by jDrupal) |
 ****************************************/
 
/* Drupal Paths */
 
// Site Path (do not use a trailing slash)
//Drupal.settings.site_path = 'http://bsqzchina.local'; // e.g. http://www.example.com
Drupal.settings.site_path = 'http://letv.myblackicoffee.com'; // e.g. http://www.example.com

// Default Services Endpoint Path
Drupal.settings.endpoint = 'drupalgap';

// Files Directory Paths (use one or the other)
Drupal.settings.file_public_path = 'sites/default/files';
//Drupal.settings.file_private_path = 'system/files';

// The Default Language Code
Drupal.settings.language_default = 'und';

/* Drupal Caching */

// Set to true to enable local storage caching.
Drupal.settings.cache.entity.enabled = false;
Drupal.settings.cache.views.enabled = false;

// Number of seconds before cached copy expires. Set to 0 to cache forever, set
// to 60 for one minute, etc.
Drupal.settings.cache.entity.expiration = 3600;
Drupal.settings.cache.views.expiration = 3600;

/*********************|
 * DrupalGap Settings |
 *********************/

// DrupalGap Mode (defaults to 'web-app')
//  'web-app' - use this mode to build a web application for a browser window
//  'phonegap' - use this mode to build a mobile application with phonegap
drupalgap.settings.mode = 'web-app';

// Language Files - locale/[language-code].json
drupalgap.settings.locale = {
   /* es: { } */
};

/*************|
 * Appearance |
 *************/

// App Title
drupalgap.settings.title = '兵圣全智';
 
// App Front Page
drupalgap.settings.front = 'home_recommend_articles';

// Theme
//drupalgap.settings.theme = 'easystreet3';
drupalgap.settings.theme = 'bsqzchina';

// Logo
drupalgap.settings.logo = 'app/themes/bsqzchina/images/bsqzchina.png';

// Offline Warning Message. Set to false to hide message.
drupalgap.settings.offline_message = '没有网络连接';

// Exit app message.
drupalgap.settings.exit_message = 'Exit ' + drupalgap.settings.title + '?';

// Loader Animations - http://demos.jquerymobile.com/1.4.0/loader/
drupalgap.settings.loader = {
  loading: {
    text: '加载中...',
    textVisible: true,
    theme: 'b'
  },
  saving: {
    text: '保存中...',
    textVisible: true,
    theme: 'b'
  },
  deleting: {
    text: '删除中...',
    textVisible: true,
    theme: 'b'
  }
};

/*****************************************|
 * Modules - http://drupalgap.org/node/74 |
 *****************************************/

/** Contributed Modules - www/app/modules **/

//Drupal.modules.contrib['example'] = {};

/** Custom Modules - www/app/modules/custom **/

//Drupal.modules.custom['my_module'] = {};
Drupal.modules.custom['bsqzchina'] = {};

/***************************************|
 * Menus - http://drupalgap.org/node/85 |
 ***************************************/
drupalgap.settings.menus = {}; // Do not remove this line.

// Try custom menu.

//drupalgap.settings.menus['bsqzchina_menu'] = {
//  links:[
//    {
//      title: '全球戏闻',
//      path: 'global_news',
//      options: {
//        attributes: {
//          'data-icon': 'star',
//          'class': 'test-class',
//        }
//      }
//    },
//    {
//      title: '角儿出没',
//      path: 'actor_event'
//    },
//    {
//      title: '戏曲内参',
//      path: 'opera_article'
//    },
//    {
//      title: '新国戏水牌',
//      path: 'i_opera_list'
//    },
//    {
//      title: '第二现场',
//      path: 'seconed_stage'
//    },
//    {
//      title: '戏曲大观园',
//      path: 'opera_grand'
//    },
//    {
//      title: 'i戏不晃范',
//      path: 'i_opera_model'
//    }
//  ]
//};

//drupalgap.settings.menus['bsqzchina_menu'] = {
//    links:[
//      {
//        title: '公告',
//        path: 'information'
//      },
//      {
//        title: '商店',
//        path: 'shop'
//      }
//    ]
//  };

// User Menu Anonymous
drupalgap.settings.menus['user_menu_anonymous'] = {
  options: menu_popup_get_default_options(),
  links: [
    {
      title: '登陆',
      path: 'user/login',
      options: {
        attributes: {
          'data-icon': 'lock'
        }
      }
    },
    {
      title: '注册新用户',
      path: 'user/register',
      options: {
        attributes: {
          'data-icon': 'plus'
        }
      }
    }
  ]
};

// User Menu Authenticated
drupalgap.settings.menus['user_menu_authenticated'] = {
  options: menu_popup_get_default_options(),
  links: [
    {
      title: '我的账号',
      path: 'user',
      options: {
        attributes: {
          'data-icon': 'user'
        }
      }
    },
    {
      title: '退出',
      path: 'user/logout',
      options: {
        attributes: {
          'data-icon': 'delete'
        }
      }
    }
  ]
};

// Main Menu
drupalgap.settings.menus['main_menu'] = {
  options: menu_popup_get_default_options(),
  links: [
//    {
//      title:'内容',
//      path:'node',
//      options:{
//        attributes:{
//          'data-icon':'star'
//        }
//      }
//    },
//    {
//      title:'培训信息',
//      path:'taxonomy/term/1',
//      options:{
//        attributes:{
//          'data-icon':'grid'
//        }
//      }
//    },
//    {
//      title:'授课信息',
//      path:'taxonomy/term/2',
//      options:{
//        attributes:{
//          'data-icon':'grid'
//        }
//      }
//    },
//    {
//      title:'演出信息',
//      path:'taxonomy/term/3',
//      options:{
//        attributes:{
//          'data-icon':'grid'
//        }
//      }
//    },
//    {
//      title: '文创联盟',
//      path: 'node/17',
//      options: {
//        attributes:{
//          'data-icon':'info'
//        }
//      }
//    },
//    {
//      title: '关于我们',
//      path: 'node/18',
//      options: {
//        attributes:{
//          'data-icon':'info'
//        }
//      }
//    }
//    {
//      title:'Users',
//      path:'user-listing',
//      options:{
//        attributes:{
//          'data-icon':'info'
//        }
//      }
//    }
  ]
};

/****************************************|
 * Blocks - http://drupalgap.org/node/83 |
 ****************************************/
drupalgap.settings.blocks = {}; // Do not remove this line.

// Easy Street 3 Theme Blocks
drupalgap.settings.blocks.easystreet3 = {
  header: {
    user_menu_anonymous: {
      roles: {
        value: ['anonymous user'],
        mode: 'include',
      }
    },
    user_menu_authenticated: {
      roles: {
        value: ['authenticated user'],
        mode: 'include',
      }
    },
    main_menu: { }
  },
  sub_header: {
    title: { }
  },
  navigation: {
    primary_local_tasks: { }
  },
  content: {
    bsqzbanner: {
//      access_callback: 'bsqzchina_front_block_access_callback'
    },
    messages: { },
    main: { }
  },
  footer: {
//    powered_by_lu: { },
    goto_category_list: {
    },
  }
};

//The bsqzchina blocks.
drupalgap.settings.blocks.bsqzchina = {
  header: {
    user_menu_anonymous: {
      roles: {
        value: ['anonymous user'],
        mode: 'include',
      }
    },
    user_menu_authenticated: {
      roles: {
        value: ['authenticated user'],
        mode: 'include',
      }
    },
    category_navigation:{
      access_callback: 'bsqzchina_category_home_link_block_access_callback',
    },
    title: {},
    main_menu: { }
  },
  navigation: {
//    category_navigation:{
//      access_callback: 'bsqzchina_category_home_link_block_access_callback',
//    }
  },
  content: {
//    category_navigation:{
//      access_callback: 'bsqzchina_category_home_link_block_access_callback',
//    },
//    bsqzchina_menu: {
//      access_callback: 'bsqzchina_category_home_link_block_access_callback',
//      options: {
//        attributes:{
//          'class':'bsqzchina-nav-slide'
//        }
//      }
//    },
    bsqzbanner: {
      access_callback: 'bsqzchina_front_block_access_callback'
    },
//    bsqzchina_menu: {},
    main: {}
  },
  footer: {
//    powered_by_lu: {},
    goto_category_list:{},
  }
};


/****************************************************|
 * Region Menu Links - http://drupalgap.org/node/173 |
 ****************************************************/
drupalgap.settings.menus.regions = {}; // Do not remove this line.

// Header Region Links
drupalgap.settings.menus.regions['header'] = {
  links:[
//    {
//      title: '全球戏闻',
//      path: 'global_news',
//      options: {
//        attributes: {
//          'class': 'test-class',
//        }
//      }
//    },
//    {
//      title: '角儿出没',
//      path: 'actor_event',
//      options: {
//        attributes: {
//          'class': 'test-class',
//        }
//      }
//    },
//    {
//      title: '戏曲内参',
//      path: 'opera_article',
//      options: {
//        attributes: {
//          'class': 'test-class',
//        }
//      }
//    },
//    {
//      title: '新国戏水牌',
//      path: 'i_opera_list',
//      options: {
//        attributes: {
//          'class': 'test-class',
//        }
//      }
//    },
//    {
//      title: '第二现场',
//      path: 'seconed_stage',
//      options: {
//        attributes: {
//          'class': 'test-class',
//        }
//      }
//    },
//    {
//      title: '戏曲大观园',
//      path: 'opera_grand',
//      options: {
//        attributes: {
//          'class': 'test-class',
//        }
//      }
//    },
//    {
//      title: 'i戏不晃范',
//      path: 'i_opera_model',
//      options: {
//        attributes: {
//          'class': 'test-class',
//        }
//      }
//    },
//    {
//      title: 'i戏不晃范',
//      path: 'i_opera_model',
//      options: {
//        attributes: {
//          'class': 'test-class',
//        }
//      }
//    },
    /* Main Menu Popup Menu Button */
//    {
//      options: {
//        popup: true,
//        popup_delta: 'main_menu',
//        attributes: {
//          'class': 'ui-btn-left',
//          'data-icon': 'bars'
//        }
//      }
//    },
    /* Home Button */
//    {
//      path: '',
//      options: {
//        attributes: {
//          'data-icon': 'home',
//          'data-iconpos': 'notext',
//          'class': 'ui-btn-left'
//        }
//      },
//      pages: {
//        value: [''],
//        mode: 'exclude'
//      }
//    },
    /* Anonymous User Popup Menu Button */
//    {
//      options: {
//        popup: true,
//        popup_delta: 'user_menu_anonymous',
//        attributes: {
//          'class': 'ui-btn-right',
//          'data-icon': 'user'
//        }
//      },
//      roles: {
//        value: ['anonymous user'],
//        mode: 'include',
//      }
//    },
    /* Authenticated User Popup Menu Button */
//    {
//      options: {
//        popup: true,
//        popup_delta: 'user_menu_authenticated',
//        attributes: {
//          'class': 'ui-btn-right',
//          'data-icon': 'user'
//        }
//      },
//      roles: {
//        value: ['authenticated user'],
//        mode: 'include',
//      }
//    }    
  ]
};

// Footer Region Links
drupalgap.settings.menus.regions['footer'] = {
  links: [
    /* Back Button */
    {
      options: {
        attributes: {
          'data-icon': 'back',
          'data-iconpos': 'notext',
          'class': 'back-bsqzchina ',
          'onclick': 'javascript:drupalgap_back();'
        }
      },
      pages: {
        value: [''],
        mode: 'exclude'
      }
    }
  ]
};

/*********|
 * Camera |
 **********/
drupalgap.settings.camera = {
  quality: 50
};

/***********************|
 * Performance Settings |
 ***********************/
drupalgap.settings.cache = {}; // Do not remove this line.

// Theme Registry - Set to true to load the page.tpl.html contents from cache.
drupalgap.settings.cache.theme_registry = true;

