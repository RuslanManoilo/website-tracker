export interface ISession {
  readonly id: number;
  readonly email: string;
  readonly accountId: number;
  readonly watchListId: number;
  readonly roles: string[];
  readonly iat: number;
  readonly exp: number;
}
