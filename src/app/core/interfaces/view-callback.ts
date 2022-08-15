/**
 * ViewCallback implementers can execute callbacks fired by ActionButtons.
 */
export interface ViewCallback {
    /**
     * Runs a callback identified by a name.
     * @param name The callback's name to run.
     */
    runCallback(name: string): void;
}
