/**
 * Classes that implements ViewCallback can execute callbacks
 * in the view using the generic logic in the core components
 */
export interface ViewCallback {
    /**
     * Runs a callback, commonly a private function
     * @param callbackName The callback name to run
     */
    runCallback(callbackName: string): void;
}
