# npm uninstall 하는법

* npm uninstall <name>: node_modules는 제거되지 않는다.
* npm uninstall <name> --save: package.json의 dependencies에서 제거한다.
* npm uninstall <name> --save-dev: package.json의 devDependencies에서 제거한다.
* npm -g uninstall <name> --save: global에 제거한다.