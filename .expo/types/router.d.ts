/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
<<<<<<< HEAD
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/announce` | `/(tabs)/explore` | `/(tabs)/menu` | `/(tabs)/messagens` | `/_sitemap` | `/announce` | `/explore` | `/localization` | `/menu` | `/messagens` | `/onboarding` | `/signin` | `/signup` | `/welcome`;
=======
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/announce` | `/(tabs)/explore` | `/(tabs)/menu` | `/(tabs)/messagens` | `/(tabs)\` | `/(tabs)\_layout` | `/Localization` | `/_sitemap` | `/announce` | `/explore` | `/localization` | `/menu` | `/messagens` | `/notifications` | `/onboarding` | `/signin` | `/signup` | `/welcome`;
>>>>>>> b2dc405ede0585479b1c049a7e9cd9eca8b433fe
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
