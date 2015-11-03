var typeforce = require('../src')

function Tt () { return false }

var TYPES = {
  '(Boolean, Number)': typeforce.tuple('Boolean', 'Number'),
  '(Number|String)': typeforce.tuple(typeforce.oneOf('Number', 'String')),
  '(Number)': typeforce.tuple('Number'),
  '[?{ a: Number }]': [ typeforce.maybe({ a: 'Number' }) ],
  'Boolean|Number|String': typeforce.oneOf('Boolean', 'Number', 'String'),
  '?Boolean|Number': typeforce.maybe(typeforce.oneOf('Boolean', 'Number')),
  '?{ a: ?Number }': typeforce.maybe({ a: '?Number' }),
  '?{ a: Number }': typeforce.maybe({ a: 'Number' }),
  '{ a: Number|Null }': { a: typeforce.oneOf('Number', 'Null') },
  '{ a: Number|{ b: Number } }': { a: typeforce.oneOf('Number', { b: 'Number' }) },
  '{ a: ?{ b: Number } }': { a: typeforce.maybe({ b: 'Number' }) },
  '{ a: ?{ b: ?{ c: Number } } }': { a: typeforce.maybe({ b: typeforce.maybe({ c: 'Number' }) }) },
  '?Tt': Tt,
  '{ a: ?Tt }': { a: typeforce.maybe(Tt) },
  '{ a: { b: Tt } }': { a: { b: Tt } },
  '>CustomType': typeforce.quacksLike('CustomType'),
  '{ String }': typeforce.map('String'),
  '{ String|Number }': typeforce.map(typeforce.oneOf('String', 'Number'))
}

var VALUES = {
  'function': function () {},
  'customType': new function CustomType () {},
  'buffer': new Buffer(0)
}

module.exports = { TYPES, VALUES }
