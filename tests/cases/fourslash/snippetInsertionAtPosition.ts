/// <reference path='fourslash.ts'/>

////import { /*1*/ } from ".test";  // no snippets in imports
/////*2*/class A {   // insert snippets at beginning of line
////    foo(): string { return ''; }
////}
////
////class B extends A {
////    bar(): string {
////        return '';
////    }
////}
////
////class C<U extends A, T extends A> {
////    x: U;
////    y = this./*3*/ // no snippets inserted for member completions
////   /*4*/ // snippets should be inserted
////}
/////*5*/ // snippets should be inserted
goTo.marker("1");
verify.isValidSnippetInsertionAtPosition(false);
goTo.marker("2");
verify.isValidSnippetInsertionAtPosition(true);
goTo.marker("3");
verify.isValidSnippetInsertionAtPosition(false);
goTo.marker("4");
verify.isValidSnippetInsertionAtPosition(false);
goTo.marker("5");
verify.isValidSnippetInsertionAtPosition(true);