/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
<<<<<<< HEAD
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/announce` | `/(tabs)/explore` | `/(tabs)/menu` | `/(tabs)/messagens` | `/_sitemap` | `/announce` | `/explore` | `/localization` | `/menu` | `/messagens` | `/notifications` | `/onboarding` | `/signin` | `/signup` | `/welcome`;
=======
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/announce` | `/(tabs)/explore` | `/(tabs)/menu` | `/(tabs)/messagens` | `/(tabs)\` | `/(tabs)\_layout` | `/..\components\home\localization\` | `/..\components\home\search\` | `/Localization` | `/_sitemap` | `/announce` | `/explore` | `/localization` | `/menu` | `/messagens` | `/notifications` | `/onboarding` | `/signin` | `/signup` | `/welcome`;
>>>>>>> e32ec945605e44dc052fc3269e2145516ffdbf94
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
