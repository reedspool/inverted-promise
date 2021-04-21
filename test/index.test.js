// Preamble


// [[file:../literate/IndexTests.org::*Preamble][Preamble:1]]
import { InvertedPromise } from "../src/InvertedPromise";
import * as Index from "../src/index";
// Preamble:1 ends here

// Tests


// [[file:../literate/IndexTests.org::*Tests][Tests:1]]
it("Everything is defined", () => {
    expect(Index.InvertedPromise).toBeDefined();
})

it("Exposes everything", () => {
    expect(Index.InvertedPromise).toBe(InvertedPromise);
})
// Tests:1 ends here
