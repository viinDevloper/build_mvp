/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(auth)\signIn` | `/(auth)\signUp` | `/(auth)\welcome` | `/(tabs)` | `/(tabs)/` | `/(tabs)/announce` | `/(tabs)/explore` | `/(tabs)/menu` | `/(tabs)/messagens` | `/(tabs)\localization` | `/(tabs)\notifications` | `/_sitemap` | `/announce` | `/auth\signIn` | `/auth\signUp` | `/auth\signin` | `/auth\signup` | `/auth\welcome` | `/explore` | `/menu` | `/messagens` | `/onboarding`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
