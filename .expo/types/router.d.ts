/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/explore` | `/(tabs)/messagens` | `/(tabs)/notifications` | `/(tabs)/profile` | `/(tabs)\announce` | `/(tabs)\menu` | `/_sitemap` | `/explore` | `/messagens` | `/notifications` | `/onboarding` | `/profile` | `/signin` | `/signup` | `/welcome`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
