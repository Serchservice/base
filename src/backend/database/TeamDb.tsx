import { action, computed, makeAutoObservable, observable } from 'mobx';
import store from 'store2';
import Store from './Store';
import { TeamGroup } from '@serchservice/contently';

const STORAGE_KEY = "teamDb"

/**
 * Store for managing TeamGroup data.
 * @implements Store<TeamGroup>
 */
class TeamRepository implements Store<TeamGroup> {
    /** The current group data. */
    group: TeamGroup = TeamGroup.empty();

    constructor() {
        makeAutoObservable(this, {
            group: observable,
            read: computed,
            isEmpty: computed,
            set: action,
            clear: action
        });
        const saved = store.get(STORAGE_KEY);
        if (saved) this.group = TeamGroup.fromJson(JSON.parse(saved));
    }

    /**
     * Get the current group data.
     * @returns {TeamGroup} The current group data.
     */
    get read(): TeamGroup {
        return this.group;
    }

    /**
     * Checks if the data is empty
     * @returns {boolean} True or False.
     */
    get isEmpty(): boolean {
        return this.group.boards.length === 0 && this.group.executives.length === 0;
    }

    /**
     * Set new group data.
     * @param {TeamGroup} data - The new group data.
     */
    set(data: TeamGroup): void {
        this.group = data;
        store.set(STORAGE_KEY, JSON.stringify(data.toJson()));
    }

    /**
     * Clear the group data.
     */
    clear(): void {
        this.group = TeamGroup.empty();
        store.remove(STORAGE_KEY);
    }
}

const TeamDb = new TeamRepository();
export default TeamDb;