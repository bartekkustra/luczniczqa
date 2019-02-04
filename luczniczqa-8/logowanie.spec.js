/// <reference types="Cypress" />

const _urlbase = 'https://bartekkustra.github.io/luczniczqa/task-2/'
const indexPage = _urlbase + 'index.html'
const loginPage = _urlbase + 'login.html'
const registerPage = _urlbase + 'register.html'

const confirmUrl = (url) => {
  // cy.url().should('include', '/login.html')
  cy.location().should(($loc) => {
    expect($loc.href).to.eq(url)
  })
}

describe('Account Manager', () => {
  before(() => {
    cy.visit(_urlbase)
  })

  describe('Basic specs check', () => {
    // Going to HOME PAGE shows Login form
    it('should show Login form on homepage', () => {
      cy.get('.container').should('contain', 'Logowanie')
      cy.get('#form').should('exist')
      cy.get('#login').should('exist')
      cy.get('#password').should('exist')
      cy.get('button').should('exist').and('have.text', 'Zaloguj się!')
      cy.get('a').should('exist').and('have.text', 'Zarejestruj się!')
    })

    // Going to LOGIN PAGE while not logged in should redirect to homepage
    it('should redirect to homepage if not logged in', () => {
      cy.visit(loginPage)
      confirmUrl(indexPage)
    })

    // Going to REGISTER PAGE shows register form
    it('should switch to register page and show a form', () => {
      cy.get('a').click();
      confirmUrl(registerPage)
      cy.get('.container').should('contain', 'Rejestracja')
      cy.get('#form').should('exist')
      cy.get('#login').should('exist')
      cy.get('#password').should('exist')
      cy.get('button').should('exist').and('have.text', 'Załóż konto')
      cy.get('a').should('exist').and('have.text', 'Wróc do logowania!')
    })

    // Logging in with test account: tester / 123 should work
    it('should login with default access: tester / 123', () => {
      cy.visit(loginPage)
      cy.get('#login').type('tester')
      cy.get('#password').type('123')
      cy.get('button').click()
      confirmUrl(loginPage)
      cy.get('button').should('have.text', 'Wyloguj się')
      cy.window().then($win => {
        expect($win.localStorage.getItem('logged')).to.eq('1')
      })
    })

    // It should display tester name correctly
    it('should display username correctly', () => {
      cy.get('#welcomemsg').should('have.text', 'Witaj tester!')
    })

    // Going to LOGIN PAGE while logged in should not redirect to homepage,
    // but show the welcoming message
    it('should not show login form when logged in', () => {
      // pretend user is logged
      cy.window().then($win => {
        $win.localStorage.setItem('logged', '1')
      })
      cy.visit(loginPage)
      cy.get('#form').should('not.exist')
    })
  })

  describe('Edge cases', () => {
    it('should do something...', () => {
      
    })
  })
})