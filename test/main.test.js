QUnit.module('MAIN MODULE', {})  // group all these tests together

QUnit.test('TEST add', assert => {
  assert.equal(add(1, 1), 2, 'Positive integers')
  assert.equal(add(-1, -1), -2, 'Negative integers')
  assert.equal(add(-10, 10), 0, 'Mixed')
})

QUnit.config.autostart = false  // sync = false; start after loading html


QUnit.start();

QUnit.test("TEST maxLength number validation", assert => {
  const input = document.querySelector('#maxLength')
  const warning = document.querySelector('#firstWarning')
  console.log(input);
  input.value = -3;
  assert.equal(input.value, -3, "Bad value assigned")
  assert.strictEqual(input.checkValidity(), false, "Correctly fails validation")
  input.focus()
  input.blur()
  assert.strictEqual(warning.innerHTML, 'Invalid input', `Correctly adds warning ${warning}`)
})

