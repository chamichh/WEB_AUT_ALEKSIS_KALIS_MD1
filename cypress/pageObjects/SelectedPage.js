class SelectedPage {
    // Definē URL
    static get endpoint() {
        return "/selectable";
    }

    // Metode, kas piekļūst endpointam
    static access() {
        cy.visit(this.endpoint);
    }

    // Metode, kas atgriež 'Grid' elementu
    static get selectMatrix() {
        return cy.contains('Grid');
    }

    // Metode, kas izvēlas numurus
    static chooseNumbers(choices) {
        choices.forEach((choice) => {
            cy.contains(choice).click();
        });
    }

    // Metode, kas pārbauda izvēlētos vai neizvēlētos elementus
    static checkItems(items, shouldBeSelected) {
        items.forEach((item) => {
            cy.contains(item).should(shouldBeSelected ? 'have.class' : 'not.have.class', 'list-group-item active list-group-item-action');
        });
    }
}

export default SelectedPage;
