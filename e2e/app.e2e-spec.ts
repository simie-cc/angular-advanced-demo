import { AngularAdvancedPage } from './app.po';

describe('angular-advanced App', () => {
  let page: AngularAdvancedPage;

  beforeEach(() => {
    page = new AngularAdvancedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
