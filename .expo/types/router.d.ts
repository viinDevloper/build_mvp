/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
<<<<<<< HEAD
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/announce` | `/(tabs)/explore` | `/(tabs)/menu` | `/(tabs)/messagens` | `/_sitemap` | `/announce` | `/explore` | `/menu` | `/messagens` | `/onboarding` | `/signin` | `/signup` | `/welcome`;
=======
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/announce` | `/(tabs)/explore` | `/(tabs)/menu` | `/(tabs)/messagens` | `/_sitemap` | `/announce` | `/explore` | `/localization` | `/menu` | `/messagens` | `/notifications` | `/onboarding` | `/signin` | `/signup` | `/welcome`;
>>>>>>> ff70dbbd2b6b9bc49a00cc782aa4a85db4f5506f
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
