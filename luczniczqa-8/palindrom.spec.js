const palindromUrl = 'https://bartekkustra.github.io/luczniczqa/task-1'

const typeWord = (word) => {
  cy.get('input').clear().type(word)
  cy.get('button').click()
}

const shouldPass = (decision = true) => {
  if(decision) {
    cy.get('#output').should('contain', 'Tak')
  } else {
    cy.get('#output').should('contain', 'Nie')
  }
}

const assertWords = (word, backwards) => {
  cy.get('#output > pre:nth-child(1)').should('have.text', word)
  cy.get('#output > pre:nth-child(2)').should('have.text', backwards)
}

describe('Palindrom 2000', () => {
  context('Start', () => {
    it('should open the website', () => {
      cy.visit(palindromUrl)
    });
  
    it('should contain default heading and description', () => {
      cy.get('h3').should('have.text', 'Palindrom 2000')
      cy.get('p').should('contain', 'This awesome script')
    })
  })

  const words = [
    { word: 'kayak', back: 'kayak', shouldPass: true },
    { word: 'something', back: 'gnihtemos', shouldPass: false },
    { word: 'Kayak', back: 'kayaK', shouldPass: true },
    { word: 'something', back: 'gnihtemos', shouldPass: false },
    { word: 'something', back: 'gnihtemos', shouldPass: false },
    { word: 'something', back: 'gnihtemos', shouldPass: false },
    { word: 'something', back: 'gnihtemos', shouldPass: false },
    { word: 'something', back: 'gnihtemos', shouldPass: false },
    { word: 'something', back: 'gnihtemos', shouldPass: false },
    { word: 'something', back: 'gnihtemos', shouldPass: false },
    { word: 'something', back: 'gnihtemos', shouldPass: false },
    { word: 'something', back: 'gnihtemos', shouldPass: false },
    { word: 'something', back: 'gnihtemos', shouldPass: false },
    { word: 'something', back: 'gnihtemos', shouldPass: false },
    { word: 'something', back: 'gnihtemos', shouldPass: false },
  ]

  describe('tests', () => {
    words.map(item => {
      it(`should pass with word: "${item.word}"`, () => {
        typeWord(item.word)
        shouldPass(item.shouldPass)
        assertWords(item.word, item.back)
      })  
    })
  })
})
