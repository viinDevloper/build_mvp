/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
<<<<<<< HEAD
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/announce` | `/(tabs)/explore` | `/(tabs)/menu` | `/(tabs)/messagens` | `/..\components\buttom` | `/_sitemap` | `/announce` | `/explore` | `/menu` | `/messagens` | `/onboarding` | `/signin` | `/signup` | `/welcome`;
=======
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/explore` | `/(tabs)/messagens` | `/(tabs)/notifications` | `/(tabs)/profile` | `/(tabs)\_layout` | `/(tabs)\announce` | `/(tabs)\menu` | `/_sitemap` | `/explore` | `/messagens` | `/notifications` | `/onboarding` | `/profile` | `/signin` | `/signup` | `/welcome`;
>>>>>>> 86a8382da83a0bcd356a9d718663fce34ca03fa0
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
