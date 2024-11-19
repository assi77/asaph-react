// Importations depuis Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

// Création du slice de recherche
const searchSlice = createSlice({
  name: 'search',
  initialState: '',
  reducers: {
    setSearchTerm: (state, action) => action.payload,
  },
});

// Exportation de l'action et du reducer
export const { setSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;