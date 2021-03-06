// #+TITLE: Inverted Promise
// #+PROPERTY: header-args    :comments both :tangle ../src/InvertedPromise.js

// A small no-dependency module to wrap a built-in =Promise=. The goal is to create a =Promise= which can optionally act without passing in a callback, and instead call =.reject(...)= or =.resolve(...)= later.

// If instantiated with a callback, then it acts just like built-in =Promise=.

// The =new= keyword is optional. It works the same either way, since it always returns a new built-in =Promise=.


// [[file:../literate/InvertedPromise.org::+begin_src js][No heading:1]]
export const InvertedPromise = function (callback) {
    let resolve;
    let reject;

    // If given a callback, skip all this business.
    if (callback) return new Promise(callback);

    const promise =
        new Promise((_resolve, _reject) => {
            resolve = _resolve;
            reject = _reject;
        });

    // Add the resolve and reject methods
    promise.resolve = resolve;
    promise.reject = reject;

    return promise;
};
// No heading:1 ends here
