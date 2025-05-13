import '~/global.css';

import { DarkTheme, DefaultTheme, Theme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, SafeAreaView, View, Text } from 'react-native';
import { NAV_THEME } from '~/lib/constants';
import { useColorScheme } from '~/lib/useColorScheme';
import { PortalHost } from '@rn-primitives/portal';
import { setAndroidNavigationBar } from '~/lib/android-navigation-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const LIGHT_THEME: Theme = {
  ...DefaultTheme,
  colors: NAV_THEME.light,
};

const DARK_THEME: Theme = {
  ...DarkTheme,
  colors: NAV_THEME.dark,
};

// Handle SSR vs client rendering
const useIsomorphicLayoutEffect =
    Platform.OS === 'web' && typeof window === 'undefined' ? React.useEffect : React.useLayoutEffect;

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export default function RootLayout() {
  const hasMounted = React.useRef(false);
  const { colorScheme, isDarkColorScheme } = useColorScheme();
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = React.useState(false);
  const insets = useSafeAreaInsets();

  useIsomorphicLayoutEffect(() => {
    if (hasMounted.current) return;

    if (Platform.OS === 'web') {
      document.documentElement.classList.add('bg-background');
    }

    setAndroidNavigationBar(colorScheme);
    setIsColorSchemeLoaded(true);
    hasMounted.current = true;
  }, []);

  if (!isColorSchemeLoaded) return null;

  const theme = isDarkColorScheme ? DARK_THEME : LIGHT_THEME;

  return (
      <ThemeProvider value={theme}>
        <StatusBar style={isDarkColorScheme ? 'light' : 'dark'} />
        <SafeAreaView
            style={{
              flex: 1,
              backgroundColor: theme.colors.background,
              paddingTop: insets.top,
            }}
        >
          <View style={{ flex: 1 }}>
            <Stack>
              <Stack.Screen
                  name="index"
                  options={{
                    headerShown: false,
                  }}
              />
              <Stack.Screen
                  name="send"
                  options={{
                    headerShown: false,
                  }}
              />
              <Stack.Screen
                name="receive"
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="dashboard/page"
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="confirm_transaction/index"
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="transaction-success/index"
                options={{
                  headerShown: false,
                }}
              />
            </Stack>
          </View>
          <PortalHost />
        </SafeAreaView>
      </ThemeProvider>
  );
}
