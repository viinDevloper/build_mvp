/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
<<<<<<< Updated upstream
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/announce` | `/(tabs)/explore` | `/(tabs)/menu` | `/(tabs)/messagens` | `/..\components\core\Notification` | `/..\components\core\ReviewManager` | `/..\components\home\image-picker\` | `/_sitemap` | `/announce` | `/explore` | `/localization` | `/menu` | `/messagens` | `/notifications` | `/onboarding` | `/signin` | `/signup` | `/welcome`;
=======
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/announce` | `/(tabs)/explore` | `/(tabs)/menu` | `/(tabs)/messagens` | `/(tabs)\` | `/(tabs)\_layout` | `/Localization` | `/_sitemap` | `/announce` | `/explore` | `/localization` | `/menu` | `/messagens` | `/notifications` | `/onboarding` | `/signin` | `/signup` | `/welcome`;
>>>>>>> Stashed changes
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
