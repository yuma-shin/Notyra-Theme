import { readFileSync } from 'node:fs'
import assert from 'node:assert/strict'
const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'))
const theme = JSON.parse(readFileSync(new URL('../theme.json', import.meta.url), 'utf8'))
assert.equal(pkg.notyra.type, 'theme')
assert.equal(pkg.notyra.main, undefined)
assert.equal(pkg.notyra.permissions, undefined)
assert.equal(theme.id, 'notyra-blue')
for (const key of ['name', 'nameJa']) assert.equal(typeof theme[key], 'string')
for (const key of ['swatches', 'swatchesDark']) assert.ok(Array.isArray(theme[key]) && theme[key].length > 0)
for (const key of ['light', 'dark']) {
  assert.ok(theme[key] && typeof theme[key] === 'object')
  for (const [name, value] of Object.entries(theme[key])) { assert.ok(name.startsWith('--')); assert.equal(typeof value, 'string') }
}
console.log('Validated Blue theme, light/dark palettes and plugin manifest')
