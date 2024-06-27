export interface ISession {
  readonly id: number;
  readonly email: string;
  readonly roles: string[];
  readonly iat: number;
  readonly exp: number;
}
