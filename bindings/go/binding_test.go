package tree_sitter_fisl_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_fisl "github.com/fisl-lang/tree-sitter-fisl/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_fisl.Language())
	if language == nil {
		t.Errorf("Error loading Fisl grammar")
	}
}
