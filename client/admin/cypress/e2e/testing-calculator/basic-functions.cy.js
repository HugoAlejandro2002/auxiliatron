describe('Calculator', () => {
  beforeEach(() => {
    // Visita la página donde se encuentra tu calculadora
    cy.visit('https://auxiliatron-wuy3ib7ad-hugoalejandro2002.vercel.app/');
  });

  it('should add numbers correctly', () => {
    // Haz clic en el primer campo de texto y luego en los botones para introducir el primer número
    cy.get('input[name="input1"]').click();
    cy.get('button').contains('1').click();

    // Haz clic en el segundo campo de texto y luego en los botones para introducir el segundo número
    cy.get('input[name="input2"]').click();
    cy.get('button').contains('2').click();

    // Haz clic en el botón para sumar
    cy.get('button').contains('Sumar').click();

    // Comprueba si el resultado es correcto
    cy.get('div').contains('Resultado: 3').should('exist');
  });

  it('should subtract numbers correctly', () => {
    cy.get('input[name="input1"]').click();
    cy.get('button').contains('5').click();
    cy.get('input[name="input2"]').click();
    cy.get('button').contains('3').click();
    cy.get('button').contains('Restar').click();
    cy.get('div').contains('Resultado: 2').should('exist');
  });


  it('should multiply numbers correctly', () => {
    cy.get('input[name="input1"]').click();
    cy.get('button').contains('4').click();
    cy.get('input[name="input2"]').click();
    cy.get('button').contains('3').click();
    cy.get('button').contains('Multiplicar').click();
    cy.get('div').contains('Resultado: 12').should('exist');
  });

  it('should divide numbers correctly', () => {
    cy.get('input[name="input1"]').click();
    cy.get('button').contains('8').click();
    cy.get('input[name="input2"]').click();
    cy.get('button').contains('4').click();
    cy.get('button').contains('Dividir').click();
    cy.get('div').contains('Resultado: 2').should('exist');
  });

  it('should handle division by zero', () => {
    cy.get('input[name="input1"]').click();
    cy.get('button').contains('8').click();
    cy.get('input[name="input2"]').click();
    cy.get('button').contains('0').click();
    cy.get('button').contains('Dividir').click();
    cy.get('div').contains('Resultado: División por cero').should('exist');
  });

});
