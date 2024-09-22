import { action, computed, makeAutoObservable, observable } from 'mobx';
import store from 'store2';
import Store from './Store';
import { Article } from '@serchservice/contently';

const STORAGE_KEY = "blogDb"

/**
 * Store for managing Article data.
 * @implements Store<Article>
 */
class BlogRepository implements Store<Article[]> {
    /** The current blogs data. */
    blogs: Article[] = [];

    constructor() {
        makeAutoObservable(this, {
            blogs: observable,
            read: computed,
            set: action,
            clear: action,
            sorted: computed
        });
        const saved = store.get(STORAGE_KEY);
        if (saved && Array.isArray(JSON.parse(saved))) {
            this.blogs = JSON.parse(saved).map((i: Map<string, object>) => Article.fromJson(i));
        }
    }

    /**
     * Get the current blogs data.
     * @returns {Article[]} The current blogs data.
     */
    get read(): Article[] {
        return this.blogs;
    }

    /**
     * Get the current sorted blogs data.
     * @returns {Article[]} The current blogs data.
     */
    get sorted(): Article[] {
        const unsorted = Array.from(this.blogs);
        return unsorted.sort((a, b) => b.date.getTime() - a.date.getTime())
    }

    /**
     * Set new blogs data.
     * @param {Article[]} data - The new blogs data.
     */
    set(data: Article[]): void {
        this.blogs = data;
        store.set(STORAGE_KEY, JSON.stringify(data.map((item) => item.toJson())));
    }

    /**
     * Clear the blogs data.
     */
    clear(): void {
        this.blogs = [];
        store.remove(STORAGE_KEY);
    }
}

const BlogDb = new BlogRepository();
export default BlogDb;