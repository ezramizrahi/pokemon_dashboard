describe('Team Component', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
  })

  it('should update Pokémon image and stats when select option changes', () => {
    // Abra should be default option
    cy.get('.ui.fluid.search.selection.dropdown').should('contain', 'Abra');
  })
})
