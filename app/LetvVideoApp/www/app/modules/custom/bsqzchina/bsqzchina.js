/**
 * Implements hook_menu().
 */
function bsqzchina_menu() {
  try {
    var items = {};
//    items['bsqzchina_front'] = {
//      page_callback: 'bsqzchina_front_page'
//    };
    items['bsqzchina_front'] = {
      title: '兵圣全智（北京）国际传媒',
      type: 'MENU_LOCAL_TASK',
      page_callback: 'bsqzchina_information_page',
      page_arguments: [1],
      title_callback: 'bsqzchina_information_title',
      title_arguments: [1],
      access_callback: 'bsqzchina_information_access',
      access_arguments: [1]
    };
    items['home_recommend_articles'] = {
      title: '今日推荐',
      page_callback: 'bsqzchina_home_recommend_articles_page',
//      pageshow: 'bsqzchina_recommend_articles_pageshow'
//      page_callback: 'my_module_articles_page',
//      pageshow: 'my_module_articles_pageshow'
    };
    
    items['recommend_articles'] = {
      title: '热门推荐',
      page_callback: 'bsqzchina_recommend_articles_page',
      pageshow: 'bsqzchina_recommend_articles_pageshow'
    };
    items['global_news'] = {
      title: '全球戏闻',
      type: 'MENU_LOCAL_TASK',
      page_callback: 'bsqzchina_global_news_page',
    };
    items['actor_event'] = {
      title: '角儿出没',
      type: 'MENU_LOCAL_TASK',
      page_callback: 'bsqzchina_actor_event_page',
    };
    items['opera_article'] = {
      title: '戏曲内参',
      type: 'MENU_LOCAL_TASK',
      page_callback: 'bsqzchina_opera_article_page',
    };
    items['i_opera_list'] = {
      title: '新国戏水牌',
      type: 'MENU_LOCAL_TASK',
      page_callback: 'bsqzchina_i_opera_list_page',
    };
    
    items['seconed_stage'] = {
      title: '第二现场',
      type: 'MENU_LOCAL_TASK',
      page_callback: 'bsqzchina_seconed_stage_page',
    };
    items['opera_grand'] = {
      title: '戏曲大观园',
      type: 'MENU_LOCAL_TASK',
      page_callback: 'bsqzchina_opera_grand_page',
    };
    items['i_opera_model'] = {
      title: 'i戏不晃范',
      type: 'MENU_LOCAL_TASK',
      page_callback: 'bsqzchina_i_opera_model_page',
    };
    // 分享按钮.
    items['node/%/share'] = {
        title: '分享',
        type: 'MENU_LOCAL_TASK',
        page_callback: 'bsqzchina_share_page',
        page_arguments: [1],
//        title_callback: 'bsqzchina_share_page_title',
//        title_arguments: [1],
//        access_callback: 'bsqzchina_share_page_access',
//        access_arguments: [1],
      };
    return items;
  }
  catch (error) { console.log('bsqzchina_menu - ' + error); }
}

/**
*
*/
function bsqzchina_share_page(nid) {
 try {
   var content = {};
   // Build the widgets for your page...
   content['my_share'] = {
     theme: 'button',
     text: 'More info',
     attributes: {
       onclick: "drupalgap_alert('It is delicious!');"
     }
   };
   return content;
 }
 catch (error) { console.log('bsqzchina_share_page - ' + error); }
}

function bsqzchina_hello_world_page() {
  try {
    var content = {};
    content['my_intro_text'] = {
      markup: '<p>Hello App World!</p>'
    };
    return content;
  }
  catch (error) { console.log('bsqzchina_hello_world_page - ' + error); }
}

function bsqzchina_front_page() {
  try{
    var content = {};
    content ['bsqzchina_front'] = {
        markup: '<p>兵圣全智传媒</p>'
    };
    return content;
  }
  catch (error) { console.log('bsqzchina_front_page - ' + error); }
}

/**
 * Page callback.
 */
function my_module_articles_page() {
  var content = {};
  content['my_banner_article_list'] = {
    theme: 'jqm_item_list',
    title: '',
    items: [],
    attributes: { id: 'my_banner_article_list' }
  };
  content['my_article_list'] = {
      theme: 'jqm_item_list',
      title: '',
      items: [],
      attributes: { id: 'my_article_list' }
    };
  return content;
}

/**
 * Pageshow callback.
 */
function my_module_articles_pageshow() {
//  var path_to_view = 'app-recommend-banner-articles.json';
//  views_datasource_get_view_result(path_to_view, {
//      success: function (data) {
//        if (data.nodes.length > 0) {
//          var items = [];
//          $.each(data.nodes, function(index, object){
//              var node = object.node;
////              console.log(node);
//              var image = '';
//              var from = "<p class='from'>";
//              from = from + "<span class='category'>/ " + node.category + "</span>";
//              from = from + "&nbsp;来自&nbsp;<span class='author'>" + node.source_from + "</span>&nbsp;&nbsp;专题";
//              from = from + "</p>";
//              if (node.big_image.src) {
//                var image = {
//                  path: node.big_image.src,
//                  alt:node.title,
//                  title:node.title
//                };
//              }
//                
//              html = "<div class='big-image'>";
//              html = html + from;
//              html = html + theme('image', image);
//              html = html + "</div>";
//              html = html + "<h2>" + node.title + "</h2>";
//              html = html + "<p class='list-description'>" + node.description + "</p><hr/>";
//              var link = l(html, 'node/' + node.nid);
//              items.push(link);
//          });
//          drupalgap_item_list_populate('#my_banner_article_list', items);
//        }
//      }
//  });
    
  var path_to_view = 'app-recommend-articles.json';
  views_datasource_get_view_result(path_to_view, {
      success: function (data) {
//        console.log(data);
        if (data.nodes.length > 0) {
          var items = [];
          $.each(data.nodes, function(index, object){
              var node = object.node;
//              console.log(node);
              var from = "<p class='from'>";
              from = from + "<span class='category'>/ " + node.category + "</span>";
              from = from + "&nbsp;来自&nbsp;<span class='author'>" + node.source_from + "</span>&nbsp;&nbsp;专题";
              from = from + "</p>";
              if (node.list_image.src) {
                var image = {
                  path: node.list_image.src,
                  alt:node.title,
                  title:node.title,
                  class: 'list-image-left'
                };
                
                var icon = {
                  path: node.icon.src,
                  alt:node.title,
                  title:node.title,
                  class: 'list-image-left'
                };
                
                html = "<div class='big-image'>";
                html = html + from;
                html = html + "<div class='article-image' style='background-image: url("+node.list_image.src+");'>";
//                html = html + theme('image', image) + "</div>";
                html = html + "</div></div>";
                if (node.icon.src) {
                  html = html + "<div class='list-image-left'>" + theme('image', icon) + "</div>";
                }
                html = html + "<div class='list-image-right'>";
                html = html + "<h2>" + node.title + "</h2>";
                html = html + "<p class='list-description'>" + node.description + "</p>";
                html = html + "</div><hr/>";
//                var link = l(html, 'node/' + node.nid);
              
//                if (node.row_index == 1) {
//                  html = "<div class='list-image-left'>" + theme('image', image) + "</div>";
//                  html = html + "<div class='list-image-right'>";
//                  html = html + from;
//                  html = html + "<h2>" + node.title + "</h2>";
//                  html = html + "<p class='list-description'>" + node.description + "</p>";
//                  html = html + "</div><hr/>";
//                }
//                else {
//                  html = "<div class='list-image-right'>";
//                  html = html + from;
//                  html = html + "<h2>" + node.title + "</h2>";
//                  html = html + "<p class='list-description'>" + node.description + "</p>";
//                  html = html + "</div>";
//                  html = html + "<div class='list-image-left'>" + theme('image', image) + "</div><hr/>";
//                }
                
              } else {
                html = '';
                html = html + "<h2>" + node.title + "</h2>";
                html = html + "<p class='list-description'>" + node.description + "</p>";
              }
              var options = {
                attributes: {
                  class: 'row-' + node.row_index,
                }
              };
              
              var link = l(html, 'node/' + node.nid, options);
              items.push(link);
//              items.push(
//                l(node.title, 'node/' + node.nid)
//              );
          });
          drupalgap_item_list_populate('#my_article_list', items);
        }
      }
  });
}


