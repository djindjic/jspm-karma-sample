System.config({
  "baseURL": "/",
  "transpiler": "6to5",
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js"
  },
  "bundles": {
    "bundle": [
      "github:angular/bower-angular@1.3.13/angular",
      "github:angular/bower-angular@1.3.13",
      "main"
    ]
  }
});

System.config({
  "map": {
    "angular": "github:angular/bower-angular@1.3.13"
  }
});

