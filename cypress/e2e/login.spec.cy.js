describe('Orange HRM Tests', () => {
  it('login -Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('Admin123')
    cy.get('.oxd-button').click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')
  })
  it('login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('test')
    cy.get("[name='password']").type('test')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert')
  })
})