/**
 * Pageshow callback.
 */
function bsqzchina_recommend_articles_pageshow() {
//  var path_to_view = 'app-recommend-banner-articles.json';
//  views_datasource_get_view_result(path_to_view, {
//      success: function (data) {
//        if (data.nodes.length > 0) {
//          var items = [];
//          $.each(data.nodes, function(index, object){
//              var node = object.node;
////              console.log(node);
//              var image = '';
//              var from = "<p class='from'>";
//              from = from + "<span class='category'>" + node.category + "</span>";
//              from = from + "&nbsp;来自&nbsp;<span class='author'>" + node.source_from + "</span>&nbsp;&nbsp;专题";
//              from = from + "</p>";
//              if (node.big_image.src) {
//                var image = {
//                  path: node.big_image.src,
//                  alt:node.title,
//                  title:node.title
//                };
//              }
//                
//              html = "<div class='big-image'>";
//              html = html + from;
//              html = html + theme('image', image);
//              html = html + "</div>";
//              html = html + "<h2>" + node.title + "</h2>";
//              html = html + "<p class='list-description'>" + node.description + "</p>";
//              var link = l(html, 'node/' + node.nid);
//              items.push(link);
//          });
//          drupalgap_item_list_populate('#recommend_banner_articles_list', items);
//        }
//      }
//  });
  var path_to_view = 'app-recommend-articles.json';
  views_datasource_get_view_result(path_to_view, {
      success: function (data) {
//        console.log(data);
        if (data.nodes.length > 0) {
          var items = [];
          $.each(data.nodes, function(index, object){
              var node = object.node;
              var from = "<p class='from'>";
              from = from + "<span class='category'>" + node.category + "</span>";
              from = from + "&nbsp;来自&nbsp;<span class='author'>" + node.source_from + "</span>&nbsp;&nbsp;专题";
              from = from + "</p>";
              if (node.list_image.src) {
                var image = {
                  path: node.list_image.src,
                  alt:node.title,
                  title:node.title,
                  class: 'list-image-left'
                };
              }
              
              html = "<div class='list-image-left'>" + theme('image', image) + "</div>";
              html = html + "<div class='list-image-right'>";
              html = html + from;
              html = html + "<h2>" + node.title + "</h2>";
              html = html + "<p class='list-description'>" + node.description + "</p>";
              html = html + "</div>";
              var link = l(html, 'node/' + node.nid);
              items.push(link);
//              items.push(
//                l(node.title, 'node/' + node.nid)
//              );
          });
          drupalgap_item_list_populate('#recommend_articles_list', items);
        }
      }
  });
}

/**
 *
 */
function bsqzchina_information_page(uid) {
  try {
    var content = {};
    content['information_articles'] = {
      theme: 'view',
      format: 'ul',
      pager_pos: 'bottom',
      path: '/information_list', /* the path to the View in Drupal */
      row_callback: 'bsqzchina_information_list_row',
      empty_callback: 'bsqzchina_information_list_empty',
      attributes: {
        id: 'user_articles_view_' + uid
      }
    };
    
//    content['city_eye'] = {
//      theme: 'view',
//      format: 'ul',
//      path: '/city_eye.json', /* the path to the View in Drupal */
//      row_callback: 'bsqzchina_city_eye_list_row',
//      empty_callback: 'bsqzchina_city_eye_list_empty',
//      attributes: {
//        id: 'user_articles_view_' + uid
//      }
//    };
    return content;
  }
  catch (error) { console.log('bsqzchina_information_page - ' + error); }
}

/**
*
*/
function bsqzchina_banner_list() {
 try {
   var content = {};
   content['banner_list'] = {
     theme: 'view',
     format: 'div',
     pager_pos: 'bottom',
     path: '/banner.json', /* the path to the View in Drupal */
     row_callback: 'bsqzchina_banner_list_row',
     empty_callback: 'bsqzchina_banner_list_empty',
     attributes: {
       id: 'slider',
       class: 'swipe'
     }
   };
   return content;
 }
 catch (error) { console.log('bsqzchina_information_page - ' + error); }
}

/**
*
*/
function bsqzchina_banner_list_row(view, row) {
 try {
   var image = {
       path: row.imageurl,
       alt:'Avatar',
       title:row.title
     };
   var html = theme('image', image);
   return html;
 }
 catch (error) { console.log('bsqzchina_banner_list_row - ' + error); }
}

/**
*
*/
function bsqzchina_banner_list_empty(view) {
 try {
   return 'Sorry, no banner were found.';
 }
 catch (error) { console.log('bsqzchina_information_list_empty - ' + error); }
}


/**
*
*/
function bsqzchina_information_list_row(view, row) {
 try {
   return l(row.name, row.link);
 }
 catch (error) { console.log('bsqzchina_information_list_row - ' + error); }
}

