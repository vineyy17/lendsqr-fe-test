import { create } from 'zustand';
import { User } from '../types/userTypes';

interface FilterStore {
  filteredUsers: User[] | null;
  setFilteredUsers: (users: User[] | null) => void;
  resetFilters: () => void;
}

export const useFilterStore = create<FilterStore>((set) => ({
  filteredUsers: null,
  setFilteredUsers: (users) => set({ filteredUsers: users }),
  resetFilters: () => set({ filteredUsers: null }),
}));
