(function (_, Kotlin, $module$snabbdom_helpers_attachto, $module$snabbdom_modules_attributes, $module$snabbdom_modules_class, $module$snabbdom_modules_dataset, $module$snabbdom_modules_eventlisteners, $module$snabbdom_modules_hero, $module$snabbdom_htmldomapi, $module$snabbdom_modules_props, $module$snabbdom_modules_style, $module$snabbdom_thunk, $module$snabbdom_tovnode, $module$snabbdom_vnode) {
  'use strict';
  function attachTo(target, vnode) {
    return $module$snabbdom_helpers_attachto.default(target, vnode);
  }
  function get_0($receiver, key) {
    return _get($receiver, key);
  }
  function set($receiver, key, value) {
    _set($receiver, key, value);
  }
  function get_1($receiver, key) {
    return _get($receiver, key);
  }
  function set_0($receiver, key, value) {
    _set($receiver, key, value);
  }
  var attributesModule;
  function get_2($receiver, key) {
    return _get($receiver, key);
  }
  function set_1($receiver, key, value) {
    _set($receiver, key, value);
  }
  function set_2($receiver, key, value) {
    _set($receiver, key, value);
  }
  function set_3($receiver, key, value) {
    _set($receiver, key, value);
  }
  var classModule;
  function get_3($receiver, key) {
    return _get($receiver, key);
  }
  function set_4($receiver, key, value) {
    _set($receiver, key, value);
  }
  function _get($receiver, key) {
    var self_0 = $receiver;
    return self_0[key];
  }
  function _set($receiver, key, value) {
    var self_0 = $receiver;
    self_0[key] = value;
  }
  var datasetModule;
  function get_4($receiver, key) {
    return _get($receiver, key);
  }
  function set_5($receiver, key, value) {
    _set($receiver, key, value);
  }
  var eventListenersModule;
  function get_5($receiver, key) {
    return _get($receiver, key);
  }
  function set_6($receiver, key, value) {
    _set($receiver, key, value);
  }
  var heroModule;
  var htmlDomApi;
  var propsModule;
  function get_6($receiver, key) {
    return _get($receiver, key);
  }
  function set_7($receiver, key, value) {
    _set($receiver, key, value);
  }
  var styleModule;
  function get_7($receiver, key) {
    return _get($receiver, key);
  }
  function set_8($receiver, key, value) {
    _set($receiver, key, value);
  }
  function get_8($receiver, key) {
    return _get($receiver, key);
  }
  function set_9($receiver, key, value) {
    _set($receiver, key, value);
  }
  function get_9($receiver, key) {
    return _get($receiver, key);
  }
  function set_10($receiver, key, value) {
    _set($receiver, key, value);
  }
  function thunk(sel, fn, args) {
    return $module$snabbdom_thunk.default(sel, fn, args);
  }
  function thunk_0(sel, key, fn, args) {
    return $module$snabbdom_thunk.default(sel, key, fn, args);
  }
  function toVNode(node, domApi) {
    if (domApi === void 0)
      domApi = undefined;
    return $module$snabbdom_tovnode.default(node, domApi);
  }
  function vnode(sel, data, children, text, elm) {
    return $module$snabbdom_vnode.default(sel, data, children, text, elm);
  }
  function vnode_0(sel, data, children, text, elm) {
    return $module$snabbdom_vnode.default(sel, data, children, text, elm);
  }
  function vnode_1(sel, data, children, text, elm) {
    return $module$snabbdom_vnode.default(sel, data, children, text, elm);
  }
  function vnode_2(sel, data, children, text, elm) {
    return $module$snabbdom_vnode.default(sel, data, children, text, elm);
  }
  function get_10($receiver, key) {
    return _get($receiver, key);
  }
  function set_11($receiver, key, value) {
    _set($receiver, key, value);
  }
  var package$com = _.com || (_.com = {});
  var package$github = package$com.github || (package$com.github = {});
  var package$snabbdom = package$github.snabbdom || (package$github.snabbdom = {});
  package$snabbdom.attachTo_sfe0n$ = attachTo;
  package$snabbdom.get_crvjke$ = get_0;
  package$snabbdom.set_9ux61z$ = set;
  package$snabbdom.get_f4n79y$ = get_1;
  package$snabbdom.set_cvfzz5$ = set_0;
  Object.defineProperty(package$snabbdom, 'attributesModule', {
    get: function () {
      return attributesModule;
    }
  });
  package$snabbdom.get_m2vvz1$ = get_2;
  package$snabbdom.set_pe5ukx$ = set_1;
  package$snabbdom.set_rqxiah$ = set_2;
  package$snabbdom.set_qc2way$ = set_3;
  Object.defineProperty(package$snabbdom, 'classModule', {
    get: function () {
      return classModule;
    }
  });
  package$snabbdom.get_nkrpb3$ = get_3;
  package$snabbdom.set_ykwbga$ = set_4;
  package$snabbdom._get_k9kufj$ = _get;
  package$snabbdom._set_rrcnvo$ = _set;
  Object.defineProperty(package$snabbdom, 'datasetModule', {
    get: function () {
      return datasetModule;
    }
  });
  package$snabbdom.get_vdkc99$ = get_4;
  package$snabbdom.set_e8lkqj$ = set_5;
  Object.defineProperty(package$snabbdom, 'eventListenersModule', {
    get: function () {
      return eventListenersModule;
    }
  });
  package$snabbdom.get_lj4sqm$ = get_5;
  package$snabbdom.set_14crke$ = set_6;
  Object.defineProperty(package$snabbdom, 'heroModule', {
    get: function () {
      return heroModule;
    }
  });
  Object.defineProperty(package$snabbdom, 'htmlDomApi', {
    get: function () {
      return htmlDomApi;
    }
  });
  Object.defineProperty(package$snabbdom, 'propsModule', {
    get: function () {
      return propsModule;
    }
  });
  package$snabbdom.get_yo8iy3$ = get_6;
  package$snabbdom.set_mt1qkg$ = set_7;
  Object.defineProperty(package$snabbdom, 'styleModule', {
    get: function () {
      return styleModule;
    }
  });
  package$snabbdom.get_kfqsx0$ = get_7;
  package$snabbdom.set_xoucry$ = set_8;
  package$snabbdom.get_wnohgw$ = get_8;
  package$snabbdom.set_f6b5a6$ = set_9;
  package$snabbdom.get_hrtv64$ = get_9;
  package$snabbdom.set_yyhxxi$ = set_10;
  package$snabbdom.thunk_k6tepo$ = thunk;
  package$snabbdom.thunk_yq0105$ = thunk_0;
  package$snabbdom.toVNode_4uoidi$ = toVNode;
  package$snabbdom.vnode_gdi8k5$ = vnode;
  package$snabbdom.vnode_x78345$ = vnode_0;
  package$snabbdom.vnode_ucq5oq$ = vnode_1;
  package$snabbdom.vnode_xg44j4$ = vnode_2;
  package$snabbdom.get_6qip99$ = get_10;
  package$snabbdom.set_95hh4i$ = set_11;
  attributesModule = $module$snabbdom_modules_attributes.default;
  classModule = $module$snabbdom_modules_class.default;
  datasetModule = $module$snabbdom_modules_dataset.default;
  eventListenersModule = $module$snabbdom_modules_eventlisteners.default;
  heroModule = $module$snabbdom_modules_hero.default;
  htmlDomApi = $module$snabbdom_htmldomapi.default;
  propsModule = $module$snabbdom_modules_props.default;
  styleModule = $module$snabbdom_modules_style.default;
  Kotlin.defineModule('snabbdom-kotlin', _);
  return _;
}(module.exports, require('kotlin'), require('snabbdom/helpers/attachto'), require('snabbdom/modules/attributes'), require('snabbdom/modules/class'), require('snabbdom/modules/dataset'), require('snabbdom/modules/eventlisteners'), require('snabbdom/modules/hero'), require('snabbdom/htmldomapi'), require('snabbdom/modules/props'), require('snabbdom/modules/style'), require('snabbdom/thunk'), require('snabbdom/tovnode'), require('snabbdom/vnode')));
