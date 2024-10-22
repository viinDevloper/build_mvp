/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/announce` | `/(tabs)/explore` | `/(tabs)/menu` | `/(tabs)/messagens` | `/_sitemap` | `/announce` | `/explore` | `/localization` | `/menu` | `/messagens` | `/notifications` | `/onboarding` | `/signin` | `/signup` | `/welcome`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
