import { module, test } from 'qunit';
import { setupTest } from 'project-8/tests/helpers';

module('Unit | Route | test', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:test');
    assert.ok(route);
  });
});
