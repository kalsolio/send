/* global window */

window.LIMITS = {
  ANON: {
    MAX_FILE_SIZE: 1024 * 1024 * 1024 * 2,
    MAX_DOWNLOADS: 32,
    MAX_EXPIRE_SECONDS: 604800
  },
  MAX_FILE_SIZE: 1024 * 1024 * 1024 * 2,
  MAX_DOWNLOADS: 32,
  MAX_EXPIRE_SECONDS: 604800,
  MAX_FILES_PER_ARCHIVE: 32,
  MAX_ARCHIVES_PER_USER: 32
};

window.DEFAULTS = {
  EXPIRE_SECONDS: 3600
};

const choo = require('choo');
const app = choo();

app.use(require('./stores/state').default);
app.use(require('../app/fileManager').default);
app.use(require('./stores/intents').default);
app.route('/', require('./pages/home').default);
app.route('/options', require('./pages/options').default);
app.route('/upload', require('./pages/upload').default);
app.route('/share/:id', require('./pages/share').default);
app.route('/preferences', require('./pages/preferences').default);
app.route('/error', require('./pages/error').default);
//app.route('/debugging', require('./pages/debugging').default);
// add /api/filelist
app.mount('body');