/**
*
*/
function bsqzchina_information_list_empty(view) {
 try {
   return '彈藥補充中！';
 }
 catch (error) { console.log('bsqzchina_information_list_empty - ' + error); }
}

/**
 *
 */
function bsqzchina_information_page_access(node) {
  try {
    // Only show the local task on article nodes, that have the word "taco" in
    // the title.
    return true;
  }
  catch (error) { console.log('bsqzchina_information_page_access - ' + error); }
}

/**
*
*/
function bsqzchina_information_title(callback, uid) {
 try {
   callback.call(null, "兵圣全智国际传媒");
 }
 catch (error) { console.log('bsqzchina_information_title - ' + error); }
}

/**
*
*/
function bsqzchina_information_access(account) {
 try {
     return true;
 }
 catch (error) { console.log('bsqzchina_information_access - ' + error); }
}

/**
 * Implements hook_block_info().
 * @return {Object}
 */
function bsqzchina_block_info() {
    // System blocks.
    var blocks = {
      'powered_by_lu': {
        'delta': 'powered_by_lu',
        'module': 'bsqzchina'
      },
      'bsqzbanner': {
        'delta': 'bsqzbanner',
        'module': 'bsqzchina'
      },
      'goto_category_list': {
        'delta': 'goto_category_list',
        'module': 'bsqzchina'
      },
      'share_links_list': {
        'delta': 'share_links_list',
        'module': 'bsqzchina'
      },
      'category_navigation': {
        'delta': 'category_navigation',
        'module': 'bsqzchina'
      }
    };
    // Make additional blocks for each system menu.
    var system_menus = menu_list_system_menus();
    $.each(system_menus, function(menu_name, menu) {
        var block_delta = menu.menu_name;
        blocks[block_delta] = {
          name: block_delta,
          delta: block_delta,
          module: 'menu'
        };
    });
    return blocks;
}

/**
 * Implements hook_block_view().
 * @param {String} delta
 * @return {String}
 */
