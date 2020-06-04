import {
    helloWorld, characterLimitTen
} from './test';

describe('Character limit 10', () => {

    let inputWord = '';
    let inputWordMoreThan10 = '';

    beforeEach(() => {
        inputWord = 'qwertyuiop';
        inputWordMoreThan10 = 'qweqrtyuioasdfg';
    });

    afterEach(() => {
    });

    it('should return false if word is less than or equal 10', () => {
        expect(characterLimitTen(inputWord)).toBeFalsy();
    });

    it('should return true if word is more than 10', () => {
        expect(characterLimitTen(inputWordMoreThan10)).toBeTruthy();
    });
});
