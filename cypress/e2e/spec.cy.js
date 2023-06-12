import SelectedPage from "../pageObjects/SelectedPage";

describe('Grid to choose', () => {
    // Pirms katras testa izpildes tiek izsaukta šī metode
    beforeEach(() => {
        SelectedPage.access();
    });

    // Testa izpildes scenārijs
    it('Inspects if highlighted or is not highlighted', () => {
        // Izvēlētie numuri
        const chosen = ['Two', 'Four', 'Six', 'Eight'];
        // Neizvēlētie numuri
        const unchosen = ['One', 'Three', 'Five', 'Seven', 'Nine'];

        // Izvēlas 'Grid' elementu
        SelectedPage.selectMatrix.click();
        // Izvēlas numurus
        SelectedPage.chooseNumbers(chosen);

        // Pārbauda izvēlētos numurus
        SelectedPage.checkItems(chosen, true);
        // Pārbauda neizvēlētos numurus
        SelectedPage.checkItems(unchosen, false);
    });
});
