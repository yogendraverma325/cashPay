import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import Toast from 'react-native-root-toast';

// Define the shape of the context value
interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

// Create a Context with default values and type
const LoadingContext = createContext<LoadingContextType>({
  isLoading: false,
  setIsLoading: () => {}, // default placeholder function
});

export function LoadingProvider({children}: any) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{isLoading, setIsLoading}}>
      {children}
      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#4FD3DA" />
        </View>
      )}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  return useContext(LoadingContext);
}

const styles = StyleSheet.create({
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional background overlay
  },
});
