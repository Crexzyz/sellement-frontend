/**
 * ViewCallback implementers can execute callbacks fired by ActionButtons
 */
export interface ViewCallback {
    /**
     * Runs a callback, commonly a private function
     * @param callbackName The callback name to run
     */
    runCallback(callbackName: string): void;
}
