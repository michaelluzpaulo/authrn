import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import {useAuth} from '../contexts/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Routes: React.FC = () => {
  const {signed, loading} = useAuth();

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
