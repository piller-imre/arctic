/**
 * Provides message based communication between the components.
 */
class Messenger
{
    /**
     * Create a registry for the components.
     */
    constructor()
    {
        this.registry = {};
    }

    /**
     * Register a new component.
     */
    register(name, component)
    {
        // TODO: Check that the component name is still available!
        this.registry[name] = component;
    }

    /**
     * Send message to a registered component.
     */
    send(name, message)
    {
        if (name in this.registry) {
            this.registry[name].onMessage(message);
        }
    }
}

/**
 * Create a new globally accessible messenger instance.
 */
var messenger = new Messenger();

