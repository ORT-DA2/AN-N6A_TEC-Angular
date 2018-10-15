import { Injectable } from '@angular/core';

const tokenKey = 'currentToken';

@Injectable()
export class SessionService {

    private currentToken: string;
    constructor() { }

    isAuthenticated(): boolean {
        return this.currentToken !== null;
    }

    setToken(token: string): void {
        this.currentToken = token;
    }

    removeToken(): void {
        this.currentToken = undefined;
    }

    getToken(): string {
        return this.currentToken;
    }
}