function bsqzchina_block_view(delta) {
  try {
    switch (delta) {
      case 'bsqzbanner':

        var path_to_view = 'app-recommend-banner-articles.json';
        var html = '<div id="home-slider" class="swiper-container">';
        html += '<div class="swiper-wrapper">';
        views_datasource_get_view_result(path_to_view, {
            success: function (data) {
//              html += '<div class="swiper-slide">some test 1</div>';
//              console.log(data);
//              if (data.nodes.length > 0) {
                $.each(data.nodes, function(index, object){
                    var node = object.node;
                    if (node.big_image.src) {
                      var image = {
                        path: node.big_image.src,
                        alt:node.title,
                        title:node.title
                      };
                    }
                    var image_html = theme('image', image);
                    var link = l(image_html, 'node/' + node.nid);
//                    console.log(link);
                    html += '<div class="swiper-slide">' +link+ '</div>';
                });
                $("#home-slider .swiper-wrapper").append(html);
//                console.log(html);
//              }
            }
        });
        
//        console.log(html);
        
//        html += '<div class="swiper-slide">some test end</div>';
        html += '</div>';
        html += '<div class="swiper-pagination"></div>';
        html += '<div class="swiper-button-next"></div>';
        html += '<div class="swiper-button-prev"></div>';
        html += '</div>';
        
//        var module_path = Drupal.settings.site_path + "/" + Drupal.settings.file_public_path;
//        var module_path = base_url + drupalgap_get_path('module', 'bsqzchina');
        
//        var image_1_html = theme('image', { path: module_path + "/banner1.jpg" });
//        var image_2_html = theme('image', { path: module_path + "/banner2.jpg" });
//        var image_3_html = theme('image', { path: module_path + "/banner3.jpg" });
//        var link1 = l(image_1_html, 'node/1');
//        var link2 = l(image_2_html, 'node/2');
//        var link3 = l(image_3_html, 'node/17');
        
//        var options = { attributes: { } };
//        var image_1_html_custom = '<img src="'+module_path + "/banner1.jpg"+'" style="width: 320px !important;height: 79px !important;" />';
//        
//        options.attributes['style'] = ' display: block; ';
//        
//        var link4 = l(image_1_html_custom, 'node/', options);
        
//        var html = '<div id="home-slider" class="swiper-container">';
//        html += '<div class="swiper-wrapper">';
//        html += '<div class="swiper-slide">' +link1+ '</div>';
//        html += '<div class="swiper-slide">' +link2+ '</div>';
//        html += '<div class="swiper-slide">' +link3+ '</div>';
//        html += '</div>';
//        html += '<div class="swiper-pagination"></div>';
//        html += '<div class="swiper-button-next"></div>';
//        html += '<div class="swiper-button-prev"></div>';
//        html += '</div>';
//        html += drupalgap_jqm_page_event_script_code({
//            page_id: drupalgap_get_page_id(),
//            jqm_page_event: 'pageshow',
//            jqm_page_event_callback: 'bsqzchina_swipe_banner',
//            jqm_page_event_args: JSON.stringify({
//                hello: 'Hi!'
//            })
//        });
        return html;
        break;
      case 'powered_by_lu':
        var power_by_url = l('兵圣全智（北京）国际文化传媒', 'node/18');;
        return '<p style="text-align: center;margin: 1em auto;">' + t('©') + ' ' +
        power_by_url +
        '</p>';
        break;
      case 'goto_category_list':
//        var button_link = bl('My Button Link', 'node/1');
        var button_link = bl('<>', 'recommend_articles', {attributes: { 'class': 'category-home-link ui-btn-right', 'data-role': 'button', 'data-icon' : 'home', 'data-iconpos': 'notext' } });
//        var button_link = bl('My Button Link', 'node/456');

//        var my_link = l('<', 'user-listing', {transition:'flip'});
        return button_link;
      case 'share_links_list':
        var share_links = '<div class="bdsharebuttonbox" data-tag="share_1">';
      share_links = + share_links + '<a class="bds_mshare" data-cmd="mshare"></a>';
      share_links = + share_links + '    <a class="bds_qzone" data-cmd="qzone" href="#"></a>';
      share_links = + share_links + ' <a class="bds_tsina" data-cmd="tsina"></a>';
      share_links = + share_links + '<a class="bds_baidu" data-cmd="baidu"></a>';
      share_links = + share_links + '<a class="bds_renren" data-cmd="renren"></a>';
      share_links = + share_links + '<a class="bds_tqq" data-cmd="tqq"></a>';
      share_links = + share_links + '<a class="bds_more" data-cmd="more">更多</a>';
      share_links = + share_links + '<a class="bds_count" data-cmd="count"></a>';
      share_links = + share_links + '</div>';
        return share_links;
      case 'category_navigation':
        // http://stackoverflow.com/questions/18235368/swipe-js-display-3-slides-at-a-time
//        navation_link = '<div class="slide" id="jCateNav"><ul class="slide-box layer-list2 cate-nav">';
        
//        navation_link = '<div id="swiper-navation-bar" class="swiper-navation-bar">';
//        navation_link += '<div id="aajCateNav" class="searchPage swiper-wrapper-nav">';
//        navation_link += '<div class="swiper-slide">' + l('全球戏闻', 'global_news') + '</div>';
//        navation_link += '<div class="swiper-slide">' + l('角儿出没', 'actor_event') + '</div>';
//        navation_link += '<div class="swiper-slide">' + l('戏曲内参', 'opera_article') + '</div>';
//        navation_link += '<div class="swiper-slide">' + l('新国戏水牌', 'i_opera_list') + '</div>';
//        navation_link += '<div class="swiper-slide">' + l('第二现场', 'seconed_stage') + '</div>';
//        navation_link += '<div class="swiper-slide">' + l('戏曲大观园', 'opera_grand') + '</div>';
//        navation_link += '<div class="swiper-slide">' + l('i戏不晃范', 'i_opera_model') + '</div>';
//        navation_link += '</div></div>';
        
        //http://demos.jquerymobile.com/1.3.0/docs/examples/swipe/swipe-page.html
//        navation_link = '<div data-role="page" id="city" class="demo-page" data-dom-cache="true" data-theme="a" data-prev="prevCity" data-next="nextCity" data-url="city">';
//        navation_link += '      <!-- "city", "prevCity" and "nextCity" are used as placeholders and contain the name of the applicable city in our demo files. -->';
//        navation_link += '    <div data-role="header" data-position="fixed" data-fullscreen="true" data-id="hdr" data-tap-toggle="false">';
//        navation_link += '        <h1>City</h1>';
//        navation_link += '        <a href="swipe-page.html" data-direction="reverse" data-icon="delete" data-iconpos="notext" data-shadow="false" data-icon-shadow="false">Back</a>';
//        navation_link += '    </div><!-- /header -->';
//        navation_link += '    <div data-role="content">';
//        navation_link += '        <div id="trivia-city" class="trivia ui-content" data-role="popup" data-position-to="window" data-tolerance="50,30,30,30" data-theme="d">';
//        navation_link += '            <a href="#" data-rel="back" data-role="button" data-theme="a" data-icon="delete" data-iconpos="notext" class="ui-btn-right">Close</a>';
//        navation_link += '            <p>Here some text.</p>';
//        navation_link += '        </div><!-- /popup -->';
//        navation_link += '    </div><!-- /content -->';
//        navation_link += '    <div data-role="footer" data-position="fixed" data-fullscreen="true" data-id="ftr" data-tap-toggle="false">';
//        navation_link += '        <div data-role="controlgroup" class="control ui-btn-left" data-type="horizontal" data-mini="true">';
//        navation_link += '            <a href="#" class="prev" data-role="button" data-icon="arrow-l" data-iconpos="notext" data-theme="d">Previous</a>';
//        navation_link += '            <a href="#" class="next" data-role="button" data-icon="arrow-r" data-iconpos="notext" data-theme="d">Next</a>';
//        navation_link += '        </div>';
//        navation_link += '        <a href="#trivia-city" data-rel="popup" class="trivia-btn ui-btn-right" data-role="button" data-icon="info" data-iconpos="left" data-theme="d" data-mini="true">Trivia</a>';
//        navation_link += '    </div><!-- /footer -->';
//        navation_link += '</div>';
        
//        navation_link += drupalgap_jqm_page_event_script_code({
//            page_id: drupalgap_get_page_id(),
//            jqm_page_event: 'pageshow',
//            jqm_page_event_callback: 'bsqzchina_swipe_navation',
//            jqm_page_event_args: JSON.stringify({
//                hello: 'Hi!'
//            })
//        });
        
        navation_link = '<div class="swiper-navation-nav">';
        navation_link += '<div class="swiper-wrapper">';
        navation_link += '<div class="swiper-slide">' + l('全球戏闻', 'global_news') + '</div>';
        navation_link += '<div class="swiper-slide">' + l('角儿出没', 'actor_event') + '</div>';
        navation_link += '<div class="swiper-slide">' + l('戏曲内参', 'opera_article') + '</div>';
        navation_link += '<div class="swiper-slide">' + l('新国戏水牌', 'i_opera_list') + '</div>';
        navation_link += '<div class="swiper-slide">' + l('第二现场', 'seconed_stage') + '</div>';
        navation_link += '<div class="swiper-slide">' + l('戏曲大观园', 'opera_grand') + '</div>';
        navation_link += '<div class="swiper-slide">' + l('i戏不晃范', 'i_opera_model') + '</div>';
        navation_link += '</div>';
//        navation_link += '<!-- Add Pagination -->';
//        navation_link += '<div class="swiper-pagination"></div>';
        navation_link += '</div>';

    
        return navation_link;
      default:
        return '';
        break;
    }
  }
  catch (error) { console.log('system_block_info - ' + error); }
}

function bsqzchina_front_block_access_callback(options) {
  // Only show the block to logged in users on the pizza page.
//  console.log(options.path);
  if (options.path == 'home_recommend_articles') {
    return true;
  }
  
  if (options.path == "bsqzchina_front") {
    return true;
  }
  return false;
}

function bsqzchina_swipe_banner() {
  window.mySwipe = Swipe(document.getElementById('slider'));
}

function bsqzchina_swipe_navation() {
  console.log('page show swiper show.');
//  $("#jCateNav ul.cate-nav li").width(menuWidth);

//  $( document ).on( "pageinit", "[data-role='page'].searchPage", function() {
//    var page = "#" + $( this ).attr( "id" );
//    $( document ).on( "swipeleft", page, function() {
//      console.log('swipe left');
//    });
//    
//    $( document ).on( "swiperight", page, function() {
//      console.log('swipe right');
//    });
//  });
  
}

/**
 * Implements hook_deviceready().
 */
function bsqzchina_deviceready() {
//  console.log('try hook menu links title.');
  try {
    drupalgap.menu_links['taxonomy/term/%'].title = '信息列表';
//    drupalgap.menu_links['user/login'].title = 'Welcome';
  }
  catch (error) { console.log('bsqzchina_deviceready - ' + error); }
}

