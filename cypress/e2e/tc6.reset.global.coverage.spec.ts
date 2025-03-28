import GlobalCoveragePage from "../pages/global.coverage.page";

it('Validation of filtering and reset functionality on Global Coverage page', () => {
    const globalCoveragePage = new GlobalCoveragePage();

    globalCoveragePage.open();
    globalCoveragePage.clickNumberTypesButton();
    globalCoveragePage.verifyFilteringAndReset('Austria');
})