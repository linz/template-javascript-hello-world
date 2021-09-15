import o from 'ospec';
import { helloWorld } from '../index.js';

o.spec('Index', () => {
  o('should return hello world', () => {
    o(helloWorld('blacha')).equals('Hello blacha!');
  });
});