/**
*
*/
function bsqzchina_city_eye_list_row(view, row) {
  dpm(row);
  try {
    return l(row.title, '/node/' + row.nid);
  }
  catch (error) { console.log('bsqzchina_city_eye_list_row - ' + error); }
}

/**
*
*/
function bsqzchina_city_eye_list_empty(view) {
  try {
    return 'Sorry, no article were found.';
  }
  catch (error) { console.log('bsqzchina_city_eye_list_empty - ' + error); }
}

function bsqzchina_home_recommend_articles_page() {
  try {
    var content = {};
//    content['recommend_articles_list_banner'] = {
//      theme: 'view',
//      format: 'ul',
//      pager_pos: 'bottom',
//      path: 'app-recommend-banner-articles.json', /* the path to the view in Drupal */
//      row_callback: 'bsqzchina_home_recommend_articles_banner_list_row',
//      empty_callback: 'bsqzchina_home_recommend_articles_banner_list_empty',
//      attributes: {
//        id: 'bsqzchina_home_recommend_articles_list_view'
//      }
//    },
    content['recommend_articles_list'] = {
      theme: 'view',
      format: 'ul',
      pager_pos: 'bottom',
      path: 'app-recommend-articles.json', /* the path to the view in Drupal */
      row_callback: 'bsqzchina_home_recommend_articles_list_row',
      empty_callback: 'bsqzchina_home_recommend_articles_list_empty',
      attributes: {
        id: 'bsqzchina_home_recommend_articles_list_view_list'
      }
    };
//    content['recommend_articles_list_banner'] = {
//      theme: 'view',
//      format: 'ul',
//      pager_pos: 'bottom',
//      path: 'app-recommend-banner-articles.json', /* the path to the view in Drupal */
//      row_callback: 'bsqzchina_home_recommend_articles_banner_list_row',
//      empty_callback: 'bsqzchina_home_recommend_articles_banner_list_empty',
//      attributes: {
//        id: 'bsqzchina_home_recommend_articles_list_view'
//      }
//    },
//    content['my_intro_text'] = {
//      theme: 'view',
//      format: 'ul',
//      pager_pos: 'bottom',
//      path: 'app-recommend-articles.json', /* the path to the view in Drupal */
//      row_callback: 'bsqzchina_home_recommend_articles_list_row',
//      empty_callback: 'bsqzchina_home_recommend_articles_list_empty',
//      attributes: {
//        id: 'bsqzchina_home_recommend_articles_list_view_list'
//      }
//      },
//      content['youtubelink'] = {
//        theme: 'button_link',
//        text: t('App Tutorial Video'),
//        path: 'http://www.youtube.com',
//        options: {InAppBrowser: true}
//      },
//      content['signup'] = {
//        theme: 'button_link',
//        text: t('Email Signup'),
//        path: 'user/register',
//      },
//      content['login'] = {
//        theme: 'button_link',
//        text: t('Login'),
//        path: 'user/login',
//      };
    
    // http://drupalgap.org/node/251
    console.log('views paging.');
    console.log(content);
    
    // Set up a swipe handler to be included in the page content.
//    var page_id = drupalgap_get_page_id();
//    content['my_swipe_handler'] = {
//      markup: drupalgap_jqm_page_event_script_code({
//          page_id: page_id,
//          jqm_page_event: 'pageshow',
//          jqm_page_event_callback: 'bsqzchina_page_swiperight',
//          jqm_page_event_args: JSON.stringify({
//              page_id: page_id
//          })
//      })
//    };
    
    return content;
  }
  catch (error) { console.log('bsqzchina_recommend_articles_page - ' + error); }
}

/**
 * A swiperight handler function for the simple page.
 */
function bsqzchina_page_swiperight(options) {
  try {
    $('#' + options.page_id).on('swiperight', function(event) {
//        drupalgap_goto('recommend_articles');
        console.log('get page id');
//        console.log(options.page_id);
//      console.log('swiper to right.');
//        drupalgap_back();
    });
  }
  catch (error) { console.log('bsqzchina_page_swiperight - ' + error); }
}
function bsqzchina_home_recommend_articles_banner_list_row(view, row) {
  try {
    var html;
    var from = "<p class='from'>";
    from = from + "<span class='category'>" + row.category + "</span>";
    from = from + "&nbsp;来自&nbsp;<span class='author'>" + row.source_from + "</span>&nbsp;&nbsp;专题";
    from = from + "</p>";
    if (row.big_image.src) {
      var image = {
        path: row.big_image.src,
        alt:row.title,
        title:row.title
      };
      html = "<div class='big-image'>";
      html = html + from;
      html = html + theme('image', image);
      html = html + "</div>";
      html = html + "<h2>" + row.title + "</h2>";
      html = html + "<p>" + row.description + "</p>";
    } else if (row.list_image.src) {
      var image = {
          path: row.list_image.src,
          alt:row.title,
          title:row.title,
          class: 'list-image-left'
        };
        html = "<div class='list-image-left'>" + theme('image', image) + "</div>";
        html = html + "<div class='list-image-right'>";
        html = html + from;
        html = html + "<h2>" + row.title + "</h2>";
        html = html + "<p>" + row.description + "</p>";
        html = html + "</div>";
    }
    else {
      html = '';
      html = html + "<h2>" + row.title + "</h2>";
      html = html + "<p>" + row.description + "</p>";
    }
    
    var link = l(html, 'node/' + row.nid);
//    html = html + link;
    
    return link;
//    return l(row.title, 'node/' + row.nid);
  }
  catch (error) { console.log('bsqzchina_home_recommend_articles_banner_list_row - ' + error); }
}

function bsqzchina_home_recommend_articles_banner_list_empty(view) {
  try {
    return 'Sorry, no banner articles were found.';
  }
  catch (error) { console.log('bsqzchina_home_recommend_articles_banner_list_empty - ' + error); }
}

function bsqzchina_home_recommend_articles_list_empty(view) {
  try {
    return '彈藥補充中！';
  }
  catch (error) { console.log('bsqzchina_home_recommend_articles_list_empty - ' + error); }
}

