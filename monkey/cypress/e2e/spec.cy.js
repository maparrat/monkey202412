Cypress.Commands.add('login', () => {
  cy.visit('http://localhost:2368/ghost/');
 

  cy.get('#identification').type('a.solanop@uniandes.edu.co'); 
  cy.get('#password').type('Anamar3_nac'); 

  cy.get('button[type="submit"]').click();
  cy.wait(2000);

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
        randomVisitaPages(3);
        randomVisitaPosts(3);
    })
})

function randomVisitaPages(monkeysLeft){
    var monkeysLeft = monkeysLeft;
    if (monkeysLeft>0){
        cy.visit('http://localhost:2368/ghost/#/pages')
        cy.wait(3000);
        cy.get('main').find('svg')
        cy.get('span.ember-power-select-selected-item').then($links => {
        var randomLink = $links.get(getRandomInt(0, $links.length));
        if(!Cypress.dom.isHidden(randomLink)) {
            cy.wrap(randomLink).click({force: true});
            cy.get('li.ember-power-select-option').then($links => {
                var randomLink = $links.get(getRandomInt(0, $links.length));
                if(!Cypress.dom.isHidden(randomLink)) {
                    cy.wrap(randomLink).click({force: true})
                }})
            monkeysLeft = monkeysLeft - 1;
        }
    })
    }
}

function randomVisitaPosts(monkeysLeft){
        var monkeysLeft = monkeysLeft;
        if (monkeysLeft>0){
            cy.visit('http://localhost:2368/ghost/#/posts')
            cy.wait(3000);
            cy.get('main').find('svg')
            cy.get('span.ember-power-select-selected-item').then($links => {
            var randomLink = $links.get(getRandomInt(0, $links.length));
            if(!Cypress.dom.isHidden(randomLink)) {
                cy.wrap(randomLink).click({force: true});
                cy.get('li.ember-power-select-option').then($links => {
                    var randomLink = $links.get(getRandomInt(0, $links.length));
                    if(!Cypress.dom.isHidden(randomLink)) {
                        cy.wrap(randomLink).click({force: true})
                    }})
                monkeysLeft = monkeysLeft - 1;
            }
        })
        }
    }
    

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};


function randomClickEscenario2(monkeysLeft) {


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