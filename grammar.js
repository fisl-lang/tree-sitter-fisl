/**
 * @file Grammar for the Fisl programming language
 * @author S1monr3dst0ne07
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "fisl",

  rules: {
    source_file: $ => repeat(seq($.line, "\n")),
    line: $ => choice($.statement, $.comment),
    comment: $ => /#.+?\n/,
    statement: $ => seq(
      seq("let", $.var, "be", $.expr),
      seq("let", $.var, "be", $.expr, "plus",  $.expr),
      seq("let", $.var, "be", $.expr, "minus", $.expr),
      seq("print", $.expr),
      seq("label", $.iden),
      seq("goto",  $.iden),
      seq("if", $.compare, "goto", $.iden),
      seq("if", $.compare, "call", $.iden),
      seq("push", $.expr),
      seq("pull", $.expr),
      seq("call", $.iden),
      "return",
      seq("write", $.expr, "into", $.expr),
      seq("read",  $.var,  "from", $.expr),
      seq("output", "newline"),
      seq("output", $.expr),
      seq("input",  $.var),
      seq("allocate", $.number, "words", "for", $.var),
      seq("string", $.string, "into", $.var),
    ),
    compare: $ => seq($.expr, choice(
      "equal", "unequal", "greater", "lesser"
    ), $.expr),
    expr: $ => choice($.var, $.number),
    string: $ => seq('"', /[^"]*/, '"'),
    var: $ => $.iden,
    iden: $ => /.+/,
    number: $ => /[0-9]+/,

  }
});