function bsqzchina_home_recommend_articles_list_row(view, row) {
  try {
    var html;
    console.log(row);
    var from = "<p class='from'>";
    from = from + "<span class='category'>" + row.category + "</span>";
    from = from + "&nbsp;来自&nbsp;<span class='author'>" + row.source_from + "</span>&nbsp;&nbsp;专题";
    from = from + "</p>";
    if (row.big_image.src) {
      var image = {
        path: row.big_image.src,
        alt:row.title,
        title:row.title
      };
      html = "<div class='big-image'>";
      html = html + from;
      html = html + theme('image', image);
      html = html + "</div>";
      html = html + "<h2>" + row.title + "</h2>";
      html = html + "<p>" + row.description + "</p>";
    } else if (row.list_image.src) {
      var image = {
          path: row.list_image.src,
          alt:row.title,
          title:row.title,
          class: 'list-image-left'
        };
        html = "<div class='list-image-left'>" + theme('image', image) + "</div>";
        html = html + "<div class='list-image-right'>";
        html = html + from;
        html = html + "<h2>" + row.title + "</h2>";
        html = html + "<p>" + row.description + "</p>";
        html = html + "</div>";
    }
    else {
      html = '';
      html = html + "<h2>" + row.title + "</h2>";
      html = html + "<p>" + row.description + "</p>";
    }
    
    var link = l(html, 'node/' + row.nid);
//    html = html + link;
    
    return link;
//    return l(row.title, 'node/' + row.nid);
  }
  catch (error) { console.log('bsqzchina_home_recommend_articles_list_row - ' + error); }
}


function bsqzchina_recommend_articles_page() {
  try {

    var content = {};
    content['recommend_banner_articles_list'] = {
      theme: 'jqm_item_list',
      title: '',
      items: [],
      attributes: { id: 'recommend_banner_articles_list' }
    };
    content['recommend_articles_list'] = {
      theme: 'jqm_item_list',
      title: '',
      items: [],
      attributes: { id: 'recommend_articles_list' }
    };
    return content;
  }
  catch (error) { console.log('bsqzchina_recommend_articles_page - ' + error); }
}

function bsqzchina_recommend_articles_list_empty(view) {
  try {
    return '彈藥補充中！';
  }
  catch (error) { console.log('my_module_articles_list_empty - ' + error); }
}

function bsqzchina_recommend_articles_list_row(view, row) {
  try {
    var html;
    var from = "<p class='from'>";
    from = from + "<span class='category'>" + row.category + "</span>";
    from = from + "&nbsp;来自&nbsp;<span class='author'>" + row.source_from + "</span>&nbsp;&nbsp;专题";
    from = from + "</p>";
    if (row.big_image.src) {
      var image = {
        path: row.big_image.src,
        alt:row.title,
        title:row.title
      };
      html = "<div class='big-image'>";
      html = html + from;
      html = html + theme('image', image);
      html = html + "</div>";
      html = html + "<h2>" + row.title + "</h2>";
      html = html + "<p>" + row.description + "</p>";
    } else if (row.list_image.src) {
      var image = {
          path: row.list_image.src,
          alt:row.title,
          title:row.title,
          class: 'list-image-left'
        };
        html = "<div class='list-image-left'>" + theme('image', image) + "</div>";
        html = html + "<div class='list-image-right'>";
        html = html + from;
        html = html + "<h2>" + row.title + "</h2>";
        html = html + "<p>" + row.description + "</p>";
        html = html + "</div>";
    }
    else {
      html = '';
      html = html + "<h2>" + row.title + "</h2>";
      html = html + "<p>" + row.description + "</p>";
    }
    
    var link = l(html, 'node/' + row.nid);
//    html = html + link;
    
    return link;
//    return l(row.title, 'node/' + row.nid);
  }
  catch (error) { console.log('my_module_articles_list_row - ' + error); }
}

function bsqzchina_global_news_page() {
  try {
    var content = {};
    content['global_news_list'] = {
      theme: 'view',
      format: 'ul',
      pager_pos: 'bottom',
      path: 'global-news.json', /* the path to the view in Drupal */
      row_callback: 'bsqzchina_global_news_list_row',
      empty_callback: 'bsqzchina_global_news_list_empty',
      attributes: {
        id: 'bsqzchina_global_news_list_view'
      }
    };
    return content;
  }
  catch (error) { console.log('bsqzchina_global_news_page - ' + error); }
}

function bsqzchina_global_news_list_row(view, row) {
    try {
      var html;
      var from = "<p class='from'>";
      from = from + "<span class='category'>" + row.category + "</span>";
      from = from + "&nbsp;来自&nbsp;<span class='author'>" + row.source_from + "</span>&nbsp;&nbsp;专题";
      from = from + "</p>";
      if (row.big_image.src) {
        var image = {
          path: row.big_image.src,
          alt:row.title,
          title:row.title
        };
        html = "<div class='big-image'>";
        html = html + from;
        html = html + theme('image', image);
        html = html + "</div>";
        html = html + "<h2>" + row.title + "</h2>";
        html = html + "<p>" + row.description + "</p>";
      } else if (row.list_image.src) {
        var image = {
            path: row.list_image.src,
            alt:row.title,
            title:row.title,
            class: 'list-image-left'
          };
          html = "<div class='list-image-left'>" + theme('image', image) + "</div>";
          html = html + "<div class='list-image-right'>";
          html = html + from;
          html = html + "<h2>" + row.title + "</h2>";
          html = html + "<p>" + row.description + "</p>";
          html = html + "</div>";
      }
      else {
        html = '';
        html = html + "<h2>" + row.title + "</h2>";
        html = html + "<p>" + row.description + "</p>";
      }
      var link = l(html, 'node/' + row.nid);     
      return link;
    }
    catch (error) { console.log('bsqzchina_global_news_list_row - ' + error); }
 
}

function bsqzchina_global_news_list_empty(view) {
  try {
    return '彈藥補充中！';
  }
  catch (error) { console.log('my_module_articles_list_empty - ' + error); }
}

function bsqzchina_actor_event_page() {
  try {
    var content = {};
    content['actor_event_list'] = {
      theme: 'view',
      format: 'ul',
      pager_pos: 'bottom',
      path: 'actor-event.json', /* the path to the view in Drupal */
      row_callback: 'bsqzchina_actor_event_list_row',
      empty_callback: 'bsqzchina_actor_event_list_empty',
      attributes: {
        id: 'bsqzchina_actor_event_list_view'
      }
    };
    return content;
  }
  catch (error) { console.log('bsqzchina_actor_event_page - ' + error); }
}

