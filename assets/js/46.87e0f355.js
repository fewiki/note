(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{329:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"gulp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gulp","aria-hidden":"true"}},[t._v("#")]),t._v(" gulp")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/gulpjs/gulp/blob/a2c9e695ecf3600f21fa731e705fd1a0503632d9/docs/recipes/delete-files-folder.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("启用删除文件插件 del"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/colynb/gulp-swig",target:"_blank",rel:"noopener noreferrer"}},[t._v("gulp-swig"),a("OutboundLink")],1),t._v(" Swig template compiler for Gulp")])]),t._v(" "),a("h3",{attrs:{id:"browsersync-error-listen-eacces"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#browsersync-error-listen-eacces","aria-hidden":"true"}},[t._v("#")]),t._v(" browserSync Error: listen EACCES")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("     mix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("browserSync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       proxy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'review.qq.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3001")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       notify"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       watchTask"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       oprn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'enternal'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'review.qq.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("这个错误说明端口被占用，只要更改下 port 就可以啦")]),t._v(" "),a("h3",{attrs:{id:"did-you-forget-to-signal-async-completion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#did-you-forget-to-signal-async-completion","aria-hidden":"true"}},[t._v("#")]),t._v(" Did you forget to signal async completion?")]),t._v(" "),a("p",[t._v("原因是，task 回调函数没有被执行")]),t._v(" "),a("div",{staticClass:"language-coffee extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("gulp.task 'webpack', (cb) ->\n  webpack webpackConfig, (err, stats) ->\n    if err\n      throw new gutil.PluginError 'webpack', err\n\n    gutil.log '[webpack]', stats.toString { colors: true }\n    # 这里执行回调\n    cb()\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);