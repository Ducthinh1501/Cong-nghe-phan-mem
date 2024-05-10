import { module, test } from 'qunit';
import { setupTest } from 'project-8/tests/helpers';

module('Unit | Route | signup', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:signup');
    assert.ok(route);
  });
});
