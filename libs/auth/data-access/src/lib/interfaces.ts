export interface OidcUser {
    sub: string;
    email_verified: boolean;
    name: string;
    preferred_username: string;
    given_name: string;
    locale: string;
    family_name: string;
    email: string;
}