context('Blog Post', () => {
	before(() => {
	});

	describe('Sitemap test', () => {
		it('should return an actual xml file', () => {
      cy.request('http://localhost:3000/sitemap.xml').its('body').should('include', 'xml')
		});
  });
});
