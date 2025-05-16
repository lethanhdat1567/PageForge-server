
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Template
 * 
 */
export type Template = $Result.DefaultSelection<Prisma.$TemplatePayload>
/**
 * Model UserTemplate
 * 
 */
export type UserTemplate = $Result.DefaultSelection<Prisma.$UserTemplatePayload>
/**
 * Model Content
 * 
 */
export type Content = $Result.DefaultSelection<Prisma.$ContentPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.template`: Exposes CRUD operations for the **Template** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Templates
    * const templates = await prisma.template.findMany()
    * ```
    */
  get template(): Prisma.TemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userTemplate`: Exposes CRUD operations for the **UserTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserTemplates
    * const userTemplates = await prisma.userTemplate.findMany()
    * ```
    */
  get userTemplate(): Prisma.UserTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.content`: Exposes CRUD operations for the **Content** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contents
    * const contents = await prisma.content.findMany()
    * ```
    */
  get content(): Prisma.ContentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Session: 'Session',
    Template: 'Template',
    UserTemplate: 'UserTemplate',
    Content: 'Content',
    Review: 'Review'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "session" | "template" | "userTemplate" | "content" | "review"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Template: {
        payload: Prisma.$TemplatePayload<ExtArgs>
        fields: Prisma.TemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findFirst: {
            args: Prisma.TemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findMany: {
            args: Prisma.TemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          create: {
            args: Prisma.TemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          createMany: {
            args: Prisma.TemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          update: {
            args: Prisma.TemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          deleteMany: {
            args: Prisma.TemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          aggregate: {
            args: Prisma.TemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplate>
          }
          groupBy: {
            args: Prisma.TemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemplateCountArgs<ExtArgs>
            result: $Utils.Optional<TemplateCountAggregateOutputType> | number
          }
        }
      }
      UserTemplate: {
        payload: Prisma.$UserTemplatePayload<ExtArgs>
        fields: Prisma.UserTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTemplatePayload>
          }
          findFirst: {
            args: Prisma.UserTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTemplatePayload>
          }
          findMany: {
            args: Prisma.UserTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTemplatePayload>[]
          }
          create: {
            args: Prisma.UserTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTemplatePayload>
          }
          createMany: {
            args: Prisma.UserTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTemplatePayload>
          }
          update: {
            args: Prisma.UserTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTemplatePayload>
          }
          deleteMany: {
            args: Prisma.UserTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTemplatePayload>
          }
          aggregate: {
            args: Prisma.UserTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserTemplate>
          }
          groupBy: {
            args: Prisma.UserTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<UserTemplateCountAggregateOutputType> | number
          }
        }
      }
      Content: {
        payload: Prisma.$ContentPayload<ExtArgs>
        fields: Prisma.ContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          findFirst: {
            args: Prisma.ContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          findMany: {
            args: Prisma.ContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>[]
          }
          create: {
            args: Prisma.ContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          createMany: {
            args: Prisma.ContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          update: {
            args: Prisma.ContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          deleteMany: {
            args: Prisma.ContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          aggregate: {
            args: Prisma.ContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContent>
          }
          groupBy: {
            args: Prisma.ContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContentCountArgs<ExtArgs>
            result: $Utils.Optional<ContentCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    session?: SessionOmit
    template?: TemplateOmit
    userTemplate?: UserTemplateOmit
    content?: ContentOmit
    review?: ReviewOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userTemplates: number
    reviews: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userTemplates?: boolean | UserCountOutputTypeCountUserTemplatesArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTemplateWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type TemplateCountOutputType
   */

  export type TemplateCountOutputType = {
    userTemplates: number
  }

  export type TemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userTemplates?: boolean | TemplateCountOutputTypeCountUserTemplatesArgs
  }

  // Custom InputTypes
  /**
   * TemplateCountOutputType without action
   */
  export type TemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateCountOutputType
     */
    select?: TemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TemplateCountOutputType without action
   */
  export type TemplateCountOutputTypeCountUserTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTemplateWhereInput
  }


  /**
   * Count Type UserTemplateCountOutputType
   */

  export type UserTemplateCountOutputType = {
    contents: number
    reviews: number
  }

  export type UserTemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contents?: boolean | UserTemplateCountOutputTypeCountContentsArgs
    reviews?: boolean | UserTemplateCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * UserTemplateCountOutputType without action
   */
  export type UserTemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTemplateCountOutputType
     */
    select?: UserTemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserTemplateCountOutputType without action
   */
  export type UserTemplateCountOutputTypeCountContentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentWhereInput
  }

  /**
   * UserTemplateCountOutputType without action
   */
  export type UserTemplateCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type ReviewCountOutputType
   */

  export type ReviewCountOutputType = {
    replies: number
  }

  export type ReviewCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replies?: boolean | ReviewCountOutputTypeCountRepliesArgs
  }

  // Custom InputTypes
  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewCountOutputType
     */
    select?: ReviewCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    role: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    role: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    storename: string | null
    email: string | null
    password: string | null
    avatar: string | null
    role: number | null
    googleId: string | null
    facebookId: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    storename: string | null
    email: string | null
    password: string | null
    avatar: string | null
    role: number | null
    googleId: string | null
    facebookId: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    storename: number
    email: number
    password: number
    avatar: number
    role: number
    googleId: number
    facebookId: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    role?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    role?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    storename?: true
    email?: true
    password?: true
    avatar?: true
    role?: true
    googleId?: true
    facebookId?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    storename?: true
    email?: true
    password?: true
    avatar?: true
    role?: true
    googleId?: true
    facebookId?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    storename?: true
    email?: true
    password?: true
    avatar?: true
    role?: true
    googleId?: true
    facebookId?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string | null
    storename: string | null
    email: string
    password: string | null
    avatar: string | null
    role: number
    googleId: string | null
    facebookId: string | null
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    storename?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    role?: boolean
    googleId?: boolean
    facebookId?: boolean
    created_at?: boolean
    updated_at?: boolean
    userTemplates?: boolean | User$userTemplatesArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    storename?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    role?: boolean
    googleId?: boolean
    facebookId?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "storename" | "email" | "password" | "avatar" | "role" | "googleId" | "facebookId" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userTemplates?: boolean | User$userTemplatesArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userTemplates: Prisma.$UserTemplatePayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string | null
      storename: string | null
      email: string
      password: string | null
      avatar: string | null
      role: number
      googleId: string | null
      facebookId: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userTemplates<T extends User$userTemplatesArgs<ExtArgs> = {}>(args?: Subset<T, User$userTemplatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly storename: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Int'>
    readonly googleId: FieldRef<"User", 'String'>
    readonly facebookId: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.userTemplates
   */
  export type User$userTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTemplate
     */
    select?: UserTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTemplate
     */
    omit?: UserTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTemplateInclude<ExtArgs> | null
    where?: UserTemplateWhereInput
    orderBy?: UserTemplateOrderByWithRelationInput | UserTemplateOrderByWithRelationInput[]
    cursor?: UserTemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserTemplateScalarFieldEnum | UserTemplateScalarFieldEnum[]
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionAvgAggregateOutputType = {
    accountId: number | null
  }

  export type SessionSumAggregateOutputType = {
    accountId: number | null
  }

  export type SessionMinAggregateOutputType = {
    accountId: number | null
    session: string | null
    expiresAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    accountId: number | null
    session: string | null
    expiresAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    accountId: number
    session: number
    expiresAt: number
    _all: number
  }


  export type SessionAvgAggregateInputType = {
    accountId?: true
  }

  export type SessionSumAggregateInputType = {
    accountId?: true
  }

  export type SessionMinAggregateInputType = {
    accountId?: true
    session?: true
    expiresAt?: true
  }

  export type SessionMaxAggregateInputType = {
    accountId?: true
    session?: true
    expiresAt?: true
  }

  export type SessionCountAggregateInputType = {
    accountId?: true
    session?: true
    expiresAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _avg?: SessionAvgAggregateInputType
    _sum?: SessionSumAggregateInputType
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    accountId: number
    session: string
    expiresAt: Date
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    accountId?: boolean
    session?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["session"]>



  export type SessionSelectScalar = {
    accountId?: boolean
    session?: boolean
    expiresAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"accountId" | "session" | "expiresAt", ExtArgs["result"]["session"]>

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      accountId: number
      session: string
      expiresAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `accountId`
     * const sessionWithAccountIdOnly = await prisma.session.findMany({ select: { accountId: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly accountId: FieldRef<"Session", 'Int'>
    readonly session: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
  }


  /**
   * Model Template
   */

  export type AggregateTemplate = {
    _count: TemplateCountAggregateOutputType | null
    _avg: TemplateAvgAggregateOutputType | null
    _sum: TemplateSumAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  export type TemplateAvgAggregateOutputType = {
    id: number | null
  }

  export type TemplateSumAggregateOutputType = {
    id: number | null
  }

  export type TemplateMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    main_thumbnail: string | null
    sub_thumbnail: string | null
    banner: string | null
    price: string | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TemplateMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    main_thumbnail: string | null
    sub_thumbnail: string | null
    banner: string | null
    price: string | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TemplateCountAggregateOutputType = {
    id: number
    name: number
    description: number
    main_thumbnail: number
    sub_thumbnail: number
    banner: number
    price: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TemplateAvgAggregateInputType = {
    id?: true
  }

  export type TemplateSumAggregateInputType = {
    id?: true
  }

  export type TemplateMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    main_thumbnail?: true
    sub_thumbnail?: true
    banner?: true
    price?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type TemplateMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    main_thumbnail?: true
    sub_thumbnail?: true
    banner?: true
    price?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type TemplateCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    main_thumbnail?: true
    sub_thumbnail?: true
    banner?: true
    price?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Template to aggregate.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Templates
    **/
    _count?: true | TemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplateMaxAggregateInputType
  }

  export type GetTemplateAggregateType<T extends TemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplate[P]>
      : GetScalarType<T[P], AggregateTemplate[P]>
  }




  export type TemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateWhereInput
    orderBy?: TemplateOrderByWithAggregationInput | TemplateOrderByWithAggregationInput[]
    by: TemplateScalarFieldEnum[] | TemplateScalarFieldEnum
    having?: TemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplateCountAggregateInputType | true
    _avg?: TemplateAvgAggregateInputType
    _sum?: TemplateSumAggregateInputType
    _min?: TemplateMinAggregateInputType
    _max?: TemplateMaxAggregateInputType
  }

  export type TemplateGroupByOutputType = {
    id: number
    name: string
    description: string
    main_thumbnail: string | null
    sub_thumbnail: string | null
    banner: string | null
    price: string | null
    status: string
    created_at: Date
    updated_at: Date
    _count: TemplateCountAggregateOutputType | null
    _avg: TemplateAvgAggregateOutputType | null
    _sum: TemplateSumAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  type GetTemplateGroupByPayload<T extends TemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplateGroupByOutputType[P]>
            : GetScalarType<T[P], TemplateGroupByOutputType[P]>
        }
      >
    >


  export type TemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    main_thumbnail?: boolean
    sub_thumbnail?: boolean
    banner?: boolean
    price?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    userTemplates?: boolean | Template$userTemplatesArgs<ExtArgs>
    _count?: boolean | TemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>



  export type TemplateSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    main_thumbnail?: boolean
    sub_thumbnail?: boolean
    banner?: boolean
    price?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type TemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "main_thumbnail" | "sub_thumbnail" | "banner" | "price" | "status" | "created_at" | "updated_at", ExtArgs["result"]["template"]>
  export type TemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userTemplates?: boolean | Template$userTemplatesArgs<ExtArgs>
    _count?: boolean | TemplateCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Template"
    objects: {
      userTemplates: Prisma.$UserTemplatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      main_thumbnail: string | null
      sub_thumbnail: string | null
      banner: string | null
      price: string | null
      status: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["template"]>
    composites: {}
  }

  type TemplateGetPayload<S extends boolean | null | undefined | TemplateDefaultArgs> = $Result.GetResult<Prisma.$TemplatePayload, S>

  type TemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TemplateCountAggregateInputType | true
    }

  export interface TemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Template'], meta: { name: 'Template' } }
    /**
     * Find zero or one Template that matches the filter.
     * @param {TemplateFindUniqueArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemplateFindUniqueArgs>(args: SelectSubset<T, TemplateFindUniqueArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Template that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TemplateFindUniqueOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, TemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemplateFindFirstArgs>(args?: SelectSubset<T, TemplateFindFirstArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, TemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Templates
     * const templates = await prisma.template.findMany()
     * 
     * // Get first 10 Templates
     * const templates = await prisma.template.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const templateWithIdOnly = await prisma.template.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TemplateFindManyArgs>(args?: SelectSubset<T, TemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Template.
     * @param {TemplateCreateArgs} args - Arguments to create a Template.
     * @example
     * // Create one Template
     * const Template = await prisma.template.create({
     *   data: {
     *     // ... data to create a Template
     *   }
     * })
     * 
     */
    create<T extends TemplateCreateArgs>(args: SelectSubset<T, TemplateCreateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Templates.
     * @param {TemplateCreateManyArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TemplateCreateManyArgs>(args?: SelectSubset<T, TemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Template.
     * @param {TemplateDeleteArgs} args - Arguments to delete one Template.
     * @example
     * // Delete one Template
     * const Template = await prisma.template.delete({
     *   where: {
     *     // ... filter to delete one Template
     *   }
     * })
     * 
     */
    delete<T extends TemplateDeleteArgs>(args: SelectSubset<T, TemplateDeleteArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Template.
     * @param {TemplateUpdateArgs} args - Arguments to update one Template.
     * @example
     * // Update one Template
     * const template = await prisma.template.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TemplateUpdateArgs>(args: SelectSubset<T, TemplateUpdateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Templates.
     * @param {TemplateDeleteManyArgs} args - Arguments to filter Templates to delete.
     * @example
     * // Delete a few Templates
     * const { count } = await prisma.template.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TemplateDeleteManyArgs>(args?: SelectSubset<T, TemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TemplateUpdateManyArgs>(args: SelectSubset<T, TemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Template.
     * @param {TemplateUpsertArgs} args - Arguments to update or create a Template.
     * @example
     * // Update or create a Template
     * const template = await prisma.template.upsert({
     *   create: {
     *     // ... data to create a Template
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Template we want to update
     *   }
     * })
     */
    upsert<T extends TemplateUpsertArgs>(args: SelectSubset<T, TemplateUpsertArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateCountArgs} args - Arguments to filter Templates to count.
     * @example
     * // Count the number of Templates
     * const count = await prisma.template.count({
     *   where: {
     *     // ... the filter for the Templates we want to count
     *   }
     * })
    **/
    count<T extends TemplateCountArgs>(
      args?: Subset<T, TemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TemplateAggregateArgs>(args: Subset<T, TemplateAggregateArgs>): Prisma.PrismaPromise<GetTemplateAggregateType<T>>

    /**
     * Group by Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplateGroupByArgs['orderBy'] }
        : { orderBy?: TemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Template model
   */
  readonly fields: TemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Template.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userTemplates<T extends Template$userTemplatesArgs<ExtArgs> = {}>(args?: Subset<T, Template$userTemplatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Template model
   */
  interface TemplateFieldRefs {
    readonly id: FieldRef<"Template", 'Int'>
    readonly name: FieldRef<"Template", 'String'>
    readonly description: FieldRef<"Template", 'String'>
    readonly main_thumbnail: FieldRef<"Template", 'String'>
    readonly sub_thumbnail: FieldRef<"Template", 'String'>
    readonly banner: FieldRef<"Template", 'String'>
    readonly price: FieldRef<"Template", 'String'>
    readonly status: FieldRef<"Template", 'String'>
    readonly created_at: FieldRef<"Template", 'DateTime'>
    readonly updated_at: FieldRef<"Template", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Template findUnique
   */
  export type TemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findUniqueOrThrow
   */
  export type TemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findFirst
   */
  export type TemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findFirstOrThrow
   */
  export type TemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findMany
   */
  export type TemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Templates to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template create
   */
  export type TemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a Template.
     */
    data: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
  }

  /**
   * Template createMany
   */
  export type TemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Template update
   */
  export type TemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a Template.
     */
    data: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
    /**
     * Choose, which Template to update.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template updateMany
   */
  export type TemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyInput>
    /**
     * Filter which Templates to update
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to update.
     */
    limit?: number
  }

  /**
   * Template upsert
   */
  export type TemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the Template to update in case it exists.
     */
    where: TemplateWhereUniqueInput
    /**
     * In case the Template found by the `where` argument doesn't exist, create a new Template with this data.
     */
    create: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
    /**
     * In case the Template was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
  }

  /**
   * Template delete
   */
  export type TemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter which Template to delete.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template deleteMany
   */
  export type TemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Templates to delete
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to delete.
     */
    limit?: number
  }

  /**
   * Template.userTemplates
   */
  export type Template$userTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTemplate
     */
    select?: UserTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTemplate
     */
    omit?: UserTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTemplateInclude<ExtArgs> | null
    where?: UserTemplateWhereInput
    orderBy?: UserTemplateOrderByWithRelationInput | UserTemplateOrderByWithRelationInput[]
    cursor?: UserTemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserTemplateScalarFieldEnum | UserTemplateScalarFieldEnum[]
  }

  /**
   * Template without action
   */
  export type TemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
  }


  /**
   * Model UserTemplate
   */

  export type AggregateUserTemplate = {
    _count: UserTemplateCountAggregateOutputType | null
    _avg: UserTemplateAvgAggregateOutputType | null
    _sum: UserTemplateSumAggregateOutputType | null
    _min: UserTemplateMinAggregateOutputType | null
    _max: UserTemplateMaxAggregateOutputType | null
  }

  export type UserTemplateAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    template_id: number | null
  }

  export type UserTemplateSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    template_id: number | null
  }

  export type UserTemplateMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    template_id: number | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserTemplateMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    template_id: number | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserTemplateCountAggregateOutputType = {
    id: number
    user_id: number
    template_id: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserTemplateAvgAggregateInputType = {
    id?: true
    user_id?: true
    template_id?: true
  }

  export type UserTemplateSumAggregateInputType = {
    id?: true
    user_id?: true
    template_id?: true
  }

  export type UserTemplateMinAggregateInputType = {
    id?: true
    user_id?: true
    template_id?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type UserTemplateMaxAggregateInputType = {
    id?: true
    user_id?: true
    template_id?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type UserTemplateCountAggregateInputType = {
    id?: true
    user_id?: true
    template_id?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTemplate to aggregate.
     */
    where?: UserTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTemplates to fetch.
     */
    orderBy?: UserTemplateOrderByWithRelationInput | UserTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserTemplates
    **/
    _count?: true | UserTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserTemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserTemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserTemplateMaxAggregateInputType
  }

  export type GetUserTemplateAggregateType<T extends UserTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateUserTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserTemplate[P]>
      : GetScalarType<T[P], AggregateUserTemplate[P]>
  }




  export type UserTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTemplateWhereInput
    orderBy?: UserTemplateOrderByWithAggregationInput | UserTemplateOrderByWithAggregationInput[]
    by: UserTemplateScalarFieldEnum[] | UserTemplateScalarFieldEnum
    having?: UserTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserTemplateCountAggregateInputType | true
    _avg?: UserTemplateAvgAggregateInputType
    _sum?: UserTemplateSumAggregateInputType
    _min?: UserTemplateMinAggregateInputType
    _max?: UserTemplateMaxAggregateInputType
  }

  export type UserTemplateGroupByOutputType = {
    id: number
    user_id: number
    template_id: number
    status: string
    created_at: Date
    updated_at: Date
    _count: UserTemplateCountAggregateOutputType | null
    _avg: UserTemplateAvgAggregateOutputType | null
    _sum: UserTemplateSumAggregateOutputType | null
    _min: UserTemplateMinAggregateOutputType | null
    _max: UserTemplateMaxAggregateOutputType | null
  }

  type GetUserTemplateGroupByPayload<T extends UserTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], UserTemplateGroupByOutputType[P]>
        }
      >
    >


  export type UserTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    template_id?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | TemplateDefaultArgs<ExtArgs>
    contents?: boolean | UserTemplate$contentsArgs<ExtArgs>
    reviews?: boolean | UserTemplate$reviewsArgs<ExtArgs>
    _count?: boolean | UserTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTemplate"]>



  export type UserTemplateSelectScalar = {
    id?: boolean
    user_id?: boolean
    template_id?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "template_id" | "status" | "created_at" | "updated_at", ExtArgs["result"]["userTemplate"]>
  export type UserTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | TemplateDefaultArgs<ExtArgs>
    contents?: boolean | UserTemplate$contentsArgs<ExtArgs>
    reviews?: boolean | UserTemplate$reviewsArgs<ExtArgs>
    _count?: boolean | UserTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserTemplate"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      template: Prisma.$TemplatePayload<ExtArgs>
      contents: Prisma.$ContentPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      template_id: number
      status: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["userTemplate"]>
    composites: {}
  }

  type UserTemplateGetPayload<S extends boolean | null | undefined | UserTemplateDefaultArgs> = $Result.GetResult<Prisma.$UserTemplatePayload, S>

  type UserTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserTemplateCountAggregateInputType | true
    }

  export interface UserTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserTemplate'], meta: { name: 'UserTemplate' } }
    /**
     * Find zero or one UserTemplate that matches the filter.
     * @param {UserTemplateFindUniqueArgs} args - Arguments to find a UserTemplate
     * @example
     * // Get one UserTemplate
     * const userTemplate = await prisma.userTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserTemplateFindUniqueArgs>(args: SelectSubset<T, UserTemplateFindUniqueArgs<ExtArgs>>): Prisma__UserTemplateClient<$Result.GetResult<Prisma.$UserTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserTemplateFindUniqueOrThrowArgs} args - Arguments to find a UserTemplate
     * @example
     * // Get one UserTemplate
     * const userTemplate = await prisma.userTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, UserTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserTemplateClient<$Result.GetResult<Prisma.$UserTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTemplateFindFirstArgs} args - Arguments to find a UserTemplate
     * @example
     * // Get one UserTemplate
     * const userTemplate = await prisma.userTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserTemplateFindFirstArgs>(args?: SelectSubset<T, UserTemplateFindFirstArgs<ExtArgs>>): Prisma__UserTemplateClient<$Result.GetResult<Prisma.$UserTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTemplateFindFirstOrThrowArgs} args - Arguments to find a UserTemplate
     * @example
     * // Get one UserTemplate
     * const userTemplate = await prisma.userTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, UserTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserTemplateClient<$Result.GetResult<Prisma.$UserTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserTemplates
     * const userTemplates = await prisma.userTemplate.findMany()
     * 
     * // Get first 10 UserTemplates
     * const userTemplates = await prisma.userTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userTemplateWithIdOnly = await prisma.userTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserTemplateFindManyArgs>(args?: SelectSubset<T, UserTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserTemplate.
     * @param {UserTemplateCreateArgs} args - Arguments to create a UserTemplate.
     * @example
     * // Create one UserTemplate
     * const UserTemplate = await prisma.userTemplate.create({
     *   data: {
     *     // ... data to create a UserTemplate
     *   }
     * })
     * 
     */
    create<T extends UserTemplateCreateArgs>(args: SelectSubset<T, UserTemplateCreateArgs<ExtArgs>>): Prisma__UserTemplateClient<$Result.GetResult<Prisma.$UserTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserTemplates.
     * @param {UserTemplateCreateManyArgs} args - Arguments to create many UserTemplates.
     * @example
     * // Create many UserTemplates
     * const userTemplate = await prisma.userTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserTemplateCreateManyArgs>(args?: SelectSubset<T, UserTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserTemplate.
     * @param {UserTemplateDeleteArgs} args - Arguments to delete one UserTemplate.
     * @example
     * // Delete one UserTemplate
     * const UserTemplate = await prisma.userTemplate.delete({
     *   where: {
     *     // ... filter to delete one UserTemplate
     *   }
     * })
     * 
     */
    delete<T extends UserTemplateDeleteArgs>(args: SelectSubset<T, UserTemplateDeleteArgs<ExtArgs>>): Prisma__UserTemplateClient<$Result.GetResult<Prisma.$UserTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserTemplate.
     * @param {UserTemplateUpdateArgs} args - Arguments to update one UserTemplate.
     * @example
     * // Update one UserTemplate
     * const userTemplate = await prisma.userTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserTemplateUpdateArgs>(args: SelectSubset<T, UserTemplateUpdateArgs<ExtArgs>>): Prisma__UserTemplateClient<$Result.GetResult<Prisma.$UserTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserTemplates.
     * @param {UserTemplateDeleteManyArgs} args - Arguments to filter UserTemplates to delete.
     * @example
     * // Delete a few UserTemplates
     * const { count } = await prisma.userTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserTemplateDeleteManyArgs>(args?: SelectSubset<T, UserTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserTemplates
     * const userTemplate = await prisma.userTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserTemplateUpdateManyArgs>(args: SelectSubset<T, UserTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserTemplate.
     * @param {UserTemplateUpsertArgs} args - Arguments to update or create a UserTemplate.
     * @example
     * // Update or create a UserTemplate
     * const userTemplate = await prisma.userTemplate.upsert({
     *   create: {
     *     // ... data to create a UserTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserTemplate we want to update
     *   }
     * })
     */
    upsert<T extends UserTemplateUpsertArgs>(args: SelectSubset<T, UserTemplateUpsertArgs<ExtArgs>>): Prisma__UserTemplateClient<$Result.GetResult<Prisma.$UserTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTemplateCountArgs} args - Arguments to filter UserTemplates to count.
     * @example
     * // Count the number of UserTemplates
     * const count = await prisma.userTemplate.count({
     *   where: {
     *     // ... the filter for the UserTemplates we want to count
     *   }
     * })
    **/
    count<T extends UserTemplateCountArgs>(
      args?: Subset<T, UserTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserTemplateAggregateArgs>(args: Subset<T, UserTemplateAggregateArgs>): Prisma.PrismaPromise<GetUserTemplateAggregateType<T>>

    /**
     * Group by UserTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserTemplateGroupByArgs['orderBy'] }
        : { orderBy?: UserTemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserTemplate model
   */
  readonly fields: UserTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    template<T extends TemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TemplateDefaultArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contents<T extends UserTemplate$contentsArgs<ExtArgs> = {}>(args?: Subset<T, UserTemplate$contentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends UserTemplate$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, UserTemplate$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserTemplate model
   */
  interface UserTemplateFieldRefs {
    readonly id: FieldRef<"UserTemplate", 'Int'>
    readonly user_id: FieldRef<"UserTemplate", 'Int'>
    readonly template_id: FieldRef<"UserTemplate", 'Int'>
    readonly status: FieldRef<"UserTemplate", 'String'>
    readonly created_at: FieldRef<"UserTemplate", 'DateTime'>
    readonly updated_at: FieldRef<"UserTemplate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserTemplate findUnique
   */
  export type UserTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTemplate
     */
    select?: UserTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTemplate
     */
    omit?: UserTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTemplateInclude<ExtArgs> | null
    /**
     * Filter, which UserTemplate to fetch.
     */
    where: UserTemplateWhereUniqueInput
  }

  /**
   * UserTemplate findUniqueOrThrow
   */
  export type UserTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTemplate
     */
    select?: UserTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTemplate
     */
    omit?: UserTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTemplateInclude<ExtArgs> | null
    /**
     * Filter, which UserTemplate to fetch.
     */
    where: UserTemplateWhereUniqueInput
  }

  /**
   * UserTemplate findFirst
   */
  export type UserTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTemplate
     */
    select?: UserTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTemplate
     */
    omit?: UserTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTemplateInclude<ExtArgs> | null
    /**
     * Filter, which UserTemplate to fetch.
     */
    where?: UserTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTemplates to fetch.
     */
    orderBy?: UserTemplateOrderByWithRelationInput | UserTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTemplates.
     */
    cursor?: UserTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTemplates.
     */
    distinct?: UserTemplateScalarFieldEnum | UserTemplateScalarFieldEnum[]
  }

  /**
   * UserTemplate findFirstOrThrow
   */
  export type UserTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTemplate
     */
    select?: UserTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTemplate
     */
    omit?: UserTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTemplateInclude<ExtArgs> | null
    /**
     * Filter, which UserTemplate to fetch.
     */
    where?: UserTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTemplates to fetch.
     */
    orderBy?: UserTemplateOrderByWithRelationInput | UserTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTemplates.
     */
    cursor?: UserTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTemplates.
     */
    distinct?: UserTemplateScalarFieldEnum | UserTemplateScalarFieldEnum[]
  }

  /**
   * UserTemplate findMany
   */
  export type UserTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTemplate
     */
    select?: UserTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTemplate
     */
    omit?: UserTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTemplateInclude<ExtArgs> | null
    /**
     * Filter, which UserTemplates to fetch.
     */
    where?: UserTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTemplates to fetch.
     */
    orderBy?: UserTemplateOrderByWithRelationInput | UserTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserTemplates.
     */
    cursor?: UserTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTemplates.
     */
    skip?: number
    distinct?: UserTemplateScalarFieldEnum | UserTemplateScalarFieldEnum[]
  }

  /**
   * UserTemplate create
   */
  export type UserTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTemplate
     */
    select?: UserTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTemplate
     */
    omit?: UserTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a UserTemplate.
     */
    data: XOR<UserTemplateCreateInput, UserTemplateUncheckedCreateInput>
  }

  /**
   * UserTemplate createMany
   */
  export type UserTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserTemplates.
     */
    data: UserTemplateCreateManyInput | UserTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserTemplate update
   */
  export type UserTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTemplate
     */
    select?: UserTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTemplate
     */
    omit?: UserTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a UserTemplate.
     */
    data: XOR<UserTemplateUpdateInput, UserTemplateUncheckedUpdateInput>
    /**
     * Choose, which UserTemplate to update.
     */
    where: UserTemplateWhereUniqueInput
  }

  /**
   * UserTemplate updateMany
   */
  export type UserTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserTemplates.
     */
    data: XOR<UserTemplateUpdateManyMutationInput, UserTemplateUncheckedUpdateManyInput>
    /**
     * Filter which UserTemplates to update
     */
    where?: UserTemplateWhereInput
    /**
     * Limit how many UserTemplates to update.
     */
    limit?: number
  }

  /**
   * UserTemplate upsert
   */
  export type UserTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTemplate
     */
    select?: UserTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTemplate
     */
    omit?: UserTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the UserTemplate to update in case it exists.
     */
    where: UserTemplateWhereUniqueInput
    /**
     * In case the UserTemplate found by the `where` argument doesn't exist, create a new UserTemplate with this data.
     */
    create: XOR<UserTemplateCreateInput, UserTemplateUncheckedCreateInput>
    /**
     * In case the UserTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserTemplateUpdateInput, UserTemplateUncheckedUpdateInput>
  }

  /**
   * UserTemplate delete
   */
  export type UserTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTemplate
     */
    select?: UserTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTemplate
     */
    omit?: UserTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTemplateInclude<ExtArgs> | null
    /**
     * Filter which UserTemplate to delete.
     */
    where: UserTemplateWhereUniqueInput
  }

  /**
   * UserTemplate deleteMany
   */
  export type UserTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTemplates to delete
     */
    where?: UserTemplateWhereInput
    /**
     * Limit how many UserTemplates to delete.
     */
    limit?: number
  }

  /**
   * UserTemplate.contents
   */
  export type UserTemplate$contentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    where?: ContentWhereInput
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    cursor?: ContentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * UserTemplate.reviews
   */
  export type UserTemplate$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * UserTemplate without action
   */
  export type UserTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTemplate
     */
    select?: UserTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTemplate
     */
    omit?: UserTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTemplateInclude<ExtArgs> | null
  }


  /**
   * Model Content
   */

  export type AggregateContent = {
    _count: ContentCountAggregateOutputType | null
    _avg: ContentAvgAggregateOutputType | null
    _sum: ContentSumAggregateOutputType | null
    _min: ContentMinAggregateOutputType | null
    _max: ContentMaxAggregateOutputType | null
  }

  export type ContentAvgAggregateOutputType = {
    id: number | null
    userTemplateId: number | null
  }

  export type ContentSumAggregateOutputType = {
    id: number | null
    userTemplateId: number | null
  }

  export type ContentMinAggregateOutputType = {
    id: number | null
    userTemplateId: number | null
    sectionName: string | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ContentMaxAggregateOutputType = {
    id: number | null
    userTemplateId: number | null
    sectionName: string | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ContentCountAggregateOutputType = {
    id: number
    userTemplateId: number
    sectionName: number
    contentJson: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ContentAvgAggregateInputType = {
    id?: true
    userTemplateId?: true
  }

  export type ContentSumAggregateInputType = {
    id?: true
    userTemplateId?: true
  }

  export type ContentMinAggregateInputType = {
    id?: true
    userTemplateId?: true
    sectionName?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type ContentMaxAggregateInputType = {
    id?: true
    userTemplateId?: true
    sectionName?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type ContentCountAggregateInputType = {
    id?: true
    userTemplateId?: true
    sectionName?: true
    contentJson?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Content to aggregate.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contents
    **/
    _count?: true | ContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContentMaxAggregateInputType
  }

  export type GetContentAggregateType<T extends ContentAggregateArgs> = {
        [P in keyof T & keyof AggregateContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContent[P]>
      : GetScalarType<T[P], AggregateContent[P]>
  }




  export type ContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentWhereInput
    orderBy?: ContentOrderByWithAggregationInput | ContentOrderByWithAggregationInput[]
    by: ContentScalarFieldEnum[] | ContentScalarFieldEnum
    having?: ContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContentCountAggregateInputType | true
    _avg?: ContentAvgAggregateInputType
    _sum?: ContentSumAggregateInputType
    _min?: ContentMinAggregateInputType
    _max?: ContentMaxAggregateInputType
  }

  export type ContentGroupByOutputType = {
    id: number
    userTemplateId: number
    sectionName: string
    contentJson: JsonValue
    status: string
    created_at: Date
    updated_at: Date
    _count: ContentCountAggregateOutputType | null
    _avg: ContentAvgAggregateOutputType | null
    _sum: ContentSumAggregateOutputType | null
    _min: ContentMinAggregateOutputType | null
    _max: ContentMaxAggregateOutputType | null
  }

  type GetContentGroupByPayload<T extends ContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContentGroupByOutputType[P]>
            : GetScalarType<T[P], ContentGroupByOutputType[P]>
        }
      >
    >


  export type ContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userTemplateId?: boolean
    sectionName?: boolean
    contentJson?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    userTemplate?: boolean | UserTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["content"]>



  export type ContentSelectScalar = {
    id?: boolean
    userTemplateId?: boolean
    sectionName?: boolean
    contentJson?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ContentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userTemplateId" | "sectionName" | "contentJson" | "status" | "created_at" | "updated_at", ExtArgs["result"]["content"]>
  export type ContentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userTemplate?: boolean | UserTemplateDefaultArgs<ExtArgs>
  }

  export type $ContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Content"
    objects: {
      userTemplate: Prisma.$UserTemplatePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userTemplateId: number
      sectionName: string
      contentJson: Prisma.JsonValue
      status: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["content"]>
    composites: {}
  }

  type ContentGetPayload<S extends boolean | null | undefined | ContentDefaultArgs> = $Result.GetResult<Prisma.$ContentPayload, S>

  type ContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContentCountAggregateInputType | true
    }

  export interface ContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Content'], meta: { name: 'Content' } }
    /**
     * Find zero or one Content that matches the filter.
     * @param {ContentFindUniqueArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContentFindUniqueArgs>(args: SelectSubset<T, ContentFindUniqueArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Content that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContentFindUniqueOrThrowArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContentFindUniqueOrThrowArgs>(args: SelectSubset<T, ContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Content that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFindFirstArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContentFindFirstArgs>(args?: SelectSubset<T, ContentFindFirstArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Content that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFindFirstOrThrowArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContentFindFirstOrThrowArgs>(args?: SelectSubset<T, ContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contents
     * const contents = await prisma.content.findMany()
     * 
     * // Get first 10 Contents
     * const contents = await prisma.content.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contentWithIdOnly = await prisma.content.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContentFindManyArgs>(args?: SelectSubset<T, ContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Content.
     * @param {ContentCreateArgs} args - Arguments to create a Content.
     * @example
     * // Create one Content
     * const Content = await prisma.content.create({
     *   data: {
     *     // ... data to create a Content
     *   }
     * })
     * 
     */
    create<T extends ContentCreateArgs>(args: SelectSubset<T, ContentCreateArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contents.
     * @param {ContentCreateManyArgs} args - Arguments to create many Contents.
     * @example
     * // Create many Contents
     * const content = await prisma.content.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContentCreateManyArgs>(args?: SelectSubset<T, ContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Content.
     * @param {ContentDeleteArgs} args - Arguments to delete one Content.
     * @example
     * // Delete one Content
     * const Content = await prisma.content.delete({
     *   where: {
     *     // ... filter to delete one Content
     *   }
     * })
     * 
     */
    delete<T extends ContentDeleteArgs>(args: SelectSubset<T, ContentDeleteArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Content.
     * @param {ContentUpdateArgs} args - Arguments to update one Content.
     * @example
     * // Update one Content
     * const content = await prisma.content.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContentUpdateArgs>(args: SelectSubset<T, ContentUpdateArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contents.
     * @param {ContentDeleteManyArgs} args - Arguments to filter Contents to delete.
     * @example
     * // Delete a few Contents
     * const { count } = await prisma.content.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContentDeleteManyArgs>(args?: SelectSubset<T, ContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contents
     * const content = await prisma.content.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContentUpdateManyArgs>(args: SelectSubset<T, ContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Content.
     * @param {ContentUpsertArgs} args - Arguments to update or create a Content.
     * @example
     * // Update or create a Content
     * const content = await prisma.content.upsert({
     *   create: {
     *     // ... data to create a Content
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Content we want to update
     *   }
     * })
     */
    upsert<T extends ContentUpsertArgs>(args: SelectSubset<T, ContentUpsertArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentCountArgs} args - Arguments to filter Contents to count.
     * @example
     * // Count the number of Contents
     * const count = await prisma.content.count({
     *   where: {
     *     // ... the filter for the Contents we want to count
     *   }
     * })
    **/
    count<T extends ContentCountArgs>(
      args?: Subset<T, ContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Content.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContentAggregateArgs>(args: Subset<T, ContentAggregateArgs>): Prisma.PrismaPromise<GetContentAggregateType<T>>

    /**
     * Group by Content.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContentGroupByArgs['orderBy'] }
        : { orderBy?: ContentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Content model
   */
  readonly fields: ContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Content.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userTemplate<T extends UserTemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserTemplateDefaultArgs<ExtArgs>>): Prisma__UserTemplateClient<$Result.GetResult<Prisma.$UserTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Content model
   */
  interface ContentFieldRefs {
    readonly id: FieldRef<"Content", 'Int'>
    readonly userTemplateId: FieldRef<"Content", 'Int'>
    readonly sectionName: FieldRef<"Content", 'String'>
    readonly contentJson: FieldRef<"Content", 'Json'>
    readonly status: FieldRef<"Content", 'String'>
    readonly created_at: FieldRef<"Content", 'DateTime'>
    readonly updated_at: FieldRef<"Content", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Content findUnique
   */
  export type ContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content findUniqueOrThrow
   */
  export type ContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content findFirst
   */
  export type ContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contents.
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contents.
     */
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * Content findFirstOrThrow
   */
  export type ContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contents.
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contents.
     */
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * Content findMany
   */
  export type ContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Contents to fetch.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contents.
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * Content create
   */
  export type ContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * The data needed to create a Content.
     */
    data: XOR<ContentCreateInput, ContentUncheckedCreateInput>
  }

  /**
   * Content createMany
   */
  export type ContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contents.
     */
    data: ContentCreateManyInput | ContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Content update
   */
  export type ContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * The data needed to update a Content.
     */
    data: XOR<ContentUpdateInput, ContentUncheckedUpdateInput>
    /**
     * Choose, which Content to update.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content updateMany
   */
  export type ContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contents.
     */
    data: XOR<ContentUpdateManyMutationInput, ContentUncheckedUpdateManyInput>
    /**
     * Filter which Contents to update
     */
    where?: ContentWhereInput
    /**
     * Limit how many Contents to update.
     */
    limit?: number
  }

  /**
   * Content upsert
   */
  export type ContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * The filter to search for the Content to update in case it exists.
     */
    where: ContentWhereUniqueInput
    /**
     * In case the Content found by the `where` argument doesn't exist, create a new Content with this data.
     */
    create: XOR<ContentCreateInput, ContentUncheckedCreateInput>
    /**
     * In case the Content was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContentUpdateInput, ContentUncheckedUpdateInput>
  }

  /**
   * Content delete
   */
  export type ContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter which Content to delete.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content deleteMany
   */
  export type ContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contents to delete
     */
    where?: ContentWhereInput
    /**
     * Limit how many Contents to delete.
     */
    limit?: number
  }

  /**
   * Content without action
   */
  export type ContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    user_template_id: number | null
    parent_id: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    user_template_id: number | null
    parent_id: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    user_template_id: number | null
    rating: string | null
    content: string | null
    parent_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    user_template_id: number | null
    rating: string | null
    content: string | null
    parent_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    user_id: number
    user_template_id: number
    rating: number
    content: number
    parent_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    user_id?: true
    user_template_id?: true
    parent_id?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    user_id?: true
    user_template_id?: true
    parent_id?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    user_id?: true
    user_template_id?: true
    rating?: true
    content?: true
    parent_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    user_id?: true
    user_template_id?: true
    rating?: true
    content?: true
    parent_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    user_id?: true
    user_template_id?: true
    rating?: true
    content?: true
    parent_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    user_id: number
    user_template_id: number
    rating: string
    content: string | null
    parent_id: number | null
    created_at: Date
    updated_at: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    user_template_id?: boolean
    rating?: boolean
    content?: boolean
    parent_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    userTemplate?: boolean | UserTemplateDefaultArgs<ExtArgs>
    parent?: boolean | Review$parentArgs<ExtArgs>
    replies?: boolean | Review$repliesArgs<ExtArgs>
    _count?: boolean | ReviewCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>



  export type ReviewSelectScalar = {
    id?: boolean
    user_id?: boolean
    user_template_id?: boolean
    rating?: boolean
    content?: boolean
    parent_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "user_template_id" | "rating" | "content" | "parent_id" | "created_at" | "updated_at", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    userTemplate?: boolean | UserTemplateDefaultArgs<ExtArgs>
    parent?: boolean | Review$parentArgs<ExtArgs>
    replies?: boolean | Review$repliesArgs<ExtArgs>
    _count?: boolean | ReviewCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      userTemplate: Prisma.$UserTemplatePayload<ExtArgs>
      parent: Prisma.$ReviewPayload<ExtArgs> | null
      replies: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      user_template_id: number
      rating: string
      content: string | null
      parent_id: number | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userTemplate<T extends UserTemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserTemplateDefaultArgs<ExtArgs>>): Prisma__UserTemplateClient<$Result.GetResult<Prisma.$UserTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parent<T extends Review$parentArgs<ExtArgs> = {}>(args?: Subset<T, Review$parentArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    replies<T extends Review$repliesArgs<ExtArgs> = {}>(args?: Subset<T, Review$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'Int'>
    readonly user_id: FieldRef<"Review", 'Int'>
    readonly user_template_id: FieldRef<"Review", 'Int'>
    readonly rating: FieldRef<"Review", 'String'>
    readonly content: FieldRef<"Review", 'String'>
    readonly parent_id: FieldRef<"Review", 'Int'>
    readonly created_at: FieldRef<"Review", 'DateTime'>
    readonly updated_at: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review.parent
   */
  export type Review$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
  }

  /**
   * Review.replies
   */
  export type Review$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    storename: 'storename',
    email: 'email',
    password: 'password',
    avatar: 'avatar',
    role: 'role',
    googleId: 'googleId',
    facebookId: 'facebookId',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    accountId: 'accountId',
    session: 'session',
    expiresAt: 'expiresAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const TemplateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    main_thumbnail: 'main_thumbnail',
    sub_thumbnail: 'sub_thumbnail',
    banner: 'banner',
    price: 'price',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TemplateScalarFieldEnum = (typeof TemplateScalarFieldEnum)[keyof typeof TemplateScalarFieldEnum]


  export const UserTemplateScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    template_id: 'template_id',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserTemplateScalarFieldEnum = (typeof UserTemplateScalarFieldEnum)[keyof typeof UserTemplateScalarFieldEnum]


  export const ContentScalarFieldEnum: {
    id: 'id',
    userTemplateId: 'userTemplateId',
    sectionName: 'sectionName',
    contentJson: 'contentJson',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ContentScalarFieldEnum = (typeof ContentScalarFieldEnum)[keyof typeof ContentScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    user_template_id: 'user_template_id',
    rating: 'rating',
    content: 'content',
    parent_id: 'parent_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    username: 'username',
    storename: 'storename',
    email: 'email',
    password: 'password',
    avatar: 'avatar',
    googleId: 'googleId',
    facebookId: 'facebookId'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const SessionOrderByRelevanceFieldEnum: {
    session: 'session'
  };

  export type SessionOrderByRelevanceFieldEnum = (typeof SessionOrderByRelevanceFieldEnum)[keyof typeof SessionOrderByRelevanceFieldEnum]


  export const TemplateOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description',
    main_thumbnail: 'main_thumbnail',
    sub_thumbnail: 'sub_thumbnail',
    banner: 'banner',
    price: 'price',
    status: 'status'
  };

  export type TemplateOrderByRelevanceFieldEnum = (typeof TemplateOrderByRelevanceFieldEnum)[keyof typeof TemplateOrderByRelevanceFieldEnum]


  export const UserTemplateOrderByRelevanceFieldEnum: {
    status: 'status'
  };

  export type UserTemplateOrderByRelevanceFieldEnum = (typeof UserTemplateOrderByRelevanceFieldEnum)[keyof typeof UserTemplateOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const ContentOrderByRelevanceFieldEnum: {
    sectionName: 'sectionName',
    status: 'status'
  };

  export type ContentOrderByRelevanceFieldEnum = (typeof ContentOrderByRelevanceFieldEnum)[keyof typeof ContentOrderByRelevanceFieldEnum]


  export const ReviewOrderByRelevanceFieldEnum: {
    rating: 'rating',
    content: 'content'
  };

  export type ReviewOrderByRelevanceFieldEnum = (typeof ReviewOrderByRelevanceFieldEnum)[keyof typeof ReviewOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringNullableFilter<"User"> | string | null
    storename?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    role?: IntFilter<"User"> | number
    googleId?: StringNullableFilter<"User"> | string | null
    facebookId?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    userTemplates?: UserTemplateListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    storename?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    role?: SortOrder
    googleId?: SortOrderInput | SortOrder
    facebookId?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    userTemplates?: UserTemplateOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    storename?: string
    email?: string
    googleId?: string
    facebookId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    role?: IntFilter<"User"> | number
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    userTemplates?: UserTemplateListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "id" | "storename" | "email" | "googleId" | "facebookId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    storename?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    role?: SortOrder
    googleId?: SortOrderInput | SortOrder
    facebookId?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    storename?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: IntWithAggregatesFilter<"User"> | number
    googleId?: StringNullableWithAggregatesFilter<"User"> | string | null
    facebookId?: StringNullableWithAggregatesFilter<"User"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    accountId?: IntFilter<"Session"> | number
    session?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type SessionOrderByWithRelationInput = {
    accountId?: SortOrder
    session?: SortOrder
    expiresAt?: SortOrder
    _relevance?: SessionOrderByRelevanceInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    session?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    accountId?: IntFilter<"Session"> | number
    expiresAt?: DateTimeFilter<"Session"> | Date | string
  }, "session">

  export type SessionOrderByWithAggregationInput = {
    accountId?: SortOrder
    session?: SortOrder
    expiresAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _avg?: SessionAvgOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
    _sum?: SessionSumOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    accountId?: IntWithAggregatesFilter<"Session"> | number
    session?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type TemplateWhereInput = {
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    id?: IntFilter<"Template"> | number
    name?: StringFilter<"Template"> | string
    description?: StringFilter<"Template"> | string
    main_thumbnail?: StringNullableFilter<"Template"> | string | null
    sub_thumbnail?: StringNullableFilter<"Template"> | string | null
    banner?: StringNullableFilter<"Template"> | string | null
    price?: StringNullableFilter<"Template"> | string | null
    status?: StringFilter<"Template"> | string
    created_at?: DateTimeFilter<"Template"> | Date | string
    updated_at?: DateTimeFilter<"Template"> | Date | string
    userTemplates?: UserTemplateListRelationFilter
  }

  export type TemplateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    main_thumbnail?: SortOrderInput | SortOrder
    sub_thumbnail?: SortOrderInput | SortOrder
    banner?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    userTemplates?: UserTemplateOrderByRelationAggregateInput
    _relevance?: TemplateOrderByRelevanceInput
  }

  export type TemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    name?: StringFilter<"Template"> | string
    description?: StringFilter<"Template"> | string
    main_thumbnail?: StringNullableFilter<"Template"> | string | null
    sub_thumbnail?: StringNullableFilter<"Template"> | string | null
    banner?: StringNullableFilter<"Template"> | string | null
    price?: StringNullableFilter<"Template"> | string | null
    status?: StringFilter<"Template"> | string
    created_at?: DateTimeFilter<"Template"> | Date | string
    updated_at?: DateTimeFilter<"Template"> | Date | string
    userTemplates?: UserTemplateListRelationFilter
  }, "id">

  export type TemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    main_thumbnail?: SortOrderInput | SortOrder
    sub_thumbnail?: SortOrderInput | SortOrder
    banner?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: TemplateCountOrderByAggregateInput
    _avg?: TemplateAvgOrderByAggregateInput
    _max?: TemplateMaxOrderByAggregateInput
    _min?: TemplateMinOrderByAggregateInput
    _sum?: TemplateSumOrderByAggregateInput
  }

  export type TemplateScalarWhereWithAggregatesInput = {
    AND?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    OR?: TemplateScalarWhereWithAggregatesInput[]
    NOT?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Template"> | number
    name?: StringWithAggregatesFilter<"Template"> | string
    description?: StringWithAggregatesFilter<"Template"> | string
    main_thumbnail?: StringNullableWithAggregatesFilter<"Template"> | string | null
    sub_thumbnail?: StringNullableWithAggregatesFilter<"Template"> | string | null
    banner?: StringNullableWithAggregatesFilter<"Template"> | string | null
    price?: StringNullableWithAggregatesFilter<"Template"> | string | null
    status?: StringWithAggregatesFilter<"Template"> | string
    created_at?: DateTimeWithAggregatesFilter<"Template"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Template"> | Date | string
  }

  export type UserTemplateWhereInput = {
    AND?: UserTemplateWhereInput | UserTemplateWhereInput[]
    OR?: UserTemplateWhereInput[]
    NOT?: UserTemplateWhereInput | UserTemplateWhereInput[]
    id?: IntFilter<"UserTemplate"> | number
    user_id?: IntFilter<"UserTemplate"> | number
    template_id?: IntFilter<"UserTemplate"> | number
    status?: StringFilter<"UserTemplate"> | string
    created_at?: DateTimeFilter<"UserTemplate"> | Date | string
    updated_at?: DateTimeFilter<"UserTemplate"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    template?: XOR<TemplateScalarRelationFilter, TemplateWhereInput>
    contents?: ContentListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type UserTemplateOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    template_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    template?: TemplateOrderByWithRelationInput
    contents?: ContentOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    _relevance?: UserTemplateOrderByRelevanceInput
  }

  export type UserTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id_template_id?: UserTemplateUser_idTemplate_idCompoundUniqueInput
    AND?: UserTemplateWhereInput | UserTemplateWhereInput[]
    OR?: UserTemplateWhereInput[]
    NOT?: UserTemplateWhereInput | UserTemplateWhereInput[]
    user_id?: IntFilter<"UserTemplate"> | number
    template_id?: IntFilter<"UserTemplate"> | number
    status?: StringFilter<"UserTemplate"> | string
    created_at?: DateTimeFilter<"UserTemplate"> | Date | string
    updated_at?: DateTimeFilter<"UserTemplate"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    template?: XOR<TemplateScalarRelationFilter, TemplateWhereInput>
    contents?: ContentListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "id" | "user_id_template_id">

  export type UserTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    template_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserTemplateCountOrderByAggregateInput
    _avg?: UserTemplateAvgOrderByAggregateInput
    _max?: UserTemplateMaxOrderByAggregateInput
    _min?: UserTemplateMinOrderByAggregateInput
    _sum?: UserTemplateSumOrderByAggregateInput
  }

  export type UserTemplateScalarWhereWithAggregatesInput = {
    AND?: UserTemplateScalarWhereWithAggregatesInput | UserTemplateScalarWhereWithAggregatesInput[]
    OR?: UserTemplateScalarWhereWithAggregatesInput[]
    NOT?: UserTemplateScalarWhereWithAggregatesInput | UserTemplateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserTemplate"> | number
    user_id?: IntWithAggregatesFilter<"UserTemplate"> | number
    template_id?: IntWithAggregatesFilter<"UserTemplate"> | number
    status?: StringWithAggregatesFilter<"UserTemplate"> | string
    created_at?: DateTimeWithAggregatesFilter<"UserTemplate"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"UserTemplate"> | Date | string
  }

  export type ContentWhereInput = {
    AND?: ContentWhereInput | ContentWhereInput[]
    OR?: ContentWhereInput[]
    NOT?: ContentWhereInput | ContentWhereInput[]
    id?: IntFilter<"Content"> | number
    userTemplateId?: IntFilter<"Content"> | number
    sectionName?: StringFilter<"Content"> | string
    contentJson?: JsonFilter<"Content">
    status?: StringFilter<"Content"> | string
    created_at?: DateTimeFilter<"Content"> | Date | string
    updated_at?: DateTimeFilter<"Content"> | Date | string
    userTemplate?: XOR<UserTemplateScalarRelationFilter, UserTemplateWhereInput>
  }

  export type ContentOrderByWithRelationInput = {
    id?: SortOrder
    userTemplateId?: SortOrder
    sectionName?: SortOrder
    contentJson?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    userTemplate?: UserTemplateOrderByWithRelationInput
    _relevance?: ContentOrderByRelevanceInput
  }

  export type ContentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContentWhereInput | ContentWhereInput[]
    OR?: ContentWhereInput[]
    NOT?: ContentWhereInput | ContentWhereInput[]
    userTemplateId?: IntFilter<"Content"> | number
    sectionName?: StringFilter<"Content"> | string
    contentJson?: JsonFilter<"Content">
    status?: StringFilter<"Content"> | string
    created_at?: DateTimeFilter<"Content"> | Date | string
    updated_at?: DateTimeFilter<"Content"> | Date | string
    userTemplate?: XOR<UserTemplateScalarRelationFilter, UserTemplateWhereInput>
  }, "id">

  export type ContentOrderByWithAggregationInput = {
    id?: SortOrder
    userTemplateId?: SortOrder
    sectionName?: SortOrder
    contentJson?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ContentCountOrderByAggregateInput
    _avg?: ContentAvgOrderByAggregateInput
    _max?: ContentMaxOrderByAggregateInput
    _min?: ContentMinOrderByAggregateInput
    _sum?: ContentSumOrderByAggregateInput
  }

  export type ContentScalarWhereWithAggregatesInput = {
    AND?: ContentScalarWhereWithAggregatesInput | ContentScalarWhereWithAggregatesInput[]
    OR?: ContentScalarWhereWithAggregatesInput[]
    NOT?: ContentScalarWhereWithAggregatesInput | ContentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Content"> | number
    userTemplateId?: IntWithAggregatesFilter<"Content"> | number
    sectionName?: StringWithAggregatesFilter<"Content"> | string
    contentJson?: JsonWithAggregatesFilter<"Content">
    status?: StringWithAggregatesFilter<"Content"> | string
    created_at?: DateTimeWithAggregatesFilter<"Content"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Content"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: IntFilter<"Review"> | number
    user_id?: IntFilter<"Review"> | number
    user_template_id?: IntFilter<"Review"> | number
    rating?: StringFilter<"Review"> | string
    content?: StringNullableFilter<"Review"> | string | null
    parent_id?: IntNullableFilter<"Review"> | number | null
    created_at?: DateTimeFilter<"Review"> | Date | string
    updated_at?: DateTimeFilter<"Review"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    userTemplate?: XOR<UserTemplateScalarRelationFilter, UserTemplateWhereInput>
    parent?: XOR<ReviewNullableScalarRelationFilter, ReviewWhereInput> | null
    replies?: ReviewListRelationFilter
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    user_template_id?: SortOrder
    rating?: SortOrder
    content?: SortOrderInput | SortOrder
    parent_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    userTemplate?: UserTemplateOrderByWithRelationInput
    parent?: ReviewOrderByWithRelationInput
    replies?: ReviewOrderByRelationAggregateInput
    _relevance?: ReviewOrderByRelevanceInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    user_id?: IntFilter<"Review"> | number
    user_template_id?: IntFilter<"Review"> | number
    rating?: StringFilter<"Review"> | string
    content?: StringNullableFilter<"Review"> | string | null
    parent_id?: IntNullableFilter<"Review"> | number | null
    created_at?: DateTimeFilter<"Review"> | Date | string
    updated_at?: DateTimeFilter<"Review"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    userTemplate?: XOR<UserTemplateScalarRelationFilter, UserTemplateWhereInput>
    parent?: XOR<ReviewNullableScalarRelationFilter, ReviewWhereInput> | null
    replies?: ReviewListRelationFilter
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    user_template_id?: SortOrder
    rating?: SortOrder
    content?: SortOrderInput | SortOrder
    parent_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Review"> | number
    user_id?: IntWithAggregatesFilter<"Review"> | number
    user_template_id?: IntWithAggregatesFilter<"Review"> | number
    rating?: StringWithAggregatesFilter<"Review"> | string
    content?: StringNullableWithAggregatesFilter<"Review"> | string | null
    parent_id?: IntNullableWithAggregatesFilter<"Review"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type UserCreateInput = {
    username?: string | null
    storename?: string | null
    email: string
    password?: string | null
    avatar?: string | null
    role: number
    googleId?: string | null
    facebookId?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    userTemplates?: UserTemplateCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username?: string | null
    storename?: string | null
    email: string
    password?: string | null
    avatar?: string | null
    role: number
    googleId?: string | null
    facebookId?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    userTemplates?: UserTemplateUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    storename?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: IntFieldUpdateOperationsInput | number
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userTemplates?: UserTemplateUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    storename?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: IntFieldUpdateOperationsInput | number
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userTemplates?: UserTemplateUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username?: string | null
    storename?: string | null
    email: string
    password?: string | null
    avatar?: string | null
    role: number
    googleId?: string | null
    facebookId?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    storename?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: IntFieldUpdateOperationsInput | number
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    storename?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: IntFieldUpdateOperationsInput | number
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    accountId: number
    session: string
    expiresAt: Date | string
  }

  export type SessionUncheckedCreateInput = {
    accountId: number
    session: string
    expiresAt: Date | string
  }

  export type SessionUpdateInput = {
    accountId?: IntFieldUpdateOperationsInput | number
    session?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateInput = {
    accountId?: IntFieldUpdateOperationsInput | number
    session?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    accountId: number
    session: string
    expiresAt: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    accountId?: IntFieldUpdateOperationsInput | number
    session?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    accountId?: IntFieldUpdateOperationsInput | number
    session?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateCreateInput = {
    name: string
    description: string
    main_thumbnail?: string | null
    sub_thumbnail?: string | null
    banner?: string | null
    price?: string | null
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    userTemplates?: UserTemplateCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    main_thumbnail?: string | null
    sub_thumbnail?: string | null
    banner?: string | null
    price?: string | null
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    userTemplates?: UserTemplateUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    main_thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    sub_thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userTemplates?: UserTemplateUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    main_thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    sub_thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userTemplates?: UserTemplateUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateCreateManyInput = {
    id?: number
    name: string
    description: string
    main_thumbnail?: string | null
    sub_thumbnail?: string | null
    banner?: string | null
    price?: string | null
    status: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TemplateUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    main_thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    sub_thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    main_thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    sub_thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTemplateCreateInput = {
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutUserTemplatesInput
    template: TemplateCreateNestedOneWithoutUserTemplatesInput
    contents?: ContentCreateNestedManyWithoutUserTemplateInput
    reviews?: ReviewCreateNestedManyWithoutUserTemplateInput
  }

  export type UserTemplateUncheckedCreateInput = {
    id?: number
    user_id: number
    template_id: number
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    contents?: ContentUncheckedCreateNestedManyWithoutUserTemplateInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserTemplateInput
  }

  export type UserTemplateUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserTemplatesNestedInput
    template?: TemplateUpdateOneRequiredWithoutUserTemplatesNestedInput
    contents?: ContentUpdateManyWithoutUserTemplateNestedInput
    reviews?: ReviewUpdateManyWithoutUserTemplateNestedInput
  }

  export type UserTemplateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    template_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    contents?: ContentUncheckedUpdateManyWithoutUserTemplateNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserTemplateNestedInput
  }

  export type UserTemplateCreateManyInput = {
    id?: number
    user_id: number
    template_id: number
    status: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserTemplateUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTemplateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    template_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentCreateInput = {
    sectionName: string
    contentJson: JsonNullValueInput | InputJsonValue
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    userTemplate: UserTemplateCreateNestedOneWithoutContentsInput
  }

  export type ContentUncheckedCreateInput = {
    id?: number
    userTemplateId: number
    sectionName: string
    contentJson: JsonNullValueInput | InputJsonValue
    status: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ContentUpdateInput = {
    sectionName?: StringFieldUpdateOperationsInput | string
    contentJson?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userTemplate?: UserTemplateUpdateOneRequiredWithoutContentsNestedInput
  }

  export type ContentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userTemplateId?: IntFieldUpdateOperationsInput | number
    sectionName?: StringFieldUpdateOperationsInput | string
    contentJson?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentCreateManyInput = {
    id?: number
    userTemplateId: number
    sectionName: string
    contentJson: JsonNullValueInput | InputJsonValue
    status: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ContentUpdateManyMutationInput = {
    sectionName?: StringFieldUpdateOperationsInput | string
    contentJson?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userTemplateId?: IntFieldUpdateOperationsInput | number
    sectionName?: StringFieldUpdateOperationsInput | string
    contentJson?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    rating: string
    content?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    userTemplate: UserTemplateCreateNestedOneWithoutReviewsInput
    parent?: ReviewCreateNestedOneWithoutRepliesInput
    replies?: ReviewCreateNestedManyWithoutParentInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    user_id: number
    user_template_id: number
    rating: string
    content?: string | null
    parent_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    replies?: ReviewUncheckedCreateNestedManyWithoutParentInput
  }

  export type ReviewUpdateInput = {
    rating?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    userTemplate?: UserTemplateUpdateOneRequiredWithoutReviewsNestedInput
    parent?: ReviewUpdateOneWithoutRepliesNestedInput
    replies?: ReviewUpdateManyWithoutParentNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    user_template_id?: IntFieldUpdateOperationsInput | number
    rating?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: ReviewUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ReviewCreateManyInput = {
    id?: number
    user_id: number
    user_template_id: number
    rating: string
    content?: string | null
    parent_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    rating?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    user_template_id?: IntFieldUpdateOperationsInput | number
    rating?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserTemplateListRelationFilter = {
    every?: UserTemplateWhereInput
    some?: UserTemplateWhereInput
    none?: UserTemplateWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserTemplateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    storename?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    googleId?: SortOrder
    facebookId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    storename?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    googleId?: SortOrder
    facebookId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    storename?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    googleId?: SortOrder
    facebookId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SessionOrderByRelevanceInput = {
    fields: SessionOrderByRelevanceFieldEnum | SessionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SessionCountOrderByAggregateInput = {
    accountId?: SortOrder
    session?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionAvgOrderByAggregateInput = {
    accountId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    accountId?: SortOrder
    session?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    accountId?: SortOrder
    session?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionSumOrderByAggregateInput = {
    accountId?: SortOrder
  }

  export type TemplateOrderByRelevanceInput = {
    fields: TemplateOrderByRelevanceFieldEnum | TemplateOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    main_thumbnail?: SortOrder
    sub_thumbnail?: SortOrder
    banner?: SortOrder
    price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TemplateAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    main_thumbnail?: SortOrder
    sub_thumbnail?: SortOrder
    banner?: SortOrder
    price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    main_thumbnail?: SortOrder
    sub_thumbnail?: SortOrder
    banner?: SortOrder
    price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TemplateSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TemplateScalarRelationFilter = {
    is?: TemplateWhereInput
    isNot?: TemplateWhereInput
  }

  export type ContentListRelationFilter = {
    every?: ContentWhereInput
    some?: ContentWhereInput
    none?: ContentWhereInput
  }

  export type ContentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserTemplateOrderByRelevanceInput = {
    fields: UserTemplateOrderByRelevanceFieldEnum | UserTemplateOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserTemplateUser_idTemplate_idCompoundUniqueInput = {
    user_id: number
    template_id: number
  }

  export type UserTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    template_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserTemplateAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    template_id?: SortOrder
  }

  export type UserTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    template_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    template_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserTemplateSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    template_id?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserTemplateScalarRelationFilter = {
    is?: UserTemplateWhereInput
    isNot?: UserTemplateWhereInput
  }

  export type ContentOrderByRelevanceInput = {
    fields: ContentOrderByRelevanceFieldEnum | ContentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ContentCountOrderByAggregateInput = {
    id?: SortOrder
    userTemplateId?: SortOrder
    sectionName?: SortOrder
    contentJson?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ContentAvgOrderByAggregateInput = {
    id?: SortOrder
    userTemplateId?: SortOrder
  }

  export type ContentMaxOrderByAggregateInput = {
    id?: SortOrder
    userTemplateId?: SortOrder
    sectionName?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ContentMinOrderByAggregateInput = {
    id?: SortOrder
    userTemplateId?: SortOrder
    sectionName?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ContentSumOrderByAggregateInput = {
    id?: SortOrder
    userTemplateId?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ReviewNullableScalarRelationFilter = {
    is?: ReviewWhereInput | null
    isNot?: ReviewWhereInput | null
  }

  export type ReviewOrderByRelevanceInput = {
    fields: ReviewOrderByRelevanceFieldEnum | ReviewOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    user_template_id?: SortOrder
    rating?: SortOrder
    content?: SortOrder
    parent_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    user_template_id?: SortOrder
    parent_id?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    user_template_id?: SortOrder
    rating?: SortOrder
    content?: SortOrder
    parent_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    user_template_id?: SortOrder
    rating?: SortOrder
    content?: SortOrder
    parent_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    user_template_id?: SortOrder
    parent_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type UserTemplateCreateNestedManyWithoutUserInput = {
    create?: XOR<UserTemplateCreateWithoutUserInput, UserTemplateUncheckedCreateWithoutUserInput> | UserTemplateCreateWithoutUserInput[] | UserTemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTemplateCreateOrConnectWithoutUserInput | UserTemplateCreateOrConnectWithoutUserInput[]
    createMany?: UserTemplateCreateManyUserInputEnvelope
    connect?: UserTemplateWhereUniqueInput | UserTemplateWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type UserTemplateUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserTemplateCreateWithoutUserInput, UserTemplateUncheckedCreateWithoutUserInput> | UserTemplateCreateWithoutUserInput[] | UserTemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTemplateCreateOrConnectWithoutUserInput | UserTemplateCreateOrConnectWithoutUserInput[]
    createMany?: UserTemplateCreateManyUserInputEnvelope
    connect?: UserTemplateWhereUniqueInput | UserTemplateWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserTemplateUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserTemplateCreateWithoutUserInput, UserTemplateUncheckedCreateWithoutUserInput> | UserTemplateCreateWithoutUserInput[] | UserTemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTemplateCreateOrConnectWithoutUserInput | UserTemplateCreateOrConnectWithoutUserInput[]
    upsert?: UserTemplateUpsertWithWhereUniqueWithoutUserInput | UserTemplateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserTemplateCreateManyUserInputEnvelope
    set?: UserTemplateWhereUniqueInput | UserTemplateWhereUniqueInput[]
    disconnect?: UserTemplateWhereUniqueInput | UserTemplateWhereUniqueInput[]
    delete?: UserTemplateWhereUniqueInput | UserTemplateWhereUniqueInput[]
    connect?: UserTemplateWhereUniqueInput | UserTemplateWhereUniqueInput[]
    update?: UserTemplateUpdateWithWhereUniqueWithoutUserInput | UserTemplateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserTemplateUpdateManyWithWhereWithoutUserInput | UserTemplateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserTemplateScalarWhereInput | UserTemplateScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UserTemplateUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserTemplateCreateWithoutUserInput, UserTemplateUncheckedCreateWithoutUserInput> | UserTemplateCreateWithoutUserInput[] | UserTemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTemplateCreateOrConnectWithoutUserInput | UserTemplateCreateOrConnectWithoutUserInput[]
    upsert?: UserTemplateUpsertWithWhereUniqueWithoutUserInput | UserTemplateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserTemplateCreateManyUserInputEnvelope
    set?: UserTemplateWhereUniqueInput | UserTemplateWhereUniqueInput[]
    disconnect?: UserTemplateWhereUniqueInput | UserTemplateWhereUniqueInput[]
    delete?: UserTemplateWhereUniqueInput | UserTemplateWhereUniqueInput[]
    connect?: UserTemplateWhereUniqueInput | UserTemplateWhereUniqueInput[]
    update?: UserTemplateUpdateWithWhereUniqueWithoutUserInput | UserTemplateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserTemplateUpdateManyWithWhereWithoutUserInput | UserTemplateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserTemplateScalarWhereInput | UserTemplateScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UserTemplateCreateNestedManyWithoutTemplateInput = {
    create?: XOR<UserTemplateCreateWithoutTemplateInput, UserTemplateUncheckedCreateWithoutTemplateInput> | UserTemplateCreateWithoutTemplateInput[] | UserTemplateUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: UserTemplateCreateOrConnectWithoutTemplateInput | UserTemplateCreateOrConnectWithoutTemplateInput[]
    createMany?: UserTemplateCreateManyTemplateInputEnvelope
    connect?: UserTemplateWhereUniqueInput | UserTemplateWhereUniqueInput[]
  }

  export type UserTemplateUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<UserTemplateCreateWithoutTemplateInput, UserTemplateUncheckedCreateWithoutTemplateInput> | UserTemplateCreateWithoutTemplateInput[] | UserTemplateUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: UserTemplateCreateOrConnectWithoutTemplateInput | UserTemplateCreateOrConnectWithoutTemplateInput[]
    createMany?: UserTemplateCreateManyTemplateInputEnvelope
    connect?: UserTemplateWhereUniqueInput | UserTemplateWhereUniqueInput[]
  }

  export type UserTemplateUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<UserTemplateCreateWithoutTemplateInput, UserTemplateUncheckedCreateWithoutTemplateInput> | UserTemplateCreateWithoutTemplateInput[] | UserTemplateUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: UserTemplateCreateOrConnectWithoutTemplateInput | UserTemplateCreateOrConnectWithoutTemplateInput[]
    upsert?: UserTemplateUpsertWithWhereUniqueWithoutTemplateInput | UserTemplateUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: UserTemplateCreateManyTemplateInputEnvelope
    set?: UserTemplateWhereUniqueInput | UserTemplateWhereUniqueInput[]
    disconnect?: UserTemplateWhereUniqueInput | UserTemplateWhereUniqueInput[]
    delete?: UserTemplateWhereUniqueInput | UserTemplateWhereUniqueInput[]
    connect?: UserTemplateWhereUniqueInput | UserTemplateWhereUniqueInput[]
    update?: UserTemplateUpdateWithWhereUniqueWithoutTemplateInput | UserTemplateUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: UserTemplateUpdateManyWithWhereWithoutTemplateInput | UserTemplateUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: UserTemplateScalarWhereInput | UserTemplateScalarWhereInput[]
  }

  export type UserTemplateUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<UserTemplateCreateWithoutTemplateInput, UserTemplateUncheckedCreateWithoutTemplateInput> | UserTemplateCreateWithoutTemplateInput[] | UserTemplateUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: UserTemplateCreateOrConnectWithoutTemplateInput | UserTemplateCreateOrConnectWithoutTemplateInput[]
    upsert?: UserTemplateUpsertWithWhereUniqueWithoutTemplateInput | UserTemplateUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: UserTemplateCreateManyTemplateInputEnvelope
    set?: UserTemplateWhereUniqueInput | UserTemplateWhereUniqueInput[]
    disconnect?: UserTemplateWhereUniqueInput | UserTemplateWhereUniqueInput[]
    delete?: UserTemplateWhereUniqueInput | UserTemplateWhereUniqueInput[]
    connect?: UserTemplateWhereUniqueInput | UserTemplateWhereUniqueInput[]
    update?: UserTemplateUpdateWithWhereUniqueWithoutTemplateInput | UserTemplateUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: UserTemplateUpdateManyWithWhereWithoutTemplateInput | UserTemplateUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: UserTemplateScalarWhereInput | UserTemplateScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserTemplatesInput = {
    create?: XOR<UserCreateWithoutUserTemplatesInput, UserUncheckedCreateWithoutUserTemplatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserTemplatesInput
    connect?: UserWhereUniqueInput
  }

  export type TemplateCreateNestedOneWithoutUserTemplatesInput = {
    create?: XOR<TemplateCreateWithoutUserTemplatesInput, TemplateUncheckedCreateWithoutUserTemplatesInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutUserTemplatesInput
    connect?: TemplateWhereUniqueInput
  }

  export type ContentCreateNestedManyWithoutUserTemplateInput = {
    create?: XOR<ContentCreateWithoutUserTemplateInput, ContentUncheckedCreateWithoutUserTemplateInput> | ContentCreateWithoutUserTemplateInput[] | ContentUncheckedCreateWithoutUserTemplateInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutUserTemplateInput | ContentCreateOrConnectWithoutUserTemplateInput[]
    createMany?: ContentCreateManyUserTemplateInputEnvelope
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutUserTemplateInput = {
    create?: XOR<ReviewCreateWithoutUserTemplateInput, ReviewUncheckedCreateWithoutUserTemplateInput> | ReviewCreateWithoutUserTemplateInput[] | ReviewUncheckedCreateWithoutUserTemplateInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserTemplateInput | ReviewCreateOrConnectWithoutUserTemplateInput[]
    createMany?: ReviewCreateManyUserTemplateInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ContentUncheckedCreateNestedManyWithoutUserTemplateInput = {
    create?: XOR<ContentCreateWithoutUserTemplateInput, ContentUncheckedCreateWithoutUserTemplateInput> | ContentCreateWithoutUserTemplateInput[] | ContentUncheckedCreateWithoutUserTemplateInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutUserTemplateInput | ContentCreateOrConnectWithoutUserTemplateInput[]
    createMany?: ContentCreateManyUserTemplateInputEnvelope
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserTemplateInput = {
    create?: XOR<ReviewCreateWithoutUserTemplateInput, ReviewUncheckedCreateWithoutUserTemplateInput> | ReviewCreateWithoutUserTemplateInput[] | ReviewUncheckedCreateWithoutUserTemplateInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserTemplateInput | ReviewCreateOrConnectWithoutUserTemplateInput[]
    createMany?: ReviewCreateManyUserTemplateInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutUserTemplatesNestedInput = {
    create?: XOR<UserCreateWithoutUserTemplatesInput, UserUncheckedCreateWithoutUserTemplatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserTemplatesInput
    upsert?: UserUpsertWithoutUserTemplatesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserTemplatesInput, UserUpdateWithoutUserTemplatesInput>, UserUncheckedUpdateWithoutUserTemplatesInput>
  }

  export type TemplateUpdateOneRequiredWithoutUserTemplatesNestedInput = {
    create?: XOR<TemplateCreateWithoutUserTemplatesInput, TemplateUncheckedCreateWithoutUserTemplatesInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutUserTemplatesInput
    upsert?: TemplateUpsertWithoutUserTemplatesInput
    connect?: TemplateWhereUniqueInput
    update?: XOR<XOR<TemplateUpdateToOneWithWhereWithoutUserTemplatesInput, TemplateUpdateWithoutUserTemplatesInput>, TemplateUncheckedUpdateWithoutUserTemplatesInput>
  }

  export type ContentUpdateManyWithoutUserTemplateNestedInput = {
    create?: XOR<ContentCreateWithoutUserTemplateInput, ContentUncheckedCreateWithoutUserTemplateInput> | ContentCreateWithoutUserTemplateInput[] | ContentUncheckedCreateWithoutUserTemplateInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutUserTemplateInput | ContentCreateOrConnectWithoutUserTemplateInput[]
    upsert?: ContentUpsertWithWhereUniqueWithoutUserTemplateInput | ContentUpsertWithWhereUniqueWithoutUserTemplateInput[]
    createMany?: ContentCreateManyUserTemplateInputEnvelope
    set?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    disconnect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    delete?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    update?: ContentUpdateWithWhereUniqueWithoutUserTemplateInput | ContentUpdateWithWhereUniqueWithoutUserTemplateInput[]
    updateMany?: ContentUpdateManyWithWhereWithoutUserTemplateInput | ContentUpdateManyWithWhereWithoutUserTemplateInput[]
    deleteMany?: ContentScalarWhereInput | ContentScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutUserTemplateNestedInput = {
    create?: XOR<ReviewCreateWithoutUserTemplateInput, ReviewUncheckedCreateWithoutUserTemplateInput> | ReviewCreateWithoutUserTemplateInput[] | ReviewUncheckedCreateWithoutUserTemplateInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserTemplateInput | ReviewCreateOrConnectWithoutUserTemplateInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserTemplateInput | ReviewUpsertWithWhereUniqueWithoutUserTemplateInput[]
    createMany?: ReviewCreateManyUserTemplateInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserTemplateInput | ReviewUpdateWithWhereUniqueWithoutUserTemplateInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserTemplateInput | ReviewUpdateManyWithWhereWithoutUserTemplateInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ContentUncheckedUpdateManyWithoutUserTemplateNestedInput = {
    create?: XOR<ContentCreateWithoutUserTemplateInput, ContentUncheckedCreateWithoutUserTemplateInput> | ContentCreateWithoutUserTemplateInput[] | ContentUncheckedCreateWithoutUserTemplateInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutUserTemplateInput | ContentCreateOrConnectWithoutUserTemplateInput[]
    upsert?: ContentUpsertWithWhereUniqueWithoutUserTemplateInput | ContentUpsertWithWhereUniqueWithoutUserTemplateInput[]
    createMany?: ContentCreateManyUserTemplateInputEnvelope
    set?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    disconnect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    delete?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    update?: ContentUpdateWithWhereUniqueWithoutUserTemplateInput | ContentUpdateWithWhereUniqueWithoutUserTemplateInput[]
    updateMany?: ContentUpdateManyWithWhereWithoutUserTemplateInput | ContentUpdateManyWithWhereWithoutUserTemplateInput[]
    deleteMany?: ContentScalarWhereInput | ContentScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutUserTemplateNestedInput = {
    create?: XOR<ReviewCreateWithoutUserTemplateInput, ReviewUncheckedCreateWithoutUserTemplateInput> | ReviewCreateWithoutUserTemplateInput[] | ReviewUncheckedCreateWithoutUserTemplateInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserTemplateInput | ReviewCreateOrConnectWithoutUserTemplateInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserTemplateInput | ReviewUpsertWithWhereUniqueWithoutUserTemplateInput[]
    createMany?: ReviewCreateManyUserTemplateInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserTemplateInput | ReviewUpdateWithWhereUniqueWithoutUserTemplateInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserTemplateInput | ReviewUpdateManyWithWhereWithoutUserTemplateInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UserTemplateCreateNestedOneWithoutContentsInput = {
    create?: XOR<UserTemplateCreateWithoutContentsInput, UserTemplateUncheckedCreateWithoutContentsInput>
    connectOrCreate?: UserTemplateCreateOrConnectWithoutContentsInput
    connect?: UserTemplateWhereUniqueInput
  }

  export type UserTemplateUpdateOneRequiredWithoutContentsNestedInput = {
    create?: XOR<UserTemplateCreateWithoutContentsInput, UserTemplateUncheckedCreateWithoutContentsInput>
    connectOrCreate?: UserTemplateCreateOrConnectWithoutContentsInput
    upsert?: UserTemplateUpsertWithoutContentsInput
    connect?: UserTemplateWhereUniqueInput
    update?: XOR<XOR<UserTemplateUpdateToOneWithWhereWithoutContentsInput, UserTemplateUpdateWithoutContentsInput>, UserTemplateUncheckedUpdateWithoutContentsInput>
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type UserTemplateCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserTemplateCreateWithoutReviewsInput, UserTemplateUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserTemplateCreateOrConnectWithoutReviewsInput
    connect?: UserTemplateWhereUniqueInput
  }

  export type ReviewCreateNestedOneWithoutRepliesInput = {
    create?: XOR<ReviewCreateWithoutRepliesInput, ReviewUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutRepliesInput
    connect?: ReviewWhereUniqueInput
  }

  export type ReviewCreateNestedManyWithoutParentInput = {
    create?: XOR<ReviewCreateWithoutParentInput, ReviewUncheckedCreateWithoutParentInput> | ReviewCreateWithoutParentInput[] | ReviewUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutParentInput | ReviewCreateOrConnectWithoutParentInput[]
    createMany?: ReviewCreateManyParentInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<ReviewCreateWithoutParentInput, ReviewUncheckedCreateWithoutParentInput> | ReviewCreateWithoutParentInput[] | ReviewUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutParentInput | ReviewCreateOrConnectWithoutParentInput[]
    createMany?: ReviewCreateManyParentInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserTemplateUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserTemplateCreateWithoutReviewsInput, UserTemplateUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserTemplateCreateOrConnectWithoutReviewsInput
    upsert?: UserTemplateUpsertWithoutReviewsInput
    connect?: UserTemplateWhereUniqueInput
    update?: XOR<XOR<UserTemplateUpdateToOneWithWhereWithoutReviewsInput, UserTemplateUpdateWithoutReviewsInput>, UserTemplateUncheckedUpdateWithoutReviewsInput>
  }

  export type ReviewUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<ReviewCreateWithoutRepliesInput, ReviewUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutRepliesInput
    upsert?: ReviewUpsertWithoutRepliesInput
    disconnect?: ReviewWhereInput | boolean
    delete?: ReviewWhereInput | boolean
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutRepliesInput, ReviewUpdateWithoutRepliesInput>, ReviewUncheckedUpdateWithoutRepliesInput>
  }

  export type ReviewUpdateManyWithoutParentNestedInput = {
    create?: XOR<ReviewCreateWithoutParentInput, ReviewUncheckedCreateWithoutParentInput> | ReviewCreateWithoutParentInput[] | ReviewUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutParentInput | ReviewCreateOrConnectWithoutParentInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutParentInput | ReviewUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: ReviewCreateManyParentInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutParentInput | ReviewUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutParentInput | ReviewUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReviewUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<ReviewCreateWithoutParentInput, ReviewUncheckedCreateWithoutParentInput> | ReviewCreateWithoutParentInput[] | ReviewUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutParentInput | ReviewCreateOrConnectWithoutParentInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutParentInput | ReviewUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: ReviewCreateManyParentInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutParentInput | ReviewUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutParentInput | ReviewUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserTemplateCreateWithoutUserInput = {
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    template: TemplateCreateNestedOneWithoutUserTemplatesInput
    contents?: ContentCreateNestedManyWithoutUserTemplateInput
    reviews?: ReviewCreateNestedManyWithoutUserTemplateInput
  }

  export type UserTemplateUncheckedCreateWithoutUserInput = {
    id?: number
    template_id: number
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    contents?: ContentUncheckedCreateNestedManyWithoutUserTemplateInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserTemplateInput
  }

  export type UserTemplateCreateOrConnectWithoutUserInput = {
    where: UserTemplateWhereUniqueInput
    create: XOR<UserTemplateCreateWithoutUserInput, UserTemplateUncheckedCreateWithoutUserInput>
  }

  export type UserTemplateCreateManyUserInputEnvelope = {
    data: UserTemplateCreateManyUserInput | UserTemplateCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutUserInput = {
    rating: string
    content?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    userTemplate: UserTemplateCreateNestedOneWithoutReviewsInput
    parent?: ReviewCreateNestedOneWithoutRepliesInput
    replies?: ReviewCreateNestedManyWithoutParentInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: number
    user_template_id: number
    rating: string
    content?: string | null
    parent_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    replies?: ReviewUncheckedCreateNestedManyWithoutParentInput
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserTemplateUpsertWithWhereUniqueWithoutUserInput = {
    where: UserTemplateWhereUniqueInput
    update: XOR<UserTemplateUpdateWithoutUserInput, UserTemplateUncheckedUpdateWithoutUserInput>
    create: XOR<UserTemplateCreateWithoutUserInput, UserTemplateUncheckedCreateWithoutUserInput>
  }

  export type UserTemplateUpdateWithWhereUniqueWithoutUserInput = {
    where: UserTemplateWhereUniqueInput
    data: XOR<UserTemplateUpdateWithoutUserInput, UserTemplateUncheckedUpdateWithoutUserInput>
  }

  export type UserTemplateUpdateManyWithWhereWithoutUserInput = {
    where: UserTemplateScalarWhereInput
    data: XOR<UserTemplateUpdateManyMutationInput, UserTemplateUncheckedUpdateManyWithoutUserInput>
  }

  export type UserTemplateScalarWhereInput = {
    AND?: UserTemplateScalarWhereInput | UserTemplateScalarWhereInput[]
    OR?: UserTemplateScalarWhereInput[]
    NOT?: UserTemplateScalarWhereInput | UserTemplateScalarWhereInput[]
    id?: IntFilter<"UserTemplate"> | number
    user_id?: IntFilter<"UserTemplate"> | number
    template_id?: IntFilter<"UserTemplate"> | number
    status?: StringFilter<"UserTemplate"> | string
    created_at?: DateTimeFilter<"UserTemplate"> | Date | string
    updated_at?: DateTimeFilter<"UserTemplate"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: IntFilter<"Review"> | number
    user_id?: IntFilter<"Review"> | number
    user_template_id?: IntFilter<"Review"> | number
    rating?: StringFilter<"Review"> | string
    content?: StringNullableFilter<"Review"> | string | null
    parent_id?: IntNullableFilter<"Review"> | number | null
    created_at?: DateTimeFilter<"Review"> | Date | string
    updated_at?: DateTimeFilter<"Review"> | Date | string
  }

  export type UserTemplateCreateWithoutTemplateInput = {
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutUserTemplatesInput
    contents?: ContentCreateNestedManyWithoutUserTemplateInput
    reviews?: ReviewCreateNestedManyWithoutUserTemplateInput
  }

  export type UserTemplateUncheckedCreateWithoutTemplateInput = {
    id?: number
    user_id: number
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    contents?: ContentUncheckedCreateNestedManyWithoutUserTemplateInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserTemplateInput
  }

  export type UserTemplateCreateOrConnectWithoutTemplateInput = {
    where: UserTemplateWhereUniqueInput
    create: XOR<UserTemplateCreateWithoutTemplateInput, UserTemplateUncheckedCreateWithoutTemplateInput>
  }

  export type UserTemplateCreateManyTemplateInputEnvelope = {
    data: UserTemplateCreateManyTemplateInput | UserTemplateCreateManyTemplateInput[]
    skipDuplicates?: boolean
  }

  export type UserTemplateUpsertWithWhereUniqueWithoutTemplateInput = {
    where: UserTemplateWhereUniqueInput
    update: XOR<UserTemplateUpdateWithoutTemplateInput, UserTemplateUncheckedUpdateWithoutTemplateInput>
    create: XOR<UserTemplateCreateWithoutTemplateInput, UserTemplateUncheckedCreateWithoutTemplateInput>
  }

  export type UserTemplateUpdateWithWhereUniqueWithoutTemplateInput = {
    where: UserTemplateWhereUniqueInput
    data: XOR<UserTemplateUpdateWithoutTemplateInput, UserTemplateUncheckedUpdateWithoutTemplateInput>
  }

  export type UserTemplateUpdateManyWithWhereWithoutTemplateInput = {
    where: UserTemplateScalarWhereInput
    data: XOR<UserTemplateUpdateManyMutationInput, UserTemplateUncheckedUpdateManyWithoutTemplateInput>
  }

  export type UserCreateWithoutUserTemplatesInput = {
    username?: string | null
    storename?: string | null
    email: string
    password?: string | null
    avatar?: string | null
    role: number
    googleId?: string | null
    facebookId?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserTemplatesInput = {
    id?: number
    username?: string | null
    storename?: string | null
    email: string
    password?: string | null
    avatar?: string | null
    role: number
    googleId?: string | null
    facebookId?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserTemplatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserTemplatesInput, UserUncheckedCreateWithoutUserTemplatesInput>
  }

  export type TemplateCreateWithoutUserTemplatesInput = {
    name: string
    description: string
    main_thumbnail?: string | null
    sub_thumbnail?: string | null
    banner?: string | null
    price?: string | null
    status: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TemplateUncheckedCreateWithoutUserTemplatesInput = {
    id?: number
    name: string
    description: string
    main_thumbnail?: string | null
    sub_thumbnail?: string | null
    banner?: string | null
    price?: string | null
    status: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TemplateCreateOrConnectWithoutUserTemplatesInput = {
    where: TemplateWhereUniqueInput
    create: XOR<TemplateCreateWithoutUserTemplatesInput, TemplateUncheckedCreateWithoutUserTemplatesInput>
  }

  export type ContentCreateWithoutUserTemplateInput = {
    sectionName: string
    contentJson: JsonNullValueInput | InputJsonValue
    status: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ContentUncheckedCreateWithoutUserTemplateInput = {
    id?: number
    sectionName: string
    contentJson: JsonNullValueInput | InputJsonValue
    status: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ContentCreateOrConnectWithoutUserTemplateInput = {
    where: ContentWhereUniqueInput
    create: XOR<ContentCreateWithoutUserTemplateInput, ContentUncheckedCreateWithoutUserTemplateInput>
  }

  export type ContentCreateManyUserTemplateInputEnvelope = {
    data: ContentCreateManyUserTemplateInput | ContentCreateManyUserTemplateInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutUserTemplateInput = {
    rating: string
    content?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    parent?: ReviewCreateNestedOneWithoutRepliesInput
    replies?: ReviewCreateNestedManyWithoutParentInput
  }

  export type ReviewUncheckedCreateWithoutUserTemplateInput = {
    id?: number
    user_id: number
    rating: string
    content?: string | null
    parent_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    replies?: ReviewUncheckedCreateNestedManyWithoutParentInput
  }

  export type ReviewCreateOrConnectWithoutUserTemplateInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserTemplateInput, ReviewUncheckedCreateWithoutUserTemplateInput>
  }

  export type ReviewCreateManyUserTemplateInputEnvelope = {
    data: ReviewCreateManyUserTemplateInput | ReviewCreateManyUserTemplateInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutUserTemplatesInput = {
    update: XOR<UserUpdateWithoutUserTemplatesInput, UserUncheckedUpdateWithoutUserTemplatesInput>
    create: XOR<UserCreateWithoutUserTemplatesInput, UserUncheckedCreateWithoutUserTemplatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserTemplatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserTemplatesInput, UserUncheckedUpdateWithoutUserTemplatesInput>
  }

  export type UserUpdateWithoutUserTemplatesInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    storename?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: IntFieldUpdateOperationsInput | number
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserTemplatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    storename?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: IntFieldUpdateOperationsInput | number
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TemplateUpsertWithoutUserTemplatesInput = {
    update: XOR<TemplateUpdateWithoutUserTemplatesInput, TemplateUncheckedUpdateWithoutUserTemplatesInput>
    create: XOR<TemplateCreateWithoutUserTemplatesInput, TemplateUncheckedCreateWithoutUserTemplatesInput>
    where?: TemplateWhereInput
  }

  export type TemplateUpdateToOneWithWhereWithoutUserTemplatesInput = {
    where?: TemplateWhereInput
    data: XOR<TemplateUpdateWithoutUserTemplatesInput, TemplateUncheckedUpdateWithoutUserTemplatesInput>
  }

  export type TemplateUpdateWithoutUserTemplatesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    main_thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    sub_thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateUncheckedUpdateWithoutUserTemplatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    main_thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    sub_thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentUpsertWithWhereUniqueWithoutUserTemplateInput = {
    where: ContentWhereUniqueInput
    update: XOR<ContentUpdateWithoutUserTemplateInput, ContentUncheckedUpdateWithoutUserTemplateInput>
    create: XOR<ContentCreateWithoutUserTemplateInput, ContentUncheckedCreateWithoutUserTemplateInput>
  }

  export type ContentUpdateWithWhereUniqueWithoutUserTemplateInput = {
    where: ContentWhereUniqueInput
    data: XOR<ContentUpdateWithoutUserTemplateInput, ContentUncheckedUpdateWithoutUserTemplateInput>
  }

  export type ContentUpdateManyWithWhereWithoutUserTemplateInput = {
    where: ContentScalarWhereInput
    data: XOR<ContentUpdateManyMutationInput, ContentUncheckedUpdateManyWithoutUserTemplateInput>
  }

  export type ContentScalarWhereInput = {
    AND?: ContentScalarWhereInput | ContentScalarWhereInput[]
    OR?: ContentScalarWhereInput[]
    NOT?: ContentScalarWhereInput | ContentScalarWhereInput[]
    id?: IntFilter<"Content"> | number
    userTemplateId?: IntFilter<"Content"> | number
    sectionName?: StringFilter<"Content"> | string
    contentJson?: JsonFilter<"Content">
    status?: StringFilter<"Content"> | string
    created_at?: DateTimeFilter<"Content"> | Date | string
    updated_at?: DateTimeFilter<"Content"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserTemplateInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserTemplateInput, ReviewUncheckedUpdateWithoutUserTemplateInput>
    create: XOR<ReviewCreateWithoutUserTemplateInput, ReviewUncheckedCreateWithoutUserTemplateInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserTemplateInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserTemplateInput, ReviewUncheckedUpdateWithoutUserTemplateInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserTemplateInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserTemplateInput>
  }

  export type UserTemplateCreateWithoutContentsInput = {
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutUserTemplatesInput
    template: TemplateCreateNestedOneWithoutUserTemplatesInput
    reviews?: ReviewCreateNestedManyWithoutUserTemplateInput
  }

  export type UserTemplateUncheckedCreateWithoutContentsInput = {
    id?: number
    user_id: number
    template_id: number
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserTemplateInput
  }

  export type UserTemplateCreateOrConnectWithoutContentsInput = {
    where: UserTemplateWhereUniqueInput
    create: XOR<UserTemplateCreateWithoutContentsInput, UserTemplateUncheckedCreateWithoutContentsInput>
  }

  export type UserTemplateUpsertWithoutContentsInput = {
    update: XOR<UserTemplateUpdateWithoutContentsInput, UserTemplateUncheckedUpdateWithoutContentsInput>
    create: XOR<UserTemplateCreateWithoutContentsInput, UserTemplateUncheckedCreateWithoutContentsInput>
    where?: UserTemplateWhereInput
  }

  export type UserTemplateUpdateToOneWithWhereWithoutContentsInput = {
    where?: UserTemplateWhereInput
    data: XOR<UserTemplateUpdateWithoutContentsInput, UserTemplateUncheckedUpdateWithoutContentsInput>
  }

  export type UserTemplateUpdateWithoutContentsInput = {
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserTemplatesNestedInput
    template?: TemplateUpdateOneRequiredWithoutUserTemplatesNestedInput
    reviews?: ReviewUpdateManyWithoutUserTemplateNestedInput
  }

  export type UserTemplateUncheckedUpdateWithoutContentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    template_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutUserTemplateNestedInput
  }

  export type UserCreateWithoutReviewsInput = {
    username?: string | null
    storename?: string | null
    email: string
    password?: string | null
    avatar?: string | null
    role: number
    googleId?: string | null
    facebookId?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    userTemplates?: UserTemplateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: number
    username?: string | null
    storename?: string | null
    email: string
    password?: string | null
    avatar?: string | null
    role: number
    googleId?: string | null
    facebookId?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    userTemplates?: UserTemplateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type UserTemplateCreateWithoutReviewsInput = {
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutUserTemplatesInput
    template: TemplateCreateNestedOneWithoutUserTemplatesInput
    contents?: ContentCreateNestedManyWithoutUserTemplateInput
  }

  export type UserTemplateUncheckedCreateWithoutReviewsInput = {
    id?: number
    user_id: number
    template_id: number
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    contents?: ContentUncheckedCreateNestedManyWithoutUserTemplateInput
  }

  export type UserTemplateCreateOrConnectWithoutReviewsInput = {
    where: UserTemplateWhereUniqueInput
    create: XOR<UserTemplateCreateWithoutReviewsInput, UserTemplateUncheckedCreateWithoutReviewsInput>
  }

  export type ReviewCreateWithoutRepliesInput = {
    rating: string
    content?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    userTemplate: UserTemplateCreateNestedOneWithoutReviewsInput
    parent?: ReviewCreateNestedOneWithoutRepliesInput
  }

  export type ReviewUncheckedCreateWithoutRepliesInput = {
    id?: number
    user_id: number
    user_template_id: number
    rating: string
    content?: string | null
    parent_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ReviewCreateOrConnectWithoutRepliesInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutRepliesInput, ReviewUncheckedCreateWithoutRepliesInput>
  }

  export type ReviewCreateWithoutParentInput = {
    rating: string
    content?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    userTemplate: UserTemplateCreateNestedOneWithoutReviewsInput
    replies?: ReviewCreateNestedManyWithoutParentInput
  }

  export type ReviewUncheckedCreateWithoutParentInput = {
    id?: number
    user_id: number
    user_template_id: number
    rating: string
    content?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    replies?: ReviewUncheckedCreateNestedManyWithoutParentInput
  }

  export type ReviewCreateOrConnectWithoutParentInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutParentInput, ReviewUncheckedCreateWithoutParentInput>
  }

  export type ReviewCreateManyParentInputEnvelope = {
    data: ReviewCreateManyParentInput | ReviewCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    storename?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: IntFieldUpdateOperationsInput | number
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userTemplates?: UserTemplateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    storename?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: IntFieldUpdateOperationsInput | number
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookId?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userTemplates?: UserTemplateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserTemplateUpsertWithoutReviewsInput = {
    update: XOR<UserTemplateUpdateWithoutReviewsInput, UserTemplateUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserTemplateCreateWithoutReviewsInput, UserTemplateUncheckedCreateWithoutReviewsInput>
    where?: UserTemplateWhereInput
  }

  export type UserTemplateUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserTemplateWhereInput
    data: XOR<UserTemplateUpdateWithoutReviewsInput, UserTemplateUncheckedUpdateWithoutReviewsInput>
  }

  export type UserTemplateUpdateWithoutReviewsInput = {
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserTemplatesNestedInput
    template?: TemplateUpdateOneRequiredWithoutUserTemplatesNestedInput
    contents?: ContentUpdateManyWithoutUserTemplateNestedInput
  }

  export type UserTemplateUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    template_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    contents?: ContentUncheckedUpdateManyWithoutUserTemplateNestedInput
  }

  export type ReviewUpsertWithoutRepliesInput = {
    update: XOR<ReviewUpdateWithoutRepliesInput, ReviewUncheckedUpdateWithoutRepliesInput>
    create: XOR<ReviewCreateWithoutRepliesInput, ReviewUncheckedCreateWithoutRepliesInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutRepliesInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutRepliesInput, ReviewUncheckedUpdateWithoutRepliesInput>
  }

  export type ReviewUpdateWithoutRepliesInput = {
    rating?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    userTemplate?: UserTemplateUpdateOneRequiredWithoutReviewsNestedInput
    parent?: ReviewUpdateOneWithoutRepliesNestedInput
  }

  export type ReviewUncheckedUpdateWithoutRepliesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    user_template_id?: IntFieldUpdateOperationsInput | number
    rating?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutParentInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutParentInput, ReviewUncheckedUpdateWithoutParentInput>
    create: XOR<ReviewCreateWithoutParentInput, ReviewUncheckedCreateWithoutParentInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutParentInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutParentInput, ReviewUncheckedUpdateWithoutParentInput>
  }

  export type ReviewUpdateManyWithWhereWithoutParentInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutParentInput>
  }

  export type UserTemplateCreateManyUserInput = {
    id?: number
    template_id: number
    status: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ReviewCreateManyUserInput = {
    id?: number
    user_template_id: number
    rating: string
    content?: string | null
    parent_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserTemplateUpdateWithoutUserInput = {
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    template?: TemplateUpdateOneRequiredWithoutUserTemplatesNestedInput
    contents?: ContentUpdateManyWithoutUserTemplateNestedInput
    reviews?: ReviewUpdateManyWithoutUserTemplateNestedInput
  }

  export type UserTemplateUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    template_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    contents?: ContentUncheckedUpdateManyWithoutUserTemplateNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserTemplateNestedInput
  }

  export type UserTemplateUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    template_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutUserInput = {
    rating?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userTemplate?: UserTemplateUpdateOneRequiredWithoutReviewsNestedInput
    parent?: ReviewUpdateOneWithoutRepliesNestedInput
    replies?: ReviewUpdateManyWithoutParentNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_template_id?: IntFieldUpdateOperationsInput | number
    rating?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: ReviewUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_template_id?: IntFieldUpdateOperationsInput | number
    rating?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTemplateCreateManyTemplateInput = {
    id?: number
    user_id: number
    status: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserTemplateUpdateWithoutTemplateInput = {
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserTemplatesNestedInput
    contents?: ContentUpdateManyWithoutUserTemplateNestedInput
    reviews?: ReviewUpdateManyWithoutUserTemplateNestedInput
  }

  export type UserTemplateUncheckedUpdateWithoutTemplateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    contents?: ContentUncheckedUpdateManyWithoutUserTemplateNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserTemplateNestedInput
  }

  export type UserTemplateUncheckedUpdateManyWithoutTemplateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentCreateManyUserTemplateInput = {
    id?: number
    sectionName: string
    contentJson: JsonNullValueInput | InputJsonValue
    status: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ReviewCreateManyUserTemplateInput = {
    id?: number
    user_id: number
    rating: string
    content?: string | null
    parent_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ContentUpdateWithoutUserTemplateInput = {
    sectionName?: StringFieldUpdateOperationsInput | string
    contentJson?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentUncheckedUpdateWithoutUserTemplateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sectionName?: StringFieldUpdateOperationsInput | string
    contentJson?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentUncheckedUpdateManyWithoutUserTemplateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sectionName?: StringFieldUpdateOperationsInput | string
    contentJson?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutUserTemplateInput = {
    rating?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    parent?: ReviewUpdateOneWithoutRepliesNestedInput
    replies?: ReviewUpdateManyWithoutParentNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserTemplateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rating?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: ReviewUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ReviewUncheckedUpdateManyWithoutUserTemplateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rating?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyParentInput = {
    id?: number
    user_id: number
    user_template_id: number
    rating: string
    content?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ReviewUpdateWithoutParentInput = {
    rating?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    userTemplate?: UserTemplateUpdateOneRequiredWithoutReviewsNestedInput
    replies?: ReviewUpdateManyWithoutParentNestedInput
  }

  export type ReviewUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    user_template_id?: IntFieldUpdateOperationsInput | number
    rating?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: ReviewUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ReviewUncheckedUpdateManyWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    user_template_id?: IntFieldUpdateOperationsInput | number
    rating?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}