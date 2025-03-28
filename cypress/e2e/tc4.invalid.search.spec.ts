    import SolutionsPage from "../pages/solutions.page";

    it('Validation of search functionality in Solutions tab, when a non-existent article title is entered', () => {
        const solutionsPage = new SolutionsPage();

        solutionsPage.open();
        solutionsPage.enterSearchField('Callback');
        solutionsPage.NoResultsMessage.should('be.visible');
    })