
import userData from '../fixtures/users/user-Data.json'
import loginPage from '../pages/loginPage.js'
import dashboardPage from '../pages/dashboardPage.js'
import dashboardPage from '../pages/dashboardPage.js'


const LoginPage = new loginPage()
const dashboardPage = new dashboardPage()


describe('Orange HRM Tests', () => {

  const selectorsList = {
   
     sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
     dashboardGrid: ".orangehrm-dashboard-grid",
     myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
     firstNameField: "[name='firstName']",
     lastNameField: "[name='lastName']",
     genericField: ".oxd-input--active",
     
     

  }

 

  it.only('User Info Update - Success', () => {
    LoginPage.accessLoginPage()
    LoginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkdashboardPage()
    // cy.visit('/auth/login')
    // cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    // cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    // cy.get(selectorsList.loginButton).click()
    // cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    
    // cy.get(selectorsList.myInfoButton).click()
    // cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    // cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    // cy.get(selectorsList.genericField).eq(4).clear().type('Employee')
    // cy.get(selectorsList.genericField).eq(5).clear().type('OtherIdTest')
    // cy.get(selectorsList.genericField).eq(6).clear().type('DriversLicenseTest')
   
    
  })
it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  }
)
})