import { Currencies } from './currency'
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';



describe('currency class', () => {

    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule], 
        
      }));

    it('test getCurrencies()', () =>{
        //Arrange
        const currency = new Currencies();

        //Act
        const currencies = currency.getCurrencies();

        //Assert
        const expectedOutput = ['USD', 'INR', 'EUR', 'AUD'];
        expect(currencies).toEqual(expectedOutput);

    })
})