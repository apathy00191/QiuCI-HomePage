/* ============================================================
   秋辞の主页 · 额外脚本
   1) 艺术光标：Canvas 生成渐变发光箭头 / 圆环星芒指针
   2) 页面保护：禁用右键菜单（查看源码）、F12、开发者工具快捷键
   ============================================================ */
(function () {
  'use strict';

  /* ---------------- 艺术光标 ---------------- */
  function star(x, cx, cy, r) {
    x.beginPath();
    for (var i = 0; i < 8; i++) {
      var a = (Math.PI / 4) * i;
      var rad = i % 2 ? r * 0.42 : r;
      var px = cx + Math.cos(a) * rad;
      var py = cy + Math.sin(a) * rad;
      if (i) { x.lineTo(px, py); } else { x.moveTo(px, py); }
    }
    x.closePath();
    x.fill();
  }

  /* 默认光标：青→靛渐变箭头 + 白描边 + 发光 + 星芒点缀 */
  function drawArrow() {
    var c = document.createElement('canvas');
    c.width = 56; c.height = 56;
    var x = c.getContext('2d');
    x.translate(6, 6);
    x.beginPath();
    x.moveTo(0, 0);
    x.lineTo(0, 34);
    x.lineTo(9, 26);
    x.lineTo(15, 38);
    x.lineTo(21, 35);
    x.lineTo(15, 24);
    x.lineTo(27, 23);
    x.closePath();
    var g = x.createLinearGradient(0, 0, 27, 38);
    g.addColorStop(0, '#38bdf8');
    g.addColorStop(0.55, '#818cf8');
    g.addColorStop(1, '#22d3ee');
    x.shadowColor = 'rgba(56,189,248,.9)';
    x.shadowBlur = 7;
    x.fillStyle = g;
    x.strokeStyle = 'rgba(255,255,255,.95)';
    x.lineWidth = 2.6;
    x.lineJoin = 'round';
    x.fill();
    x.stroke();
    x.shadowBlur = 0;
    x.fillStyle = 'rgba(255,255,255,.92)';
    star(x, 35, 10, 4.5);
    x.fillStyle = 'rgba(129,140,248,.95)';
    star(x, 44, 23, 2.8);
    return c.toDataURL();
  }

  /* 悬停光标：渐变圆环 + 中心星芒 + 角落小星 */
  function drawPointer() {
    var c = document.createElement('canvas');
    c.width = 56; c.height = 56;
    var x = c.getContext('2d');
    var g = x.createLinearGradient(9, 9, 47, 47);
    g.addColorStop(0, '#38bdf8');
    g.addColorStop(1, '#818cf8');
    x.shadowColor = 'rgba(56,189,248,.9)';
    x.shadowBlur = 8;
    x.lineWidth = 3.4;
    x.strokeStyle = g;
    x.beginPath();
    x.arc(28, 28, 15, 0, Math.PI * 2);
    x.stroke();
    x.shadowBlur = 0;
    x.fillStyle = 'rgba(255,255,255,.95)';
    star(x, 28, 28, 7);
    x.fillStyle = 'rgba(34,211,238,.95)';
    star(x, 45, 12, 3.4);
    return c.toDataURL();
  }

  function applyCursor() {
    if (!window.matchMedia || !matchMedia('(pointer:fine)').matches) return;
    try {
      var def = drawArrow();
      var ptr = drawPointer();
      var st = document.createElement('style');
      st.textContent =
        'body,html{cursor:url(' + def + ') 6 6, auto}' +
        'a,button,.nav a,.tags span,.bar,.plist li,.plist,.chip,.link-btn,.proj,' +
        '.icon-btn,.cbtn,.vbtn,.modal-close,.pl-del,input[type=range],' +
        '.code-win,.card{cursor:url(' + ptr + ') 28 28, pointer}' +
        'input[type=text],.search input,textarea{cursor:text}';
      document.head.appendChild(st);
    } catch (e) {
      /* 生成失败则保留系统光标 */
    }
  }

  /* ---------------- 页面保护 ---------------- */
  function fallbackToast(msg) {
    var t = document.getElementById('toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(fallbackToast.timer);
    fallbackToast.timer = setTimeout(function () { t.classList.remove('show'); }, 2400);
  }
  var notify = (typeof window.toast === 'function') ? window.toast : fallbackToast;

  function shield(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  /* 禁用右键菜单（查看源码 / 检查元素入口） */
  document.addEventListener('contextmenu', function (e) {
    shield(e);
    notify('已禁用右键菜单与查看源码 🔒');
  });

  /* 禁用 F12 与开发者工具快捷键（Ctrl+Shift+I/J/C/K、Ctrl+U、Cmd+Option 系） */
  document.addEventListener('keydown', function (e) {
    var k = String(e.key || '').toUpperCase();
    var hit =
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && ['I', 'J', 'C', 'K'].indexOf(k) >= 0) ||
      (e.metaKey && e.altKey && ['I', 'J', 'C'].indexOf(k) >= 0) ||
      (e.ctrlKey && k === 'U');
    if (hit) {
      shield(e);
      notify('已禁用查看源码 / 开发者工具 🔒');
    }
  });

  /* 阻止拖拽选取页面内容（防拖走文字/源码），输入框内放行 */
  document.addEventListener('dragstart', function (e) {
    if (e.target && e.target.closest && e.target.closest('input,textarea')) return;
    shield(e);
  });

  /* ---------------- 启动 ---------------- */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyCursor);
  } else {
    applyCursor();
  }
})();