function bsqzchina_actor_event_list_row(view, row) {
  try {
    var html;
    var from = "<p class='from'>";
    from = from + "<span class='category'>" + row.category + "</span>";
    from = from + "&nbsp;来自&nbsp;<span class='author'>" + row.source_from + "</span>&nbsp;&nbsp;专题";
    from = from + "</p>";
    if (row.big_image.src) {
      var image = {
        path: row.big_image.src,
        alt:row.title,
        title:row.title
      };
      html = "<div class='big-image'>";
      html = html + from;
      html = html + theme('image', image);
      html = html + "</div>";
      html = html + "<h2>" + row.title + "</h2>";
      html = html + "<p>" + row.description + "</p>";
    } else if (row.list_image.src) {
      var image = {
          path: row.list_image.src,
          alt:row.title,
          title:row.title,
          class: 'list-image-left'
        };
        html = "<div class='list-image-left'>" + theme('image', image) + "</div>";
        html = html + "<div class='list-image-right'>";
        html = html + from;
        html = html + "<h2>" + row.title + "</h2>";
        html = html + "<p>" + row.description + "</p>";
        html = html + "</div>";
    }
    else {
      html = '';
      html = html + "<h2>" + row.title + "</h2>";
      html = html + "<p>" + row.description + "</p>";
    }
    var link = l(html, 'node/' + row.nid);     
    return link;
  }
  catch (error) { console.log('bsqzchina_actor_event_list_row - ' + error); }

}

function bsqzchina_actor_event_list_empty(view) {
  try {
    return '彈藥補充中！';
  }
  catch (error) { console.log('bsqzchina_actor_event_list_empty - ' + error); }
}

function bsqzchina_opera_article_page() {
  try {
    var content = {};
    content['opera_article_list'] = {
      theme: 'view',
      format: 'ul',
      pager_pos: 'bottom',
      path: 'opera－article.json', /* the path to the view in Drupal */
      row_callback: 'bsqzchina_opera_article_list_row',
      empty_callback: 'bsqzchina_opera_article_list_empty',
      attributes: {
        id: 'bsqzchina_opera_article_list_view'
      }
    };
    return content;
  }
  catch (error) { console.log('bsqzchina_opera_article_page - ' + error); }
}

function bsqzchina_opera_article_list_row(view, row) {
  try {
    var html;
    var from = "<p class='from'>";
    from = from + "<span class='category'>" + row.category + "</span>";
    from = from + "&nbsp;来自&nbsp;<span class='author'>" + row.source_from + "</span>&nbsp;&nbsp;专题";
    from = from + "</p>";
    if (row.big_image.src) {
      var image = {
        path: row.big_image.src,
        alt:row.title,
        title:row.title
      };
      html = "<div class='big-image'>";
      html = html + from;
      html = html + theme('image', image);
      html = html + "</div>";
      html = html + "<h2>" + row.title + "</h2>";
      html = html + "<p>" + row.description + "</p>";
    } else if (row.list_image.src) {
      var image = {
          path: row.list_image.src,
          alt:row.title,
          title:row.title,
          class: 'list-image-left'
        };
        html = "<div class='list-image-left'>" + theme('image', image) + "</div>";
        html = html + "<div class='list-image-right'>";
        html = html + from;
        html = html + "<h2>" + row.title + "</h2>";
        html = html + "<p>" + row.description + "</p>";
        html = html + "</div>";
    }
    else {
      html = '';
      html = html + "<h2>" + row.title + "</h2>";
      html = html + "<p>" + row.description + "</p>";
    }
    var link = l(html, 'node/' + row.nid);     
    return link;
  }
  catch (error) { console.log('bsqzchina_opera_article_list_row - ' + error); }

}

function bsqzchina_opera_article_list_empty(view) {
  try {
    return '彈藥補充中！';
  }
  catch (error) { console.log('bsqzchina_opera_article_list_empty - ' + error); }
}

function bsqzchina_i_opera_list_page() {
  try {
    var content = {};
    content['i_opera_list_list'] = {
      theme: 'view',
      format: 'ul',
      pager_pos: 'bottom',
      path: 'i－opera－list.json', /* the path to the view in Drupal */
      row_callback: 'bsqzchina_i_opera_list_list_row',
      empty_callback: 'bsqzchina_i_opera_list_list_empty',
      attributes: {
        id: 'bsqzchina_i_opera_list_list_view'
      }
    };
    return content;
  }
  catch (error) { console.log('bsqzchina_i_opera_list_page - ' + error); }
}

function bsqzchina_i_opera_list_list_row(view, row) {
  try {
    var html;
    var from = "<p class='from'>";
    from = from + "<span class='category'>" + row.category + "</span>";
    from = from + "&nbsp;来自&nbsp;<span class='author'>" + row.source_from + "</span>&nbsp;&nbsp;专题";
    from = from + "</p>";
    if (row.big_image.src) {
      var image = {
        path: row.big_image.src,
        alt:row.title,
        title:row.title
      };
      html = "<div class='big-image'>";
      html = html + from;
      html = html + theme('image', image);
      html = html + "</div>";
      html = html + "<h2>" + row.title + "</h2>";
      html = html + "<p>" + row.description + "</p>";
    } else if (row.list_image.src) {
      var image = {
          path: row.list_image.src,
          alt:row.title,
          title:row.title,
          class: 'list-image-left'
        };
        html = "<div class='list-image-left'>" + theme('image', image) + "</div>";
        html = html + "<div class='list-image-right'>";
        html = html + from;
        html = html + "<h2>" + row.title + "</h2>";
        html = html + "<p>" + row.description + "</p>";
        html = html + "</div>";
    }
    else {
      html = '';
      html = html + "<h2>" + row.title + "</h2>";
      html = html + "<p>" + row.description + "</p>";
    }
    var link = l(html, 'node/' + row.nid);     
    return link;
  }
  catch (error) { console.log('bsqzchina_i_opera_list_list_row - ' + error); }

}

function bsqzchina_i_opera_list_list_empty(view) {
  try {
    return '彈藥補充中！';
  }
  catch (error) { console.log('bsqzchina_i_opera_list_list_empty - ' + error); }
}

function bsqzchina_seconed_stage_page() {
  try {
    var content = {};
    content['seconed_stage_list'] = {
      theme: 'view',
      format: 'ul',
      pager_pos: 'bottom',
      path: 'seconed－stage.json', /* the path to the view in Drupal */
      row_callback: 'bsqzchina_seconed_stage_list_row',
      empty_callback: 'bsqzchina_seconed_stage_list_empty',
      attributes: {
        id: 'bsqzchina_seconed_stage_list_view'
      }
    };
    return content;
  }
  catch (error) { console.log('bsqzchina_seconed_stage_page - ' + error); }
}

