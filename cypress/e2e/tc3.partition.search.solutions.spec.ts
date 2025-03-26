    import SolutionsPage from "../pages/solutions.page";

    it('Validation of search functionality in Solutions tab, when a partial article title is entered', () => {
        const solutionsPage = new SolutionsPage();

        solutionsPage.open();
        solutionsPage.enterSearchField('IoT');

        solutionsPage.validateArticlesContainSearchText('IoT');
    })