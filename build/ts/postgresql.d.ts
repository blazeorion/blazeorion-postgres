import { Session } from '@shopify/shopify-api';
import { SessionStorage } from '@shopify/shopify-app-session-storage';
export interface PostgreSQLSessionStorageOptions {
    sessionTableName: string;
    port: number;
}
export declare class PostgreSQLSessionStorage implements SessionStorage {
    private dbUrl;
    static withCredentials(host: string, dbName: string, username: string, password: string, opts: Partial<PostgreSQLSessionStorageOptions>): PostgreSQLSessionStorage;
    readonly ready: Promise<void>;
    private options;
    private client;
    constructor(dbUrl: URL, opts?: Partial<PostgreSQLSessionStorageOptions>);
    storeSession(session: Session): Promise<boolean>;
    loadSession(id: string): Promise<Session | undefined>;
    deleteSession(id: string): Promise<boolean>;
    deleteSessions(ids: string[]): Promise<boolean>;
    findSessionsByShop(shop: string): Promise<Session[]>;
    disconnect(): Promise<void>;
    private init;
    private connectClient;
    private hasSessionTable;
    private createTable;
    private query;
    private databaseRowToSession;
}
//# sourceMappingURL=postgresql.d.ts.map