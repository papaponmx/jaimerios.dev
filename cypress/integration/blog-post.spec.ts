context('Blog Post', () => {
	before(() => {
		cy.visit('http://localhost:3000');
	});

	describe('Blog post route testing', () => {
		it('should have a blog link', () => {
			cy.get('.cta-wrapper > [href="blog"]').first().should('exist').click();
		});

		it('should redirect to blog post page', () => {
			cy.url().should('include', '/blog');
		});

		it('should render a list of posts', () => {
			cy.get('ul').should('exist');
			cy.get('h2').first().should('exist');
		});

		it('should redirect to blog post page', () => {
      cy.visit('http://localhost:3000/blog/a-hitchhikers-guide-to-web-images-on-2019-203j');
      cy.get('h1').should('exist');
      cy.get('article').should('exist');
		});
	});
});
