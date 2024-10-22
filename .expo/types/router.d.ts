/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/announce` | `/(tabs)/explore` | `/(tabs)/menu` | `/(tabs)/messagens` | `/(tabs)\` | `/(tabs)\_layout` | `/..\components\core\Notification` | `/..\components\core\ReviewManager` | `/..\components\home\banner\` | `/..\components\home\categories\` | `/..\components\home\image-picker\` | `/..\components\home\localization\` | `/..\components\home\section\` | `/_sitemap` | `/announce` | `/explore` | `/localization` | `/menu` | `/messagens` | `/notifications` | `/onboarding` | `/signin` | `/signup` | `/welcome`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
