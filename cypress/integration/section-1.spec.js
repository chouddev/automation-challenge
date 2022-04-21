const { Section1 } = require('../objects/section-1')

describe('Section 1 ', () => {
  beforeEach(() => {
    cy.visit('/section-1', { timeout: 4000 });
    cy.url({ timeout: 4000 }).should('include', '/section-1');
  });
  
  it('Table actions',() => {
    Section1.actions.assertTbIsNotvisible();
    Section1.actions.clickTheShowTb();
    Section1.actions.assertTbIsVisible();
    Section1.actions.assertTbHasFiveHeader();
    Section1.actions.assertTbHasTenRows();
    Section1.actions.assertTbUsers();  
    Section1.actions.assertAge();
  })

  it('Form actions',() => {
    Section1.actions.assertFormIsNotVisible();
    Section1.actions.clickTheShowForm();
    Section1.actions.assertNameAgeFilled();
    Section1.actions.assertOptionFemale();
    Section1.actions.assertCheckbox();
    Section1.actions.assertFormSubmit();
  })  
})

