'use strict';
/*我们创建了用于获取服务器上手机数据的服务。
我们会把该服务放到ngResource模块中，
并将该模块放入核心模块的依赖列表中。*/
// Define the `core.phone` module
angular.module('core.phone', ['ngResource']);
