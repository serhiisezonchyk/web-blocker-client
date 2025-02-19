/**
 * Generated by orval v7.2.0 🍺
 * Do not edit manually.
 * WebBlock
 * OpenAPI spec version: 1.0.0
 */
import type { BodyType } from './api-instance';
import { createInstance } from './api-instance';
export type BlockListControllerGetListParams = {
  q?: string;
};

export type AddBlockItemDtoType = (typeof AddBlockItemDtoType)[keyof typeof AddBlockItemDtoType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AddBlockItemDtoType = {
  KeyWord: 'KeyWord',
  Website: 'Website',
} as const;

export interface AddBlockItemDto {
  data: string;
  type: AddBlockItemDtoType;
}

export type BlockItemDtoType = (typeof BlockItemDtoType)[keyof typeof BlockItemDtoType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const BlockItemDtoType = {
  KeyWord: 'KeyWord',
  Website: 'Website',
} as const;

export interface BlockItemDto {
  blockListId: string;
  createdAt: string;
  data: string;
  id: string;
  type: BlockItemDtoType;
}

export interface BlockListDto {
  id: string;
  items: BlockItemDto[];
  ownerId: string;
}

export interface PatchAccountDto {
  isBlockingEnabled?: boolean;
}

export interface AccountDto {
  id: string;
  isBlockingEnabled: boolean;
  ownerId: string;
}

export interface GetSessionInfoDto {
  email: string;
  exp: number;
  iat: number;
  id: string;
}

export interface SignInBodyDto {
  email: string;
  password: string;
}

export interface SignUpBodyDto {
  email: string;
  password: string;
}

export interface HelloWorldDTO {
  message: string;
}

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

export const appControllerGetHello = (options?: SecondParameter<typeof createInstance>) => {
  return createInstance<HelloWorldDTO>({ url: `/v1`, method: 'GET' }, options);
};

export const authControllerSignUp = (
  signUpBodyDto: BodyType<SignUpBodyDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    {
      url: `/v1/auth/sign-up`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: signUpBodyDto,
    },
    options,
  );
};

export const authControllerSignIn = (
  signInBodyDto: BodyType<SignInBodyDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    {
      url: `/v1/auth/sign-in`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: signInBodyDto,
    },
    options,
  );
};

export const authControllerSignOut = (options?: SecondParameter<typeof createInstance>) => {
  return createInstance<void>({ url: `/v1/auth/sign-out`, method: 'POST' }, options);
};

export const authControllerGetSessionInfo = (options?: SecondParameter<typeof createInstance>) => {
  return createInstance<GetSessionInfoDto>({ url: `/v1/auth/session`, method: 'GET' }, options);
};

export const accountControllerGetAccount = (options?: SecondParameter<typeof createInstance>) => {
  return createInstance<AccountDto>({ url: `/v1/account`, method: 'GET' }, options);
};

export const accountControllerPatchAccount = (
  patchAccountDto: BodyType<PatchAccountDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<AccountDto>(
    {
      url: `/v1/account`,
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      data: patchAccountDto,
    },
    options,
  );
};

export const blockListControllerGetList = (
  params?: BlockListControllerGetListParams,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<BlockListDto>({ url: `/v1/block-list`, method: 'GET', params }, options);
};

export const blockListControllerAddBlockItem = (
  addBlockItemDto: BodyType<AddBlockItemDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<BlockItemDto>(
    {
      url: `/v1/block-list/item`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: addBlockItemDto,
    },
    options,
  );
};

export const blockListControllerRemoveBlockItem = (id: string, options?: SecondParameter<typeof createInstance>) => {
  return createInstance<BlockItemDto>({ url: `/v1/block-list/item/${id}`, method: 'DELETE' }, options);
};

export type AppControllerGetHelloResult = NonNullable<Awaited<ReturnType<typeof appControllerGetHello>>>;
export type AuthControllerSignUpResult = NonNullable<Awaited<ReturnType<typeof authControllerSignUp>>>;
export type AuthControllerSignInResult = NonNullable<Awaited<ReturnType<typeof authControllerSignIn>>>;
export type AuthControllerSignOutResult = NonNullable<Awaited<ReturnType<typeof authControllerSignOut>>>;
export type AuthControllerGetSessionInfoResult = NonNullable<Awaited<ReturnType<typeof authControllerGetSessionInfo>>>;
export type AccountControllerGetAccountResult = NonNullable<Awaited<ReturnType<typeof accountControllerGetAccount>>>;
export type AccountControllerPatchAccountResult = NonNullable<
  Awaited<ReturnType<typeof accountControllerPatchAccount>>
>;
export type BlockListControllerGetListResult = NonNullable<Awaited<ReturnType<typeof blockListControllerGetList>>>;
export type BlockListControllerAddBlockItemResult = NonNullable<
  Awaited<ReturnType<typeof blockListControllerAddBlockItem>>
>;
export type BlockListControllerRemoveBlockItemResult = NonNullable<
  Awaited<ReturnType<typeof blockListControllerRemoveBlockItem>>
>;
