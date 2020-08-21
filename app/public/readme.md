# egg-static

[![NPM version](https://camo.githubusercontent.com/6ee17fd881bba8dd392b74eda1fb5bb02b29bb3e/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f6567672d7374617469632e7376673f7374796c653d666c61742d737175617265)](https://npmjs.org/package/egg-static) [![build status](https://camo.githubusercontent.com/9f5fd5389e833e9c644f4a4054622c4fbac2c1ab/68747470733a2f2f696d672e736869656c64732e696f2f7472617669732f6567676a732f6567672d7374617469632e7376673f7374796c653d666c61742d737175617265)](https://travis-ci.org/eggjs/egg-static) [![Test coverage](https://camo.githubusercontent.com/c7020d0b1137e6b84589ab62bf89d020c0832ea8/68747470733a2f2f636f6465636f762e696f2f6769746875622f6567676a732f6567672d7374617469632f636f7665726167652e7376673f6272616e63683d6d6173746572)](https://codecov.io/github/eggjs/egg-static?branch=master) [![David deps](https://camo.githubusercontent.com/b15f7fadcdd87859b0c4c0dd37938b9b92a208ee/68747470733a2f2f696d672e736869656c64732e696f2f64617669642f6567676a732f6567672d7374617469632e7376673f7374796c653d666c61742d737175617265)](https://david-dm.org/eggjs/egg-static) [![Known Vulnerabilities](https://camo.githubusercontent.com/e25e162c87657b0de7cd9f8b4851ca21a0f8d1b9/68747470733a2f2f736e796b2e696f2f746573742f6e706d2f6567672d7374617469632f62616467652e7376673f7374796c653d666c61742d737175617265)](https://snyk.io/test/npm/egg-static) [![npm download](https://camo.githubusercontent.com/a2e9880799cb36b273c79b6cb5fcb2647ae04e1f/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f646d2f6567672d7374617469632e7376673f7374796c653d666c61742d737175617265)](https://npmjs.org/package/egg-static)

Static server plugin for egg, base on [koa-static-cache](https://github.com/koajs/static-cache).

## Install

`egg-static` is a plugin that has been built-in for egg. It is enabled by default.

## Configuration

egg-static support all configurations in [koa-static-cache](https://github.com/koajs/static-cache). and with default configurations below:

- prefix: `'/public/'`
- dir: `path.join(appInfo.baseDir, 'app/public')`
- dynamic: `true`
- preload: `false`
- maxAge: `31536000` in prod env, `0` in other envs
- buffer: `true` in prod env, `false` in other envs

`egg-static` provides one more option:

- maxFiles: the maximum value of cache items, only effective when dynamic is true, default is `1000`.

**All static files in `$baseDir/app/public` can be visited with prefix `/public`, and all the files are lazy loaded.**

- In non-production environment, assets won't be cached, your modification can take effect immediately.
- In production environment, `egg-static` will cache the assets after visited, you need to restart the process to update the assets.
- Dir default is `$baseDir/app/public` but you can also define **multiple directory** by use `dir: [dir1, dir2, ...]` or `dir: [dir1, { prefix: '/static2', dir: dir2 }]`, static server will use all these directories.

```
// {app_root}/config/config.default.js
exports.static = {
  // maxAge: 31536000,
};
```

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](https://github.com/eggjs/egg-static/blob/master/LICENSE)