/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(auth)/signIn` | `/(auth)/signUp` | `/(auth)/welcome` | `/(tabs)` | `/(tabs)/` | `/(tabs)/announce` | `/(tabs)/explore` | `/(tabs)/localization` | `/(tabs)/menu` | `/(tabs)/messagens` | `/(tabs)/notifications` | `/_sitemap` | `/announce` | `/explore` | `/localization` | `/menu` | `/messagens` | `/notifications` | `/onboarding` | `/signIn` | `/signUp` | `/welcome`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
