keep-alive
==========

You may or may not be aware that many PaaS providers have a policy to 
idle your web process after an period of inactivity.

**keep-alive** is a node module for defining and executing a simple 
keep-alive policy, by simply specifying your url and optional frequency

## Installation

    $ npm install keep-alive

## Examples

once every half an hour.

```
var keepAlive = require('keep-alive')('http://example.com', 1800000);
```

once every 20 minutes.

```
keepAlive.add('http://example.com', 1200000);
```

stop keeping alive.

```
keepAlive.remove('http://example.com');
```

## License 

(The MIT License)

Copyright (c) 2013 Colin Milhench <colin@milhen.ch>;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.