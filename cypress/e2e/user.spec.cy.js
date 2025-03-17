
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

 

  it('User Info Update - Success', () => {
    LoginPage.accessLoginPage()
    LoginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkdashboardPage()
    
    
    
  })
it('Login - Fail', () => {
  LoginPage.accessLoginPage()
  LoginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
  LoginPage.checkAccessInvalid()
  }
)
})