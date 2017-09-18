import { AngularWithBootStrap4Page } from './app.po';

describe('angular-with-boot-strap4 App', () => {
  let page: AngularWithBootStrap4Page;

  beforeEach(() => {
    page = new AngularWithBootStrap4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
