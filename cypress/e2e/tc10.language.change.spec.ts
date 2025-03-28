import IotSimPage from "../pages/iot.sim.page";

describe('Validation of language change on "IoT SIM Card"', () => {
  let iotSimPage: IotSimPage;
  
  beforeEach(() => {
    iotSimPage = new IotSimPage();
    iotSimPage.open();
  });

  it('should change language to Japanese', () => {
    iotSimPage.checkJapanese();
  });

  it('should change language to Korean', () => {
    iotSimPage.checkKorean();
  });

  it('should change language to English', () => {
    iotSimPage.checkEnglish();
  });
});
