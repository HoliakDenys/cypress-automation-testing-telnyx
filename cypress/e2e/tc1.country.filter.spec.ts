import GlobalCoveragePage from "../pages/global.coverage.page";

it('Validation of country filter in Global Coverage (Number Types tab)', () => {
    const globalCoveragePage = new GlobalCoveragePage();

    globalCoveragePage.open();
    globalCoveragePage.clickNumberTypesButton();
    globalCoveragePage.selectCountryFromDropdown('Austria');

    globalCoveragePage.CoverageTableNumberTypesTab
        .find('button')
        .should('have.length', 1)
        .should('have.text', 'Austria ');
})