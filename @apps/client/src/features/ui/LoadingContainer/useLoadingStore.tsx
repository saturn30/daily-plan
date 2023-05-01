import { createStore, useStore } from 'zustand';

export const loadingStore = createStore<{
  isLoading: boolean;
  startLoader: () => void;
  stopLoader: () => void;
}>((set) => ({
  isLoading: false,
  startLoader: () => {
    set({ isLoading: true });
  },
  stopLoader: () => {
    set({ isLoading: false });
  },
}));

export const useLoadingStore = () => useStore(loadingStore);

export const wrapAsyncLoading = async (callback: () => unknown) => {
  loadingStore.getState().startLoader();
  await callback?.();
  loadingStore.getState().stopLoader();
};
