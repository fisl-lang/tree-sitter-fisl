import XCTest
import SwiftTreeSitter
import TreeSitterFisl

final class TreeSitterFislTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_fisl())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Fisl grammar")
    }
}
