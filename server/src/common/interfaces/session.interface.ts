export interface ISession {
  readonly id: number;
  readonly email: string;
  readonly roles: string[];
  readonly accountId: number;
  readonly iat: number;
  readonly exp: number;
}
