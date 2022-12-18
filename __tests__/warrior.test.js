import Warrior from '../src/warrior.js';

describe('Warrior', () => {

  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.123456789);
  });

  test('should correctly create a warrior object with three stats', () => {
    const warrior = new Warrior ();
    expect(warrior.intelligence).toEqual('')
    expect(warrior.strength).toEqual('')
    expect(warrior.dexterity).toEqual('')
  });
  
});
