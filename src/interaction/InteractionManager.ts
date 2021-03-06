import MovementInteraction from './MovementInteraction';
import Interaction from './Interaction';

export default class InteractionManager {
    private interactions: Map<String, Interaction>;
    private static _instance: InteractionManager;

    constructor() {
        this.interactions = new Map<String, Interaction>();
        this.RegisterInteractions();
    }

    private RegisterInteractions() {
        this.interactions.set("movement", new MovementInteraction());
    }

    public getInteractions(): Map<String, Interaction> {
        return this.interactions;
    }

    public static init(): void {
        this._instance = new InteractionManager();
    }

    public static getInstance(): InteractionManager {
        return this._instance;
    }
}