function bsqzchina_seconed_stage_list_row(view, row) {
  try {
    var html;
    var from = "<p class='from'>";
    from = from + "<span class='category'>" + row.category + "</span>";
    from = from + "&nbsp;来自&nbsp;<span class='author'>" + row.source_from + "</span>&nbsp;&nbsp;专题";
    from = from + "</p>";
    if (row.big_image.src) {
      var image = {
        path: row.big_image.src,
        alt:row.title,
        title:row.title
      };
      html = "<div class='big-image'>";
      html = html + from;
      html = html + theme('image', image);
      html = html + "</div>";
      html = html + "<h2>" + row.title + "</h2>";
      html = html + "<p>" + row.description + "</p>";
    } else if (row.list_image.src) {
      var image = {
          path: row.list_image.src,
          alt:row.title,
          title:row.title,
          class: 'list-image-left'
        };
        html = "<div class='list-image-left'>" + theme('image', image) + "</div>";
        html = html + "<div class='list-image-right'>";
        html = html + from;
        html = html + "<h2>" + row.title + "</h2>";
        html = html + "<p>" + row.description + "</p>";
        html = html + "</div>";
    }
    else {
      html = '';
      html = html + "<h2>" + row.title + "</h2>";
      html = html + "<p>" + row.description + "</p>";
    }
    var link = l(html, 'node/' + row.nid);     
    return link;
  }
  catch (error) { console.log('bsqzchina_seconed_stage_list_row - ' + error); }

}

function bsqzchina_seconed_stage_list_empty(view) {
  try {
    return '彈藥補充中！';
  }
  catch (error) { console.log('bsqzchina_seconed_stage_list_empty - ' + error); }
}

function bsqzchina_opera_grand_page() {
  try {
    var content = {};
    content['opera_grand_list'] = {
      theme: 'view',
      format: 'ul',
      pager_pos: 'bottom',
      path: 'opera－grand.json', /* the path to the view in Drupal */
      row_callback: 'bsqzchina_opera_grand_list_row',
      empty_callback: 'bsqzchina_opera_grand_list_empty',
      attributes: {
        id: 'bsqzchina_opera_grand_list_view'
      }
    };
    return content;
  }
  catch (error) { console.log('bsqzchina_opera_grand_page - ' + error); }
}

function bsqzchina_opera_grand_list_row(view, row) {
  try {
    var html;
    var from = "<p class='from'>";
    from = from + "<span class='category'>" + row.category + "</span>";
    from = from + "&nbsp;来自&nbsp;<span class='author'>" + row.source_from + "</span>&nbsp;&nbsp;专题";
    from = from + "</p>";
    if (row.big_image.src) {
      var image = {
        path: row.big_image.src,
        alt:row.title,
        title:row.title
      };
      html = "<div class='big-image'>";
      html = html + from;
      html = html + theme('image', image);
      html = html + "</div>";
      html = html + "<h2>" + row.title + "</h2>";
      html = html + "<p>" + row.description + "</p>";
    } else if (row.list_image.src) {
      var image = {
          path: row.list_image.src,
          alt:row.title,
          title:row.title,
          class: 'list-image-left'
        };
        html = "<div class='list-image-left'>" + theme('image', image) + "</div>";
        html = html + "<div class='list-image-right'>";
        html = html + from;
        html = html + "<h2>" + row.title + "</h2>";
        html = html + "<p>" + row.description + "</p>";
        html = html + "</div>";
    }
    else {
      html = '';
      html = html + "<h2>" + row.title + "</h2>";
      html = html + "<p>" + row.description + "</p>";
    }
    var link = l(html, 'node/' + row.nid);     
    return link;
  }
  catch (error) { console.log('bsqzchina_opera_grand_list_row - ' + error); }

}

function bsqzchina_opera_grand_list_empty(view) {
  try {
    return '彈藥補充中！';
  }
  catch (error) { console.log('bsqzchina_opera_grand_list_empty - ' + error); }
}

function bsqzchina_i_opera_model_page() {
  try {
    var content = {};
    content['i_opera_model_list'] = {
      theme: 'view',
      format: 'ul',
      pager_pos: 'bottom',
      path: 'i－opera－model.json', /* the path to the view in Drupal */
      row_callback: 'bsqzchina_i_opera_model_list_row',
      empty_callback: 'bsqzchina_i_opera_model_list_empty',
      attributes: {
        id: 'bsqzchina_i_opera_model_list_view'
      }
    };
    return content;
  }
  catch (error) { console.log('bsqzchina_i_opera_model_page - ' + error); }
}

function bsqzchina_i_opera_model_list_row(view, row) {
  try {
    var html;
    var from = "<p class='from'>";
    from = from + "<span class='category'>" + row.category + "</span>";
    from = from + "&nbsp;来自&nbsp;<span class='author'>" + row.source_from + "</span>&nbsp;&nbsp;专题";
    from = from + "</p>";
    if (row.big_image.src) {
      var image = {
        path: row.big_image.src,
        alt:row.title,
        title:row.title
      };
      html = "<div class='big-image'>";
      html = html + from;
      html = html + theme('image', image);
      html = html + "</div>";
      html = html + "<h2>" + row.title + "</h2>";
      html = html + "<p>" + row.description + "</p>";
    } else if (row.list_image.src) {
      var image = {
          path: row.list_image.src,
          alt:row.title,
          title:row.title,
          class: 'list-image-left'
        };
        html = "<div class='list-image-left'>" + theme('image', image) + "</div>";
        html = html + "<div class='list-image-right'>";
        html = html + from;
        html = html + "<h2>" + row.title + "</h2>";
        html = html + "<p>" + row.description + "</p>";
        html = html + "</div>";
    }
    else {
      html = '';
      html = html + "<h2>" + row.title + "</h2>";
      html = html + "<p>" + row.description + "</p>";
    }
    var link = l(html, 'node/' + row.nid);     
    return link;
  }
  catch (error) { console.log('bsqzchina_i_opera_model_list_row - ' + error); }

}

function bsqzchina_i_opera_model_list_empty(view) {
  try {
    return '彈藥補充中！';
  }
  catch (error) { console.log('bsqzchina_i_opera_model_list_empty - ' + error); }
}


/* Display category home link without recommend page */
function bsqzchina_category_home_link_block_access_callback(options) {
  // Only show the block to logged in users on the pizza page.
  switch (options.path) {
    case 'recommend_articles':
    case 'i_opera_model':
    case 'opera_grand':
    case 'seconed_stage':
    case 'i_opera_list':
    case 'opera_article':
    case 'actor_event': 
    case 'global_news':
      return true;
      break;
  }
//  if (options.path == 'recommend_articles') {
//    return true;
//  }
  return false;

}
