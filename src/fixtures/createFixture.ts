const createFixture = <T>(length: number, fixtureCreator: () => T) =>
  Array.from({ length }, fixtureCreator);

export default createFixture;
