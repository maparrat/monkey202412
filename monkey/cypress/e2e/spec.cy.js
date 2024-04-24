Cypress.Commands.add('login', () => {
  cy.visit('http://localhost:2368/ghost/');
 

  cy.get('#identification').type('monkey@gmail.com'); 
  cy.get('#password').type('123456789a'); 

  cy.get('button[type="submit"]').click();

  cy.url().should('include', '/dashboard'); 

  cy.wait(2000);
});

describe('Ghost under monkeys', function() {
  beforeEach(() => {
      // WHEN: User logs in before each test
      cy.login();
    });
it('visits form profile ', function() {
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');
    cy.wait(1000);
    
    randomEventEsenario1(3);
    randomClickEscenario2(3);
})
})
function randomClickEscenario2(monkeysLeft) {

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

var monkeysLeft = monkeysLeft;
if(monkeysLeft > 0) {
    cy.get('a').then($links => {
        var randomLink = $links.get(getRandomInt(0, $links.length));
        if(!Cypress.dom.isHidden(randomLink)) {
            cy.wrap(randomLink).click({force: true});
            monkeysLeft = monkeysLeft - 1;
        }
        cy.wait(1000);
        randomClickEscenario2(monkeysLeft);
    });
}   
}

function randomEventEsenario1(monkeysLeft){
  function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
  };

  var monkeysLeft = monkeysLeft;
  if(monkeysLeft > 0) {
      cy.get('input').then($links => {
          var randomLink = $links.get(getRandomInt(0, $links.length));
          if(!Cypress.dom.isHidden(randomLink)) {
            cy.get(randomLink).type("random");
             
          }
          monkeysLeft = monkeysLeft - 1;
          cy.wait(1000);
          randomEventEsenario1(monkeysLeft);
      });
  }  


}