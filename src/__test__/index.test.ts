import assert from 'node:assert';
import { describe, it } from 'node:test';

import { helloWorld } from '../index.ts';

void describe('helloWorld', () => {
  void it('should respond with hello world', () => {
    assert.equal(helloWorld('test'), 'hello world! test');
  });
});
