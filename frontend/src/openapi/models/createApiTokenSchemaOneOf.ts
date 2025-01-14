/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

export type CreateApiTokenSchemaOneOf = {
    /** The time when this token should expire. */
    expiresAt?: string;
    /** An admin token. Must be the string "admin" (not case sensitive). */
    type: string;
    /** The name of the token. */
    tokenName: string;
};
