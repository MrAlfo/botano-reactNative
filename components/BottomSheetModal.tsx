import React, { useCallback, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const BottomSheetModal = ({ closeSheet }: { closeSheet: () => void }) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
    // callbacks
    const handleSheetChanges = useCallback((index: number) => {
      console.log('handleSheetChanges', index);
    }, []);
  const handleClose = useCallback(() => {
    closeSheet();
  }, [closeSheet]);

  return (
    <GestureHandlerRootView style={styles.contentContainer}>
      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});

export default BottomSheetModal;