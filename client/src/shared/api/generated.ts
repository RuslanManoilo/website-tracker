/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * Website Tracker
 * API documentation for Website Tracker application. [GitHub repository](https://github.com/RuslanManoilo/website-tracker)
 * OpenAPI spec version: 1.0.5
 */
import { createInstance } from "./api-instance";
import type { BodyType } from "./api-instance";
export interface WatchListItemDto {
  /** Item URL */
  data: string;
  /** Primary key */
  id: number;
  /** Item type */
  type: string;
  /** Owner ID */
  watchListId: number;
}

export interface AddWatchListItemDto {
  /** Item URL */
  data: string;
  /** Item type */
  type: string;
}

export interface WatchListDto {
  /** Primary key */
  id: number;
  /** Watch list items */
  items: string[];
  /** Owner ID */
  ownerId: number;
}

export interface PatchAccountDto {
  isMonitoringEnabled?: boolean;
}

export interface Account {
  /** Primary key */
  id: number;
  isMonitoringEnabled?: boolean;
  /** Owner ID */
  owner: number;
}

export interface SessionDto {
  accountId: number;
  email: string;
  exp: number;
  iat: number;
  /** Primary key */
  id: number;
  roles: string[];
  watchListId: number;
}

export interface SignInDto {
  email: string;
  password: string;
}

export interface SignUpDto {
  email: string;
  password: string;
}

export interface Role {
  /** Role description */
  description: string;
  /** Primary key */
  id: number;
  /** Role value */
  value: string;
}

export interface CreateRoleDto {
  /** Role description */
  description: string;
  /** Role value */
  value: string;
}

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

/**
 * @summary Create role ( Admin only! )
 */
export const rolesControllerCreate = (
  createRoleDto: BodyType<CreateRoleDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<Role>(
    {
      url: `/roles`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: createRoleDto,
    },
    options,
  );
};

/**
 * @summary User registration
 */
export const authControllerSignup = (
  signUpDto: BodyType<SignUpDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<unknown>(
    {
      url: `/auth/signup`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: signUpDto,
    },
    options,
  );
};

/**
 * @summary User authentication
 */
export const authControllerSignin = (
  signInDto: BodyType<SignInDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<unknown>(
    {
      url: `/auth/signin`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: signInDto,
    },
    options,
  );
};

/**
 * @summary Logout
 */
export const authControllerSignout = (
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    { url: `/auth/signout`, method: "POST" },
    options,
  );
};

/**
 * @summary Get session info
 */
export const authControllerGetSessionInfo = (
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<SessionDto>(
    { url: `/auth/session`, method: "GET" },
    options,
  );
};

/**
 * @summary Get account by user
 */
export const accountControllerGetAccount = (
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<Account>({ url: `/account`, method: "GET" }, options);
};

/**
 * @summary Monitoring on/off
 */
export const accountControllerPatchAccount = (
  patchAccountDto: BodyType<PatchAccountDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<Account>(
    {
      url: `/account`,
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      data: patchAccountDto,
    },
    options,
  );
};

/**
 * @summary Get watch list by user
 */
export const watchListControllerGetWatchList = (
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<WatchListDto>(
    { url: `/watch-list`, method: "GET" },
    options,
  );
};

/**
 * @summary Add item to watch list
 */
export const watchListControllerAddWatchListItem = (
  addWatchListItemDto: BodyType<AddWatchListItemDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<WatchListItemDto>(
    {
      url: `/watch-list/item`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: addWatchListItemDto,
    },
    options,
  );
};

/**
 * @summary Remove item from watch list
 */
export const watchListControllerDeleteWatchListItem = (
  id: number,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    { url: `/watch-list/item/${id}`, method: "DELETE" },
    options,
  );
};

export type RolesControllerCreateResult = NonNullable<
  Awaited<ReturnType<typeof rolesControllerCreate>>
>;
export type AuthControllerSignupResult = NonNullable<
  Awaited<ReturnType<typeof authControllerSignup>>
>;
export type AuthControllerSigninResult = NonNullable<
  Awaited<ReturnType<typeof authControllerSignin>>
>;
export type AuthControllerSignoutResult = NonNullable<
  Awaited<ReturnType<typeof authControllerSignout>>
>;
export type AuthControllerGetSessionInfoResult = NonNullable<
  Awaited<ReturnType<typeof authControllerGetSessionInfo>>
>;
export type AccountControllerGetAccountResult = NonNullable<
  Awaited<ReturnType<typeof accountControllerGetAccount>>
>;
export type AccountControllerPatchAccountResult = NonNullable<
  Awaited<ReturnType<typeof accountControllerPatchAccount>>
>;
export type WatchListControllerGetWatchListResult = NonNullable<
  Awaited<ReturnType<typeof watchListControllerGetWatchList>>
>;
export type WatchListControllerAddWatchListItemResult = NonNullable<
  Awaited<ReturnType<typeof watchListControllerAddWatchListItem>>
>;
export type WatchListControllerDeleteWatchListItemResult = NonNullable<
  Awaited<ReturnType<typeof watchListControllerDeleteWatchListItem>>
>;