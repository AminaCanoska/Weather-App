import {createSlice} from "@reduxjs/toolkit";

const inputValueSlice = createSlice ({
    name: "inputValue",
    initialState: "",
    reducers: {
        setInputValue: (state, action) => {
            return action.payload;
        }
    }
})

export const {setInputValue} = inputValueSlice.actions;
export default inputValueSlice.reducer;

/*
Perché return action.payload nello slice?

Sì, è corretto! Lo stato iniziale è "" (stringa vuota), e action.payload è il valore dell'input (una stringa).

return action.payload sostituisce completamente lo stato con il nuovo valore (immutabile).
È equivalente a scrivere state = action.payload, ma usando return per Redux Toolkit.
In Redux Toolkit puoi scrivere entrambe le cose:
// Opzione 1: Mutazione diretta (Immer la rende immutabile)
    state = action.payload;  // ✅ Funziona grazie a Immer

// Opzione 2: Return esplicito (più chiaro)
    return action.payload;  // ✅ Anche questo funziona
}
Ho usato return perché è più esplicito e sicuro - dici chiaramente "questo è il nuovo stato". Ma entrambe sono valide con Redux Toolkit!
 */