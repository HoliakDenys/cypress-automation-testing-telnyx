import GlobalCoveragePage from "../pages/global.coverage.page";

it('', () => {
    const globalCoveragePage = new GlobalCoveragePage();

    globalCoveragePage.open();
    globalCoveragePage.clickNumberTypesButton();
    globalCoveragePage.verifyFilteringAndReset('Austria');
})