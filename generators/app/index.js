'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    this.log(yosay(
      'Welcome to the sweet ' + chalk.red('WebpackLibrary') + ' generator!'
    ));
    this.appname = this.appname.replace(' ', '-')
  },

  writing: {
    app: function () {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        {
            appname: this.appname,
            name: this.user.git.name(),
            email: this.user.git.email()
        }
      );
    },
    gulp: function() {
        this.fs.copy(
            this.templatePath('gulpfile.js'),
            this.destinationPath('gulpfile.js')
        )
    },
    webpack: function() {
        this.fs.copyTpl(
            this.templatePath('webpack.config.js'),
            this.destinationPath('webpack.config.js'),
            {
                appname: this.appname
            }
        )
    },
    babel: function() {
      this.fs.copy(
        this.templatePath('babelrc'),
        this.destinationPath('.babelrc')
      );
    },
    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('eslintrc'),
        this.destinationPath('.eslintrc')
      );
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );
      this.fs.copy(
        this.templatePath('npmignore'),
        this.destinationPath('.npmignore')
      );
    },
    src: function() {
      this.fs.copy(
        this.templatePath('src'),
        this.destinationPath('src')
      );
    }
  },

  install: function () {
    this.installDependencies();
  }
});
