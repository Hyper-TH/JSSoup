const JSSoup = require('jssoup').default;
// Text element only contains whitespace will be ignored by default.
// var soup = new JSSoup('<html><head>Hello</head></html>');

// Parameter "ignoreWhitespace"
var soup = new JSSoup('<html><head>Hello</head></html>', false);

var tag = soup.find('head');
console.log(tag.name);  // 'head'

tag.name = 'span';
console.log(tag);   // <span>hello</span>
