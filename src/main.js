import createElement from './vdom/createElement';
import render from './vdom/render';
import mount from './vdom/mount';
import diff from './vdom/diff';

const createVApp = (count) => createElement('div', {
  attrs: {
    id: 'app',
    dataCount: count,
  },
  children: [
    createElement('input'),
    String(count),
    ...Array.from({ length: count }, () => createElement('img', {
      attrs: {
        src: 'https://github.com/favicon.ico',
      },
    })),
  ],
});

let count = 0;
let vApp = createVApp(count);
const $app = render(vApp);

let $rootEl = mount($app, document.getElementById('app'));

debugger;
const vNewApp = createVApp(Math.floor(Math.random() * 10));
const patch = diff(vApp, vNewApp);
$rootEl = patch($rootEl);
vApp = vNewApp;
// setInterval(() => {

// }, 1000);
