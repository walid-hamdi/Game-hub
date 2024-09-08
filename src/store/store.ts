import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sort?: string;
  search?: string;
}

interface Store {
  gameQuery: GameQuery;
  setSearch: (term: string) => void;
  setPlatformId: (platformId: number) => void;
  setSort: (sort: string) => void;
  setGenreId: (genreId: number) => void;
}
const useGameQueryStore = create<Store>((set) => ({
  gameQuery: {},
  setSearch: (term) => set(() => ({ gameQuery: { search: term } })),

  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),

  setSort: (sort) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sort } })),

  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
}));

export default useGameQueryStore;
